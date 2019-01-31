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
// ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

// canvas.width = width;
// canvas.height = height;

// const lerp = memoize(lerpColor);

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
  // ctx.shadowBlur = 10;
  points.forEach(([p, t]) => {
    const age = (Date.now() - t) / ttl;
    ctx.strokeStyle = lerp(
      `rgba(255, 255, 120, 0.7)`,
      `rgba(255, 25, 0, 0.3)`,
      eases.quartInOut(age)
    );
    // ctx.shadowColor = lerp(
    //   `rgba(255, 255, 120, 0.4)`,
    //   `rgba(255, 255, 120, 0.2)`,
    //   eases.cubicIn(age)
    // );
    ctx.lineWidth = PIXEL_RATIO;
    p.update();
    const dx = (Math.cos(p.vel.angle()) * p.vel.length() * 2) / PIXEL_RATIO;
    const dy = (Math.sin(p.vel.angle()) * p.vel.length() * 2) / PIXEL_RATIO;
    ctx.beginPath();
    ctx.moveTo(p.pos.x + dx, p.pos.y + dy);
    ctx.lineTo(p.pos.x, p.pos.y);
    ctx.stroke();
  });

  if (!mouseMoving) {
    const a = Date.now() / 3000;
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

    for (let i = 0; i < 15; i += 1) {
      const angle = baseAngle + (Math.PI / 1.7) * (0.5 - Math.random()); // spread particles a little
      const len = Math.max(-40, -10 * (baseLen / 3)) * Math.random();
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
document.addEventListener('mousemove', handleMove);
document.addEventListener('touchforcechange', () => undefined, false);
document.addEventListener('touchmove', handleMove, { passive: false });

const fireworks = (x, y) => {
  for (let i = 0; i < 40; i += 1) {
    const angle = Math.PI * 2 * Math.random();
    const len = 30 + 120 * Math.random() * PIXEL_RATIO;
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
