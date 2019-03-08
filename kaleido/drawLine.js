import eases from 'eases';
import lerp from '@sunify/lerp-color';
import smooth from 'chaikin-smooth';
import { PIXEL_RATIO } from './setup';

const colorsArr = shuffle([
  '#247ba0',
  '#70c1b3',
  '#b2dbbf',
  '#f3ffbd',
  '#ff1654'
]);

export const colors = lerp(...colorsArr, ...colorsArr.reverse().slice(1));

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

const stepped = (t, steps) => {
  if (steps === 0) {
    return t;
  }
  const stepSize = 1 / steps;
  const step = Math.round(t / stepSize);
  return step * stepSize;
};

export function drawLine(ctx, line, progress) {
  ctx.strokeStyle = colors(
    stepped(eases.bounceInOut(Math.min(progress, 1)), 12)
  );
  ctx.lineWidth = 5 + 5 * (1 - progress);
  // ctx.lineWidth = 2;
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
