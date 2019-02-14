import runWithFps from 'run-with-fps';
import { Vector } from 'v-for-vector';
import lerp from '@sunify/lerp-color';

import Point from './point';
import { PIXEL_RATIO, POINTS_TTL } from './constants';
import renderPoints, { colors } from './renderPoints';

const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = width * PIXEL_RATIO;
canvas.height = height * PIXEL_RATIO;
canvas.style.width = width + 'px';
canvas.style.height = height + 'px';

document.documentElement.style.setProperty('--primary', colors.primary);
document.documentElement.style.setProperty(
  '--primary-fade',
  `${colors.primary}AA`
);
document.documentElement.style.setProperty(
  '--secondary',
  lerp(colors.secondary, '#FFF', 0.6)
);

const content = document.querySelector('.content');
const overlay = document.querySelector('.projects-overlay');
document.addEventListener('click', e => {
  if (e.target.classList && e.target.classList.contains('projects-toggle')) {
    document.body.classList.toggle('st-show-projects');

    if (document.body.classList.contains('st-show-projects')) {
      overlay.setAttribute('tabindex', '0');
      content.setAttribute('tabindex', '-1');
      overlay.focus();
    } else {
      overlay.setAttribute('tabindex', '-1');
      content.setAttribute('tabindex', '0');
      content.focus();
    }
  }
});

document.addEventListener('keyup', e => {
  if (e.keyCode === 27) {
    document.body.classList.remove('st-show-projects');
  }
});

const points = [];
const pool = [];
const center = Vector.cartesian(width / 2, height / 2);
let i = 0;
const draw = () => {
  // canvas.width = canvas.width;
  points.forEach((p, i, source) => {
    if (!(Date.now() - p.time < POINTS_TTL)) {
      pool.push(source.splice(i, 1)[0]);
    }
  });

  points.forEach(p => {
    p.update();
  });

  renderPoints(points, ctx, width, height);
};

const stop = [
  runWithFps(() => {
    const angle = Math.PI * 2 * Math.random();
    points.push(
      new Point(
        Vector.polar(angle, 10).add(center),
        Vector.polar(angle, 0 * Math.random()),
        Vector.polar(angle, 0.1)
      )
    );
  }, 20)
];

stop.push(runWithFps(draw, 30));

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      stop.forEach(s => s());
    }
  });
}
