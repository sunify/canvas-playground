import runWithFps from 'run-with-fps';
import SimplexNoise from 'simplex-noise';
import Point, { distFast } from './point';
import Vector from 'victor';
import lerp from '@sunify/lerp-color';
import eases from 'eases';
import { emit } from 'cluster';

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
  if (mouseMoving) {
  }
  // if (mouseTrack.length > 1) {
  //   ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
  //   drawLine(mouseTrack);
  // }

  const ttl = 1300;
  points = points.filter(([_, t]) => Date.now() - t < ttl);
  ctx.shadowBlur = 15;
  points.forEach(([p, t]) => {
    const age = (Date.now() - t) / ttl;
    ctx.strokeStyle = lerp(
      `rgba(255, 255, 120, 0.7)`,
      `rgba(255, 0, 0, 0.3)`,
      eases.cubicIn(age)
    );
    ctx.shadowColor = lerp(
      `rgba(255, 255, 120, 0.4)`,
      `rgba(255, 255, 120, 0.2)`,
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

  if (!mouseMoving) {
    const a = Date.now() / 800;
    const cx = width / 2 + Math.cos(a) * 200;
    const cy = height / 2 + Math.sin(a) * 300 * (Math.cos(a) / 2);
    mouseTrack.push([cx, cy]);
    mouseTrack = mouseTrack.slice(-2);
    emitParticles(cx, cy);
  }
};

const emitParticles = (x, y) => {
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
          new Vector(x, y),
          new Vector(len * Math.cos(angle), len * Math.sin(angle)),
          new Vector(-0.4 * Math.cos(angle), -0.4 * Math.sin(angle))
        ),
        Date.now(),
        angle
      ]);
    }
  }
};

let mouseMoving = false;
let mouseTrack = [];
let trackClearanceTimeout;
document.addEventListener('mousemove', e => {
  mouseTrack.push([e.pageX, e.pageY]);
  mouseTrack = mouseTrack.slice(-2);
  mouseMoving = true;
  if (trackClearanceTimeout) {
    clearTimeout(trackClearanceTimeout);
  }

  emitParticles(e.pageX, e.pageY);

  trackClearanceTimeout = setTimeout(() => {
    mouseTrack = [];
    mouseMoving = false;
  }, 400);
});

const fireworks = (x, y) => {
  for (let i = 0; i < 40; i += 1) {
    const angle = Math.PI * 2 * Math.random();
    const len = 10 + 80 * Math.random();
    points.push([
      new Point(
        new Vector(x, y),
        new Vector(len * Math.cos(angle), len * Math.sin(angle)),
        new Vector(0.7 * Math.cos(angle), 0.5)
      ),
      Date.now() + Math.random() * 1000,
      angle
    ]);
  }
};

document.addEventListener('mouseup', e => {
  fireworks(e.pageX, e.pageY);
  // for (let i = 0; i < 10; i++) {
  //   setTimeout(() => {
  //     fireworks(width * Math.random(), height * Math.random());
  //   }, 1000 * Math.random());
  // }
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
