import runWithFps from 'run-with-fps';
import { canvas, ctx, width, height, PIXEL_RATIO } from './setup';
import SimplexNoise from 'simplex-noise';

const noise = new SimplexNoise();

let t = 0;
let t2 = 0;
const SEGMENTS = 20;
const ITER_COUNT = 50;
const RADIUS = 100 * PIXEL_RATIO;
const draw = () => {
  canvas.width = canvas.width;

  t2 += 0.02;
  t = t2;
  for (let j = 0; j < ITER_COUNT; j += 1) {
    t += 0.01;
    ctx.beginPath();
    for (let i = 0; i <= SEGMENTS; i += 1) {
      const angle = ((Math.PI * 2) / SEGMENTS) * i;
      const xoff = ((Math.cos(angle + t) + 1) / 2) * 2 * 3.3;
      const yoff = ((Math.sin(angle + t / 30) + 1) / 2) * 2 * 3.3;
      const n = (noise.noise2D(xoff, yoff) + 1) / 2;
      const r = RADIUS + 300 * n;
      const h = 200 + 160 * n + t * 10;
      const s = 70 + 50 * n;
      const l = 50 + 10 * n;
      ctx.strokeStyle = `hsla(${h},100%,${l}%,0.3)`;

      const x =
        r * Math.cos(angle) + (width * PIXEL_RATIO) / 2 + Math.cos(t + t2) * 30;
      const y =
        r * Math.sin(angle) +
        (height * PIXEL_RATIO) / 2 +
        Math.sin(t + t2) * 30;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }
};

const stop = runWithFps(draw, 20);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      canvas.width = canvas.width;
      stop();
    }
  });
}
