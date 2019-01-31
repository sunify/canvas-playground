import runWithFps from 'run-with-fps';
import SimplexNoise from 'simplex-noise';
import Point from './point';
import Vector from 'victor';
import lerp from '@sunify/lerp-color';

// const lerp = memoize(lerpColor);

const { innerWidth: width, innerHeight: height } = window;

const noise = new SimplexNoise();
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const field = [];
const gridSize = 20;

const points = [];
for (let i = 0; i < 100; i += 1) {
  points.push(
    new Point(
      new Vector(width * Math.random(), height * Math.random()),
      new Vector((0.5 - Math.random()) * 20, (0.5 - Math.random()) * 20),
      new Vector((0.5 - Math.random()) * 20, (0.5 - Math.random()) * 20)
    )
  );
}

const updateField = () => {
  for (let i = 0; i < width / gridSize; i += 1) {
    field[i] = [];
    for (let j = 0; j < width / gridSize; j += 1) {
      field[i][j] = noise.noise3D(i / 10, j / 10, Date.now() / 4000);
    }
  }
};

const drawPoints = () => {
  points.forEach(p => {
    p.applyToField(field, gridSize);
    p.update(width, height);
    const i = Math.round(p.pos.x / gridSize);
    const j = Math.round(p.pos.y / gridSize);
    if (field[i] && field[i][j]) {
      const n = field[i][j];
      ctx.fillStyle = lerp(
        'rgba(0, 230, 230, 0.4)',
        'rgba(255, 255, 204, 0.4)',
        Math.max(0, Math.min(n * 1.5, 1))
      );
      // ctx.fillRect(i * gridSize, j * gridSize, gridSize, gridSize);
      ctx.beginPath();
      ctx.arc(p.pos.x, p.pos.y, Math.abs((gridSize * n) / 1.5), 0, 2 * Math.PI);
      ctx.fill();
      // const n = field[i][j] / 1000;
      // const r = Math.abs(n * 20000);
      // const dx = r * Math.cos(n * Math.PI);
      // const dy = r * Math.sin(n * Math.PI);
      // ctx.strokeStyle = lerp(
      //   'rgba(255, 255, 204, 0.4)',
      //   'rgba(255, 255, 0, 0.4)',
      //   Math.max(0, Math.min(Math.log(p.vel.lengthSq() * 2), 1))
      // );
      // ctx.beginPath();
      // ctx.moveTo(p.pos.x - dx, p.pos.y - dy);
      // ctx.lineTo(p.pos.x + dx, p.pos.y + dy);
      // ctx.stroke();
    }
  });
};

const drawDots = () => {
  for (let i = 0; i < width / gridSize; i += 1) {
    for (let j = 0; j < height / gridSize; j += 1) {
      if (field[i] && field[i][j] !== undefined) {
        const n = field[i][j];
        ctx.fillStyle = lerp(
          'rgba(0, 230, 230, 0.4)',
          'rgba(255, 255, 204, 0.4)',
          Math.max(0, Math.min(n * 1.5, 1))
        );
        // ctx.fillRect(i * gridSize, j * gridSize, gridSize, gridSize);
        ctx.beginPath();
        ctx.arc(
          i * gridSize,
          j * gridSize,
          Math.abs((gridSize * n) / 3),
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    }
  }
};
updateField();
for (let i = 0; i < 1000; i += 1) {
  // drawPoints();
}
const draw = () => {
  updateField();
  canvas.width = canvas.width;
  drawDots();
  // drawPoints();
};

const stop = runWithFps(draw, 20);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      stop();
    }
  });
}
