import runWithFps from 'run-with-fps';
import lerp from 'lerp';
import eases from 'eases';
import lerpColor from '@sunify/lerp-color';
import SimplexNoise from 'simplex-noise';
import { canvas, ctx } from './setup';
import shapes from './shapes';
import { noisifyCanvas } from './utils';

import { params } from './params';

const noise = new SimplexNoise();

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

const noiseCanvas = document.createElement('canvas');
const noiseCtx = noiseCanvas.getContext('2d');
noiseCanvas.width = 200;
noiseCanvas.height = 200;

let t = 0;
let t2 = 0;
let progressOffset = 0;
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
      analyzer.smoothingTimeConstant = 0.2;
      source.connect(analyzer);
    })
    .catch(err => {
      console.log(err);
    });
};

getMicro();
setTimeout(() => {
  getMicro();
}, 1000);
// setTimeout(() => {
//   getMicro();
// }, 5000);
const draw = () => {
  let freqs = [];
  if (analyzer) {
    const src = new Uint8Array(analyzer.frequencyBinCount);
    analyzer.getByteFrequencyData(src);
    freqs = interpolateArray(
      Array.from(src)
        .map(f => f / 256)
        .slice(Math.round(src.length * 0.1), Math.round(src.length * 0.8)),
      params.iterations
    );
  }
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  noiseCtx.fillStyle = '#000';
  noiseCtx.fillRect(0, 0, noiseCanvas.width, noiseCanvas.height);
  noisifyCanvas(noiseCtx, 60);

  t2 += params.speed / 100;
  progressOffset += params.colorSpeed / 10;
  t = t2;
  for (let j = 0; j < params.iterations; j += 1) {
    const freq = freqs[j] || 0;
    t += 0.01 + freq * 10000;
    ctx.beginPath();
    const progress = j / params.iterations;
    for (let i = 0; i <= params.segments; i += 1) {
      const angle = ((Math.PI * 2) / params.segments) * i;
      const xoff =
        ((Math.cos(angle - t / 1) + 1) / 2) *
        2 *
        params.noiseFrequency *
        20 *
        freq *
        5;
      const yoff =
        ((Math.sin(angle + t / 2) + 1) / 2) *
        2 *
        params.noiseFrequency *
        20 *
        freq *
        5;
      const n = noise.noise2D(xoff, yoff);

      const [x, y] = shapes[params.shape](angle, n, progress, freq);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.fillStyle = params.colors(
      eases.bounceInOut(
        Math.min((progress + progressOffset + freq / 10) % 1, 1)
      )
    );

    if (j === 1) {
      ctx.shadowColor = lerpColor(ctx.fillStyle, 'rgba(#FFF, 0)', 0.2);
      ctx.shadowBlur = 400;
    } else {
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
    }
    ctx.fill();
    ctx.lineWidth = params.strokeWeight;
    if (params.stroke) {
      ctx.stroke();
    }
  }
  ctx.globalCompositeOperation = 'lighter';

  for (let i = 0; i < Math.ceil(canvas.width / noiseCanvas.width); i += 1) {
    for (let j = 0; j < Math.ceil(canvas.height / noiseCanvas.height); j += 1) {
      ctx.drawImage(noiseCanvas, i * noiseCanvas.width, j * noiseCanvas.height);
    }
  }
};

const stop = runWithFps(draw, 14);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      // const dgRoot = document.querySelector('body > .dg');
      // if (dgRoot) {
      //   dgRoot.removeChild(dgRoot.querySelector('.dg.main'));
      // }
      canvas.width = canvas.width;
      stop();
    }
  });
}
