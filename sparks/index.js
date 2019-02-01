import runWithFps from 'run-with-fps';
import Point, { distFast } from './point';
import Vector from 'victor';
import lerp from '@sunify/lerp-color';
import eases from 'eases';
import memoize from 'lodash/memoize';

var PIXEL_RATIO = (function() {
  var ctx = document.createElement('canvas').getContext('2d'),
    dpr = window.devicePixelRatio || 1,
    bsr =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;

  return dpr / bsr;
})();

const { innerWidth: width, innerHeight: height } = window;

const canvasValue = v => v * PIXEL_RATIO;

const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = canvasValue(width);
canvas.height = canvasValue(height);
canvas.style.width = width + 'px';
canvas.style.height = height + 'px';
console.log(canvas);

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

// https://en.wikipedia.org/wiki/Lemniscate_of_Gerono
const followInfinity = () => {
  time += 0.015;
  const a = time;
  const cx = width / 2 + Math.cos(a) * 300;
  const cy = height / 2 + Math.sin(a) * 200 * (Math.cos(a) * 1.3);
  mouseTrack.push([cx, cy]);
};

// https://en.wikipedia.org/wiki/Spiral
const followSpiral = () => {
  if (time === 0) {
    time = 1;
  }
  time += 0.03;
  const a = 2;
  const b = time ** 0.61;

  const angle = Math.log(time) ** 2.35;
  const x = width / 2 + (a + b * angle) * Math.cos(angle);
  const y = height / 2 + (a + b * angle) * Math.sin(angle);
  mouseTrack.push([x, y]);
};

// https://en.wikipedia.org/wiki/Lorenz_system#Lorenz_attractor
const lorenz = {
  x: 5,
  y: 5,
  z: 4
};
const followLorenz = () => {
  const a = 6,
    b = 22,
    c = 3;
  const dt = 0.003;
  const { x, y, z } = lorenz;
  const x1 = lorenz.x + a * (-x + y) * dt;
  const y1 = lorenz.y + (b * x - y - z * x) * dt;
  const z1 = lorenz.z + (-c * z + x * y) * dt;
  mouseTrack.push([width / 2 + x1 * 15, height / 2 + y1 * 15]);
  lorenz.x = x1;
  lorenz.y = y1;
  lorenz.z = z1;
};

// https://en.wikipedia.org/wiki/Rose_(mathematics)
const followRose = () => {
  time += 0.01;
  const a = time;
  const k = 4 / 5;
  const r = 1.5;
  const cx = width / 2 + Math.cos((a / k) * r) * 200 * Math.cos(a * r);
  const cy = height / 2 + Math.sin((a / k) * r) * 200 * Math.cos(a * r);
  mouseTrack.push([cx, cy]);
};

const followFunctions = [
  followInfinity,
  followSpiral,
  followLorenz,
  followRose
];

let time = 0;
const draw = () => {
  // canvas.width = canvas.width;
  if (mouseMoving) {
  }
  // if (mouseTrack.length > 1) {
  //   ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
  //   drawLine(mouseTrack);
  // }

  const ttl = 1300;
  points = points.filter(([_, t]) => Date.now() - t < ttl);
  points.forEach(([p, t]) => {
    const age = (Date.now() - t) / ttl;
    ctx.strokeStyle = lerp(
      `rgba(255, 255, 120, 0.7)`,
      `rgba(255, 25, 0, 0.3)`,
      eases.quartInOut(age)
    );
    ctx.lineWidth = PIXEL_RATIO;
    p.update();
    const dx =
      ((Math.cos(p.vel.angle()) * p.vel.length() * 2) / PIXEL_RATIO) * 1.3;
    const dy =
      ((Math.sin(p.vel.angle()) * p.vel.length() * 2) / PIXEL_RATIO) * 1.3;
    ctx.beginPath();
    ctx.moveTo(p.pos.x + dx, p.pos.y + dy);
    ctx.lineTo(p.pos.x, p.pos.y);
    ctx.stroke();
  });

  if (!mouseMoving) {
    followFunctions[3]();
  }

  mouseTrack = mouseTrack.slice(-2);
  if (mouseTrack.length > 1) {
    emitParticles(mouseTrack[1][0], mouseTrack[1][1]);
  }
};

const emitParticles = (x, y) => {
  if ((x < 0 || x > width) && (y < 0 || y > height)) {
    return;
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

    for (let i = 0; i < 15; i += 1) {
      const angle = baseAngle + (Math.PI / 3) * (0.5 - Math.random()); // spread particles a little
      const len = Math.max(-20, -10 * (baseLen / 3)) * Math.random();
      points.push([
        new Point(
          new Vector(canvasValue(x), canvasValue(y)),
          new Vector(len * Math.cos(angle), len * Math.sin(angle)),
          new Vector(-0.1 * Math.cos(angle), -0.1 * Math.sin(angle))
        ),
        Date.now() + 100 * Math.random(),
        angle
      ]);
    }
  }
};

let mouseMoving = false;
let mouseTrack = [];
let trackClearanceTimeout;

const handleMove = e => {
  if (e.touches) {
    e.preventDefault();
  }
  if (mouseMoving === false) {
    mouseTrack = [];
  }
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
};
// document.addEventListener('mousemove', handleMove);
// document.addEventListener('touchforcechange', () => undefined, false);
// document.addEventListener('touchmove', handleMove, { passive: false });

const fireworks = (x, y) => {
  for (let i = 0; i < 40; i += 1) {
    const angle = Math.PI * 2 * Math.random();
    const len = 30 + 70 * Math.random() * PIXEL_RATIO;
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

const handleClick = e => {
  if (e.altKey) {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        fireworks(
          canvasValue(width) * Math.random(),
          canvasValue(height) * Math.random()
        );
      }, 2000 * Math.random());
    }
  } else {
    fireworks(canvasValue(e.pageX), canvasValue(e.pageY));
  }
};

document.addEventListener('mouseup', handleClick);
document.addEventListener('touchend', handleClick);

const stop = runWithFps(draw, 20);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      stop();
    }
  });
}
