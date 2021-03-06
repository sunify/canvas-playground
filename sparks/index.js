import runWithFps from 'run-with-fps';
import Point, { distFast } from './point';
import { Vector } from 'v-for-vector';
import lerp from '@sunify/lerp-color';
import eases from 'eases';
import tweeen from 'tweeen';

var PIXEL_RATIO = (function () {
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

const canvasValue = (v) => v * PIXEL_RATIO;

const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = canvasValue(width);
canvas.height = canvasValue(height);
canvas.style.width = width + 'px';
canvas.style.height = height + 'px';

const drawLine = (path) => {
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
let sparks = [];

const ttl = 6000;
const sparksTtl = 100;
let globalTime = 0;
const draw = () => {
  globalTime += 0.2;
  canvas.width = canvas.width;
  if (mouseMoving) {
  }

  points = points.filter(([_, t]) => Date.now() - t < ttl);
  points.forEach(([p, t]) => {
    const age = eases.bounceInOut((Date.now() - t) / ttl);
    ctx.fillStyle = `hsla(${45 + 10 * p.rnd}, 60%, ${
      70 + Math.sin(globalTime) * 10 * p.rnd
    }%, ${1 - age})`;
    ctx.strokeStyle = ctx.fillStyle;
    ctx.lineWidth = 1;
    p.update();
    const trace = p.vel
      .clone()
      .mult(-2 / PIXEL_RATIO)
      .add(p.pos);
    const x =
      p.pos.x +
      Math.cos(((Date.now() - t) * p.vel.magnitude) / 1000) * 10 * p.rnd;
    const y =
      p.pos.y +
      Math.sin(((Date.now() - t) * p.vel.magnitude) / 700) * 10 * p.rnd;
    let angle =
      Math.cos((globalTime * p.rnd) / 2) * Math.PI * 2 * (p.rnd < 0.5 ? -1 : 1);
    ctx.beginPath();
    ctx.ellipse(
      x,
      y,
      5 + Math.cos(globalTime * p.rnd) * 2,
      5 + Math.sin(globalTime * p.rnd) * 3,
      angle,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(trace.x, trace.y);
    ctx.lineTo(x, y);
    ctx.stroke();
  });
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
      const angle = baseAngle + (Math.PI / 1.4) * (0.5 - Math.random()); // spread particles a little
      const len = Math.max(-40, -10 * (baseLen / 3)) * Math.random();
      points.push([
        new Point(
          Vector.cartesian(canvasValue(x), canvasValue(y)),
          Vector.polar(angle, len),
          Vector.polar(angle, len * 0.1 * Math.random())
        ),
        Date.now() + ttl * Math.random(),
        angle,
      ]);
    }
  }
};

let mouseMoving = false;
let mouseTrack = [];
let trackClearanceTimeout;

const handleMove = (e) => {
  // if (stopRocket) {
  //   stopRocket();
  // }
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
document.addEventListener('touchforcechange', () => undefined, false);
document.addEventListener('touchmove', handleMove, { passive: false });

const fireworks = (x, y) => {
  const baseAngle = Math.PI / 1.4;
  for (let i = 0; i < 500; i += 1) {
    const angle = baseAngle * Math.random() - Math.PI / 2 - baseAngle / 2;
    const len = 100 + 600 * Math.random();
    const p = new Point(
      Vector.cartesian(x + (0.5 - Math.random()) * 1000, y),
      Vector.polar(angle, len),
      Vector.cartesian(0.5 - Math.random(), 0.9 + Math.random()),
      0.75
    );
    p.rnd = Math.random();
    points.push([p, Date.now() + Math.random() * 300, angle]);
  }
};

const handleClick = (e) => {
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
    fireworks(canvasValue(width / 2), canvasValue(height));
  }
};

document.addEventListener('mouseup', handleClick);
document.addEventListener('touchend', handleClick);

const stop = runWithFps(draw, 60);

// const pos = t => {
//   const x = width / 2 + Math.sin(t * 3) * 2;
//   const y = height - t * 4;
//   return [x, y];
// };
// const stopRocket = tweeen(
//   0,
//   100,
//   t => {
//     const [x, y] = pos(t);
//     mouseTrack.push([x, y]);
//     mouseTrack = mouseTrack.slice(-2);
//     emitParticles(x, y);

//     if (t === 100) {
//       fireworks(x * PIXEL_RATIO, y * PIXEL_RATIO);
//     }
//   },
//   {
//     duration: 2000,
//     easing: eases.quadInOut
//   }
// );

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      stop();
    }
  });
}

setTimeout(() => {
  // document.querySelector('.tyshya').style.opacity = 1;
  fireworks(canvasValue(width / 2), canvasValue(height + 100));
  setTimeout(() => {
    // stop();
  }, 6000);
}, 1000);
