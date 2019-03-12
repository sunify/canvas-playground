import runWithFps from 'run-with-fps';
import { Vector } from 'v-for-vector';
import { canvas, ctx, PIXEL_RATIO } from './setup';
import { params } from './params';
import tween from 'tweeen';
import eases from 'eases';
import SimplexNoise from 'simplex-noise';
const noise = new SimplexNoise();

let t = 0;
const draw = () => {
  t -= 0.001;
  canvas.width = canvas.width;

  const COUNT = 6;
  const LENGTH = 100;
  const RADIUS = 400;
  const WIDTH = 10;
  for (let j = 0; j < COUNT; j += 1) {
    const baseAngle = (j / COUNT) * Math.PI * 2 + t;
    for (let i = 0; i < LENGTH; i += 1) {
      const angle = (i / LENGTH) * Math.PI * 2 + baseAngle;
      const phase = Math.tanh(Math.sin(Math.PI * (i / LENGTH)));
      const b = i / 50;
      const r1 = RADIUS - WIDTH * phase;
      const r2 = RADIUS + WIDTH * phase;
      const x1 = Math.cos(angle) * r1 * b;
      const y1 = Math.sin(angle) * Math.cos(angle * 2) * r1 * b;
      const x2 = Math.cos(angle) * r2 * b;
      const y2 = Math.sin(angle) * Math.cos(angle * 2) * r2 * b;

      ctx.fillStyle = '#FFF';
      ctx.strokeStyle = '#FFF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1 + canvas.width / 2, y1 + canvas.height / 2);
      ctx.lineTo(x2 + canvas.width / 2, y2 + canvas.height / 2);
      ctx.stroke();
    }
  }
};

const stop = runWithFps(draw, 30);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      stop();
    }
  });
}
