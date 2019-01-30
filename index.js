import runWithFps from 'run-with-fps';
import SimplexNoise from 'simplex-noise';
import Point, { distFast } from './point';
import Vector from 'victor';
import lerp from '@sunify/lerp-color';
import eases from 'eases';

// const lerp = memoize(lerpColor);

const { innerWidth: width, innerHeight: height } = window;

const noise = new SimplexNoise();
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const drawLine = path => {
  ctx.beginPath();
  path.forEach(([x, y], i) => {
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();
};

let points = [];

const draw = () => {
  canvas.width = canvas.width;
  if (mouseTrack.length > 1) {
    // ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
    // drawLine(mouseTrack);
  }

  const ttl = 1300;
  points = points.filter(([_, t]) => Date.now() - t < ttl);
  ctx.shadowBlur = 10;
  ctx.shadowColor = '#FF0';
  points.forEach(([p, t, angle]) => {
    const age = (Date.now() - t) / ttl;
    ctx.strokeStyle = lerp(
      `rgba(255, 255, 120, 0.8)`,
      `rgba(255, 100, 0, ${1 - age})`,
      eases.cubicIn(age)
    );
    ctx.shadowColor = lerp(
      `rgba(255, 255, 120, 1)`,
      `rgba(255, 100, 0, 0)`,
      eases.cubicIn(age)
    );
    p.update();
    const dx = Math.cos(p.vel.angle()) * p.vel.length() * 2;
    const dy = Math.sin(p.vel.angle()) * p.vel.length() * 2;
    ctx.beginPath();
    ctx.moveTo(p.pos.x - dx, p.pos.y - dy);
    ctx.lineTo(p.pos.x, p.pos.y);
    ctx.stroke();
  });
};

let mouseTrack = [];
let trackClearanceTimeout;
document.addEventListener('mousemove', e => {
  mouseTrack.push([e.pageX, e.pageY]);
  mouseTrack = mouseTrack.slice(-2);
  if (trackClearanceTimeout) {
    clearTimeout(trackClearanceTimeout);
  }

  if (mouseTrack.length > 1) {
    const baseAngle = Math.atan2(
      mouseTrack[1][1] - mouseTrack[0][1],
      mouseTrack[1][0] - mouseTrack[0][0]
    );
    const baseLen = distFast(
      mouseTrack[0][0],
      mouseTrack[0][1],
      mouseTrack[1][0],
      mouseTrack[1][1]
    );

    for (let i = 0; i < 10; i += 1) {
      const angle = baseAngle + (Math.PI / 2) * (0.5 - Math.random()); // spread particles a little
      const len = Math.max(-20, -10 * (baseLen / 7)) * Math.random();
      points.push([
        new Point(
          new Vector(e.pageX, e.pageY),
          new Vector(len * Math.cos(angle), len * Math.sin(angle))
        ),
        Date.now(),
        angle
      ]);
    }
  }

  trackClearanceTimeout = setTimeout(() => {
    mouseTrack = [];
  }, 100);
});

// let strength = 0;
// let interval;
// document.addEventListener('mousedown', e => {
//   strength = 10;
//   interval = setInterval(() => {
//     strength += 10;
//   }, 100);
// });
document.addEventListener('mouseup', e => {
  // clearInterval(interval);
  for (let i = 0; i < 100; i += 1) {
    const angle = Math.PI * 2 * Math.random(); // spread particles a little
    const len = 10 + 40 * Math.random();
    points.push([
      new Point(
        new Vector(e.pageX, e.pageY),
        new Vector(len * Math.cos(angle), len * Math.sin(angle)),
        new Vector(0, 1)
      ),
      Date.now() + Math.random() * 1000,
      angle
    ]);
  }
});

const stop = runWithFps(draw, 20);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      stop();
    }
  });
}
