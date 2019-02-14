import Voronoi from 'voronoi';
import lerp from '@sunify/lerp-color';
import eases from 'eases';
import { PIXEL_RATIO, POINTS_TTL } from './constants';

export const colors = {
  primary: '#00FFEE',
  secondary: '#7800FF'
};

const voronoi = new Voronoi();
let diagram = null;

function dst2(p1, p2) {
  return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}

function memlerp(colors, steps = 10) {
  const cache = {};
  const partial = lerp(...colors);
  return t => {
    const step = Math.floor(t / (1 / steps));
    cache[step] = cache[step] || partial(t);
    return cache[step];
  };
}

const flowerColors = memlerp(
  [
    `rgba(#A0F, 0.01)`,
    `rgba(#33a, 0.03)`,
    `rgba(#AAF, 0.03)`,
    `rgba(#0FE, 0.01)`,
    `rgba(#000, 0)`
  ],
  30
);

export default function renderPoints(points, ctx, width, height) {
  if (Math.round(Date.now() / 100) % 100 === 0) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, width * PIXEL_RATIO, height * PIXEL_RATIO);
  }
  voronoi.recycle(diagram);
  const boxPad = 1000;
  const bbox = {
    xl: -boxPad,
    xr: ctx.canvas.width / PIXEL_RATIO + boxPad,
    yt: -boxPad,
    yb: ctx.canvas.height / PIXEL_RATIO + boxPad
  };
  diagram = voronoi.compute(points, bbox);

  points.forEach(p => {
    const age = Date.now() - p.time;
    ctx.fillStyle = `rgba(255, 255, 255, ${eases.quartIn(age / 10000) / 50})`;
    ctx.fillRect(p.pos.x * PIXEL_RATIO, p.pos.y * PIXEL_RATIO, 1, 1);
    ctx.fillStyle = `rgba(255, 255, 255, ${eases.quadIn(1 - age / 10000) /
      15})`;
    ctx.fillRect(p.pos.x * PIXEL_RATIO, p.pos.y * PIXEL_RATIO, 1, 1);
  });

  for (let i = 0, max = diagram.edges.length; i < max; i++) {
    const { va, vb } = diagram.edges[i];
    const d = dst2(va, vb);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = flowerColors(eases.circOut(Math.min(1, d / 6000)));
    ctx.moveTo(va.x * PIXEL_RATIO, va.y * PIXEL_RATIO);
    ctx.lineTo(vb.x * PIXEL_RATIO, vb.y * PIXEL_RATIO);
    ctx.stroke();
  }
}
