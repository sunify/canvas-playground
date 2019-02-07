import runWithFPS from 'run-with-fps';
import eases from 'eases';
import Vector from 'victor';
import { Segment } from './chain';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const { innerWidth: width, innerHeight: height } = window;
const PIXEL_RATIO = 2;
canvas.width = width * PIXEL_RATIO;
canvas.height = height * PIXEL_RATIO;

const segs = [];
const count = 8;
for (let j = 0; j < count; j += 1) {
  const baseAngle = ((Math.PI * 2) / count) * j;
  const seg = new Segment(
    new Vector(
      70 * Math.cos(baseAngle) + width / 2,
      70 * Math.sin(baseAngle) + height / 2
    ),
    10,
    baseAngle
  );
  let cur = seg;
  const size = 20 + Math.round(Math.random() * 20);
  for (let i = 0; i < size; i += 1) {
    cur = cur.addChild(
      new Segment(null, (1 - i / size) * 3, Math.PI / 2, Math.random() / 20)
    );
  }
  seg.colorBase = 360 * Math.random();
  segs.push(seg);
}

const draw = () => {
  canvas.width = canvas.width;

  segs.forEach(seg => {
    seg.colorBase += 0.4;
    let cur = seg;
    seg.update();
    const size = seg.length;
    let i = 0;
    while (cur) {
      const h = (seg.colorBase + eases.quartOut(i / size) * 60) % 360;
      const s = 90 + 10 * eases.elasticOut(i / size);
      const l =
        (60 * (eases.elasticOut(i / size) + eases.linear(i / size))) / 2;
      ctx.fillStyle = `hsl(${h}, ${s}%, ${l}%)`;
      ctx.beginPath();
      ctx.arc(
        cur.position.x * PIXEL_RATIO,
        cur.position.y * PIXEL_RATIO,
        eases.linear(1 - i / size) * 50,
        0,
        Math.PI * 2
      );
      ctx.fill();
      cur = cur.child;
      i += 1;
    }
  });
};
const stop = runWithFPS(draw, 30);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    stop();
  });
}
