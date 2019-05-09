import runWithFps from 'run-with-fps';
import { canvas, ctx, PIXEL_RATIO, width, height } from './setup';
import eases from 'eases';
import lerp from 'lerp';
import lerpColor from '@sunify/lerp-color';
import smooth from 'chaikin-smooth';
import { params, line } from './params';
import { shuffle } from '../circnoise/utils';

const colors = lerpColor(
  ...shuffle(['#820263', '#d90368', '#53dd6c', '#2e294e', '#ffd400'])
);

let source;
let analyzer;
const getMicro = () => {
  const audioCtx = new AudioContext();
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(microphoneStream => {
      source = audioCtx.createMediaStreamSource(microphoneStream);

      analyzer = audioCtx.createAnalyser();
      analyzer.fftSize = 1024;
      analyzer.smoothingTimeConstant = 0.1;
      source.connect(analyzer);
    })
    .catch(err => {
      console.log(err);
    });
};

function interpolateArray(arr, length) {
  if (length < 2) {
    throw new Error('length should be > 2');
  }
  if (arr.length === length) {
    return [...arr];
  }

  const result = [arr[0]];
  const ratio = (arr.length - 1) / (length - 1);
  for (let i = 1; i < length - 1; i += 1) {
    const bottom = Math.floor(i * ratio);
    const top = Math.ceil(i * ratio);
    result.push(lerp(arr[bottom], arr[top], i * ratio - bottom));
  }
  result.push(arr[arr.length - 1]);

  return result;
}

getMicro();
setTimeout(() => {
  getMicro();
}, 1000);

let t = 0;
const draw = () => {
  let freqs = [];
  if (analyzer) {
    const src = new Uint8Array(analyzer.frequencyBinCount);
    analyzer.getByteFrequencyData(src);
    const origFreqs = interpolateArray(
      Array.from(src, f => f / 256),
      190
    ).slice(0, 150);
    freqs = smooth(origFreqs.map((a, i) => [i, a])).map(a => a[1]);
    // freqs = origFreqs;
  }

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width * 2, height * 2);

  const reps = params.reps;
  const r = Math.min(height - 300, width - 300, (reps * 100) / Math.PI);

  // ctx.strokeStyle = 'black';
  // ctx.beginPath();
  // for (let i = 0; i <= reps; i += 1) {
  // const startAngle = (i / reps) * Math.PI * 2;
  // const endAngle = ((i + 1) / reps) * Math.PI * 2;
  //   line.forEach((p, j) => {
  //     const angle = lerp(startAngle, endAngle, p[0] / 100);
  //     const x = Math.cos(angle) * (r + p[1] * params.density) + width;
  //     const y = Math.sin(angle) * (r + p[1] * params.density) + height;
  //     if (i === 0 && j === 0) {
  //       ctx.moveTo(x, y);
  //     } else {
  //       ctx.lineTo(x, y);
  //     }
  //   });
  // }
  // ctx.stroke();

  for (let i = 0; i <= reps; i += 1) {
    const startAngle = (i / reps) * Math.PI * 2;
    const endAngle = ((i + 1) / reps) * Math.PI * 2;
    freqs.forEach((f, i) => {
      ctx.strokeStyle = colors(Math.max(0, eases.bounceInOut(f)));
      ctx.lineWidth = 5;
      const angle = lerp(startAngle, endAngle, i / freqs.length);
      const r1 = 400 + f * 100 * params.density + 10;
      const x1 = Math.cos(angle) * r1 + width;
      const y1 = Math.sin(angle) * r1 + height;
      const r2 = 400 - f * 30 * params.density;
      const x2 = Math.cos(angle) * r2 + width;
      const y2 = Math.sin(angle) * r2 + height;
      // const x3 = Math.cos(angle) * 50 + width;
      // const y3 = Math.sin(angle) * 50 + height;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      // ctx.lineWidth = 0.1;
      // ctx.beginPath();
      // ctx.moveTo(x1, y1);
      // ctx.lineTo(x3, y3);
      // ctx.stroke();
    });
  }
};

const stop = runWithFps(draw, 10);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      stop();
    }
  });
}
