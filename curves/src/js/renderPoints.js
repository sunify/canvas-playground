import lerp from '@sunify/lerp-color';
import eases from 'eases';
import { PIXEL_RATIO, POINTS_TTL } from './constants';

export const colors = {
  primary: '#00FFCC',
  secondary: '#7800FF'
};

export default function renderPoints(points, ctx) {
  points.forEach(([p, t]) => {
    const age = (Date.now() - t) / POINTS_TTL;
    ctx.strokeStyle = lerp(
      `rgba(${colors.primary}, 0.7)`,
      `rgba(${colors.secondary}, 0.3)`,
      eases.sineInOut(age)
    );
    ctx.lineWidth = PIXEL_RATIO;
    p.update();
    const offset = p.vel
      .clone()
      .mult(2.6)
      .div(PIXEL_RATIO)
      .add(p.pos);
    ctx.beginPath();
    ctx.moveTo(offset.x * PIXEL_RATIO, offset.y * PIXEL_RATIO);
    ctx.lineTo(p.pos.x * PIXEL_RATIO, p.pos.y * PIXEL_RATIO);
    ctx.stroke();
  });
}
