import runWithFps from 'run-with-fps';
import { canvas, ctx, PIXEL_RATIO, width, height } from './setup';
import lerp from 'lerp';
import smooth from 'chaikin-smooth';
import { params, line } from './params';

let drag = false;
document.addEventListener('click', e => {
  if (e.pageX < 110 && e.pageY < 60) {
    line.push([e.pageX, e.pageY - 25]);
  }
});
document.addEventListener('mousemove', e => {
  if (drag) {
    line.push([e.pageX, e.pageY - 25]);
  }
});
document.addEventListener('mousedown', e => {
  if (e.pageX < 110 && e.pageY < 60) {
    drag = true;
  }
});
document.addEventListener('mouseup', e => {
  drag = false;
});
const translate = (x, y) => p => [x(p[0]), y(p[1])];
let t = 0;
const draw = () => {
  t += 0.1;
  canvas.width = canvas.width;
  ctx.fillStyle = '#ccc';
  ctx.fillRect(20, 20, 200, 100);

  ctx.lineWidth = 2;
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  const translateLine = translate(
    a => a * PIXEL_RATIO,
    a => a * PIXEL_RATIO + 50
  );
  const smoothLine = [];
  smooth([...line], smoothLine);
  if (smoothLine[0]) {
    ctx.moveTo(...translateLine(smoothLine[0]));
  }
  smoothLine.slice(1).forEach(p => ctx.lineTo(...translateLine(p)));
  ctx.stroke();

  const reps = params.reps;
  const r = Math.min(height - 300, width - 300, (reps * 100) / Math.PI);

  ctx.strokeStyle = 'black';
  ctx.beginPath();
  for (let i = 0; i <= reps; i += 1) {
    const startAngle = (i / reps) * Math.PI * 2;
    const endAngle = ((i + 1) / reps) * Math.PI * 2;
    line.forEach((p, j) => {
      const angle = lerp(startAngle, endAngle, p[0] / 100);
      const x = Math.cos(angle) * (r + p[1] * params.density) + width;
      const y = Math.sin(angle) * (r + p[1] * params.density) + height;
      if (i === 0 && j === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
  }
  ctx.stroke();
};

const stop = runWithFps(draw, 10);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      stop();
    }
  });
}
