import runWithFPS from 'run-with-fps';
import eases from 'eases';
import { Vector } from 'v-for-vector';
import { Segment } from './chain';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const { innerWidth: width, innerHeight: height } = window;
const PIXEL_RATIO = 2;
canvas.width = width * PIXEL_RATIO;
canvas.height = height * PIXEL_RATIO;

const segs = [];
const count = 8;
const size = 30;
const center = Vector.cartesian(width / 2, height / 2);
for (let j = 0; j < count; j += 1) {
  const baseAngle = ((Math.PI * 2) / count) * j;
  const root = new Segment(
    Vector.polar(baseAngle, 100).add(center),
    10,
    baseAngle
  );
  root.colorBase = (360 / count) * j;
  const seg = [root];
  let cur = root;
  for (let i = 0; i < size; i += 1) {
    cur = cur.addChild(
      new Segment(null, (1 - i / size) * 3, Math.PI / 2, Math.random() / 20)
    );
    seg.push(cur);
  }
  segs.push(seg);
}

const draw = () => {
  canvas.width = canvas.width;
  segs.forEach(([root]) => {
    root.colorBase += 1;
    root.update();
  });
  for (let k = 0; k < size; k += 1) {
    segs.forEach((seg, i) => {
      const cur = seg[k];
      const h = (seg[0].colorBase + eases.quartOut(k / size) * 60) % 360;
      const s = 90 + 10 * eases.elasticOut(k / size);
      const l =
        (60 * (eases.elasticOut(k / size) + eases.linear(k / size))) / 2;
      ctx.fillStyle = `hsl(${h}, ${s}%, ${l}%)`;
      ctx.beginPath();
      ctx.arc(
        cur.position.x * PIXEL_RATIO,
        cur.position.y * PIXEL_RATIO,
        eases.linear(1 - k / size) * 50,
        0,
        Math.PI * 2
      );
      ctx.fill();
    });
  }
};
const stop = runWithFPS(draw, 30);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    stop();
  });
}
