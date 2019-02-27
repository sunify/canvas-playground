import eases from 'eases';
import lerp from '@sunify/lerp-color';
import smooth from 'chaikin-smooth';
import { PIXEL_RATIO } from './setup';

const colorsArr = shuffle([
  '#d71259',
  '#8e2d56',
  '#208381',
  '#eca639',
  '#73d2de'
]);

export const colors = lerp(...colorsArr);

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

export function drawLine(ctx, line, progress) {
  const h = 20 * eases.expoIn(progress) + 150;
  const s = 100 * eases.expoOut(progress);
  const l = 40 * progress;
  const a = eases.backOut(progress) - 0.4;
  // ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${a})`;
  ctx.strokeStyle = colors(eases.bounceInOut(Math.min(progress, 1)));
  ctx.lineWidth = 10 + 5 * (1 - progress);
  const path = smooth(
    smooth(line.nodes.map(n => [n.position.x, n.position.y]))
  );
  ctx.beginPath();
  for (let i = 0; i < path.length; i += 1) {
    const [x, y] = path[i];
    if (i === 0) {
      ctx.moveTo(x * PIXEL_RATIO, y * PIXEL_RATIO);
    } else {
      ctx.lineTo(x * PIXEL_RATIO, y * PIXEL_RATIO);
    }
  }
  ctx.stroke();
}
