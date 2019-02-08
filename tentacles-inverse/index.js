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

const center = new Vector(width / 2, height / 2);
const segs = [];
const count = 1;
const size = 50;
const len = 1.4;
for (let j = 0; j < count; j += 1) {
  const tail = new Segment(center.clone(), len, 0);
  tail.colorBase = 360 * count * j;
  const seg = [tail];
  let cur = tail;
  for (let i = 0; i < size - 1; i += 1) {
    const next = new Segment(
      cur,
      len, // (1 - i / (size - 2)) * 3,
      Math.PI / 5,
      Math.random() / 20
    );
    seg.push(next);
    cur = next;
  }
  segs.push(seg);
}

const last = arr => arr[arr.length - 1];

const mouse = center.clone();
const updateMouse = e => {
  const { pageX, pageY } = (e.touches && e.touches[0]) || e;
  mouse.x = pageX;
  mouse.y = pageY;
};
document.addEventListener('mousemove', updateMouse);
document.addEventListener('touchmove', updateMouse);
const draw = () => {
  canvas.width = canvas.width;
  segs.forEach(seg => {
    const root = seg[0];
    const tail = last(seg);
    root.colorBase += 5;
    tail.follow(mouse);
    root.position = root.base;
    for (let i = 1; i < seg.length; i += 1) {
      seg[i].position = seg[i - 1].end;
    }
  });
  for (let k = 0; k < size; k += 1) {
    segs.forEach((seg, i) => {
      const cur = seg[k];
      if (!cur.position) {
        return;
      }
      const h = (seg[0].colorBase + eases.quartOut(k / size) * 60) % 360;
      const s = 90 + 10 * eases.elasticOut(k / size);
      const l =
        (60 * (eases.elasticOut(k / size) + eases.linear(k / size))) / 2;
      ctx.fillStyle = `hsl(${h}, ${s}%, ${l}%)`;
      ctx.beginPath();
      // ctx.moveTo(cur.position.x * PIXEL_RATIO, cur.position.y * PIXEL_RATIO);
      // ctx.lineTo(cur.end.x * PIXEL_RATIO, cur.end.y * PIXEL_RATIO);
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
