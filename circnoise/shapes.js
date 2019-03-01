import { width, height, PIXEL_RATIO } from './setup';
import { params } from './params';

function heartCoords(angle, n, progress, freq) {
  const scale =
    Math.min(width, height) / 500 + n * params.noiseAmplitude + freq * 1;
  const x =
    (16 * scale * (1 - progress) * Math.sin(angle) ** 3 + 25) * 15 -
    370 +
    (width * PIXEL_RATIO) / 2;

  const y =
    (13 * scale * (1 - progress) * Math.cos(angle) -
      5 * scale * Math.cos(angle * 2) -
      2 * scale * Math.cos(3 * angle) -
      Math.cos(4 * angle) +
      20) *
      -15 +
    300 +
    (height * PIXEL_RATIO) / 2;

  return [x, y];
}

function circleCoords(angle, n, progress, freq) {
  const r =
    (Math.min(height, width) * (1 - progress) + n * 20) / 2 + freq * 200;
  const x = r * Math.cos(angle) + (width * PIXEL_RATIO) / 2;
  const y = r * Math.sin(angle) + (height * PIXEL_RATIO) / 2;

  return [x, y];
}

export default {
  circle: circleCoords,
  heart: heartCoords
};
