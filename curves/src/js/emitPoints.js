import { Vector } from 'v-for-vector';
import Point, { distFast } from './point';
import { PIXEL_RATIO } from './constants';

export default function emitPoints([v1, v2], width, height) {
  if (!v1 || !v2) {
    return [];
  }

  if ((v2.x < 0 || v2.x > width) && (v2.y < 0 || v2.y > height)) {
    return;
  }

  const baseAngle = v2.clone().sub(v1).angle;
  const baseLen = Vector.dist(v1, v2);

  const points = [];
  for (let i = 0; i < 15; i += 1) {
    const angle = baseAngle + (Math.PI / 4) * (0.5 - Math.random()); // spread particles a little
    const len = (Math.max(-10, -10 * (baseLen / 5)) * Math.random()) / 2;
    points.push([
      new Point(
        v2.clone(),
        Vector.polar(angle, len),
        Vector.polar(angle, len / 10)
      ),
      Date.now() + 100 * Math.random(),
      angle
    ]);
  }

  return points;
}
