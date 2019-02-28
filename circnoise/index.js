import runWithFps from 'run-with-fps';
import eases from 'eases';
import lerp from '@sunify/lerp-color';
import SimplexNoise from 'simplex-noise';
import { canvas, ctx } from './setup';
import shapes from './shapes';
import { noisifyCanvas } from './utils';

import { params } from './params';

const noise = new SimplexNoise();

const noiseCanvas = document.createElement('canvas');
const noiseCtx = noiseCanvas.getContext('2d');
noiseCanvas.width = 200;
noiseCanvas.height = 200;

let t = 0;
let t2 = 0;
let progressOffset = 0;
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
  for (let j = 0; j < params.iterations; j += 1) {
    t += 0.01;
    ctx.beginPath();
    const progress = j / params.iterations;
    for (let i = 0; i <= params.segments; i += 1) {
      const angle = ((Math.PI * 2) / params.segments) * i;
      const xoff =
        ((Math.cos(angle - t / 1) + 1) / 2) * 2 * params.noiseFrequency * 20;
      const yoff =
        ((Math.sin(angle + t / 2) + 1) / 2) * 2 * params.noiseFrequency * 20;
      const n = (noise.noise2D(xoff, yoff) + 1) * params.noiseAmplitude;

      const [x, y] = shapes[params.shape](angle, n, progress);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.fillStyle = params.colors(
      eases.bounceInOut(Math.min((progress + progressOffset) % 1, 1))
    );

    if (j === 0) {
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
