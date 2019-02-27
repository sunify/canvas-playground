import runWithFps from 'run-with-fps';
import * as dat from 'dat.gui';
import eases from 'eases';
import tweeen from 'tweeen';
import lerp from '@sunify/lerp-color';
import {
  canvas,
  ctx,
  width,
  height,
  PIXEL_RATIO,
  downloadCanvas
} from './setup';
import SimplexNoise from 'simplex-noise';

const params = {
  noiseFrequncy: 100,
  noiseAmplitude: 0.3,
  speed: 0.1,
  colorSpeed: 0.1,
  strokeWeight: 0.5,
  stroke: false,
  shape: 'heart',
  save() {
    downloadCanvas(`${params.shape}-${Date.now()}`);
  },
  refreshPalette() {
    const prevColors = [...colorsArr];
    colorsArr = shuffle(colorsArr);

    if (this.prevTween) {
      this.prevTween();
    }

    this.prevTween = tweeen(
      0,
      1,
      progress => {
        const curColors = prevColors.map((prevC, i) =>
          lerp(prevC, colorsArr[i], progress)
        );
        colors = lerp(...curColors, ...curColors);
      },
      {
        duration: 500,
        easing: eases.quadInOut
      }
    );
  }
};
const gui = new dat.GUI();
gui.add(params, 'noiseFrequncy', 0, 200);
gui.add(params, 'noiseAmplitude', 0, 10);
gui.add(params, 'speed', 0, 1);
gui.add(params, 'stroke');
gui.add(params, 'strokeWeight', 0, 4);
gui.add(params, 'colorSpeed', 0, 1);
gui.add(params, 'shape', ['circle', 'heart']);
gui.add(params, 'refreshPalette');
gui.add(params, 'save');

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
let colorsArr = shuffle([
  '#d71259',
  '#8e2d56',
  '#208381',
  '#eca639',
  '#73d2de'
]);

export let colors = lerp(...colorsArr, ...colorsArr);

document.addEventListener('keydown', e => {
  if (e.keyCode === 32) {
    params.refreshPalette();
  }
});

const noise = new SimplexNoise();

function noisifyCanvas(context, amout = 30) {
  const canvas = context.canvas;
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = new Uint32Array(imageData.data.buffer);

  for (let x = 0; x < canvas.width; x += 1) {
    for (let y = 0; y < canvas.height; y += 1) {
      const i = y * canvas.width + x;
      const r0 = imageData.data[i * 4 + 0];
      const g0 = imageData.data[i * 4 + 1];
      const b0 = imageData.data[i * 4 + 2];
      const a0 = imageData.data[i * 4 + 3];
      const r = Math.max(0, Math.min(255, r0 + (0.5 - Math.random()) * amout));
      const g = Math.max(0, Math.min(255, g0 + (0.5 - Math.random()) * amout));
      const b = Math.max(0, Math.min(255, b0 + (0.5 - Math.random()) * amout));

      data[i] =
        (a0 << 24) | // alpha
        (b << 16) | // blue
        (g << 8) | // green
        r;
    }
  }

  context.putImageData(imageData, 0, 0);
}

const noiseCanvas = document.createElement('canvas');
const noiseCtx = noiseCanvas.getContext('2d');
noiseCanvas.width = 200;
noiseCanvas.height = 200;

function heartCoords(angle, n, progress) {
  const scale = 2 + Math.abs(Math.sin(t2 * 60)) * 0 + n * params.noiseAmplitude;
  const x =
    (16 * scale * (1 - progress) * Math.sin(angle) ** 3 + 25) * 15 -
    350 +
    (width * PIXEL_RATIO) / 2;

  const y =
    (13 * scale * (1 - progress) * Math.cos(angle) -
      5 * scale * Math.cos(angle * 2) -
      2 * scale * Math.cos(3 * angle) -
      Math.cos(4 * angle) +
      20) *
      -15 +
    300 +
    (height * PIXEL_RATIO) / 2;

  return [x, y];
}

function circleCoords(angle, n, progress) {
  const r = (1000 * (1 - progress) + n * 20) / 2;
  const x = r * Math.cos(angle) + (width * PIXEL_RATIO) / 2;
  const y = r * Math.sin(angle) + (height * PIXEL_RATIO) / 2;

  return [x, y];
}

let t = 0;
let t2 = 0;
let progressOffset = 0;
const SEGMENTS = 60;
const ITER_COUNT = 50;
const RADIUS = 100 * PIXEL_RATIO;
const draw = () => {
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  noiseCtx.fillStyle = '#000';
  noiseCtx.fillRect(0, 0, noiseCanvas.width, noiseCanvas.height);
  noisifyCanvas(noiseCtx, 60);

  t2 += params.speed / 100;
  progressOffset += params.colorSpeed / 10;
  t = t2;
  for (let j = 0; j < ITER_COUNT; j += 1) {
    t += 0.01;
    ctx.beginPath();
    const progress = j / ITER_COUNT;
    for (let i = 0; i <= SEGMENTS; i += 1) {
      const angle = ((Math.PI * 2) / SEGMENTS) * i;
      const xoff =
        ((Math.cos(angle - t / 1) + 1) / 2) * 2 * params.noiseFrequncy;
      const yoff =
        ((Math.sin(angle + t / 2) + 1) / 2) * 2 * params.noiseFrequncy;
      const n = (noise.noise2D(xoff, yoff) + 1) * params.noiseAmplitude;

      const shape = {
        circle: circleCoords,
        heart: heartCoords
      }[params.shape];
      const [x, y] = shape(angle, n, progress);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.fillStyle = colors(
      eases.bounceInOut(Math.min((progress + progressOffset) % 1, 1))
    );

    if (j === 1) {
      ctx.shadowColor = lerp(ctx.fillStyle, 'rgba(#FFF, 0)', 0.2);
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
      const dgRoot = document.querySelector('body > .dg');
      if (dgRoot) {
        dgRoot.removeChild(dgRoot.querySelector('.dg.main'));
      }
      canvas.width = canvas.width;
      stop();
    }
  });
}
