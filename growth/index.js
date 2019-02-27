import runWithFps from 'run-with-fps';
import { Vector } from 'v-for-vector';
import { canvas, ctx, PIXEL_RATIO, width, height } from './setup';
import lerpColor from '@sunify/lerp-color';
import { DiffLine, Node } from './diffLine';
import { drawLine, colors } from './drawLine';

const line = new DiffLine(0.1, 1, 300, 1.05, 20);
const center = Vector.cartesian(width / 2, height / 2);
const START_LENGTH = 10;
const MAX_LEN = 150;

// for (let i = 0; i <= START_LENGTH; i += 1) {
//   const angle = ((Math.PI * 2) / START_LENGTH) * i;
//   const r = 100;
//   const x = Math.cos(angle) * r;
//   const y = Math.sin(angle) * r;
//   line.addNode(
//     new Node(Vector.cartesian(x, y).add(center), line.maxForce, line.maxSpeed)
//   );
// }
// for (let i = 0; i <= START_LENGTH; i += 1) {
//   const angle = ((Math.PI * 2) / START_LENGTH) * i;
//   const r = 100;
//   const x = (16 * Math.sin(angle) ** 3 + 25) * 15 - 350;

//   const y =
//     (13 * Math.cos(angle) -
//       5 * Math.cos(angle * 2) -
//       2 * Math.cos(3 * angle) -
//       Math.cos(4 * angle) +
//       20) *
//       -15 +
//     300;
//   line.addNode(
//     new Node(Vector.cartesian(x, y).add(center), line.maxForce, line.maxSpeed)
//   );
// }

for (let i = 0; i <= START_LENGTH; i += 1) {
  const padding = 600;
  const x = padding + ((width - padding * 2) / START_LENGTH) * i;
  const y = Math.sin((i * Math.PI) / 4) * 100 * Math.random();
  line.addNode(
    new Node(Vector.cartesian(x, y + center.y), line.maxForce, line.maxSpeed)
  );
}

// line.addNode(
//   new Node(Vector.cartesian(300, 500), line.maxForce, line.maxSpeed)
// );
// line.addNode(
//   new Node(
//     Vector.cartesian(width - 300, height - 500),
//     line.maxForce,
//     line.maxSpeed
//   )
// );

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
const draw = () => {
  // canvas.width = canvas.width;
  line.update();

  if (line.nodes.length > MAX_LEN) {
    stop();

    ctx.shadowColor = lerpColor(colors(1), '#FFF', 0.5);
    ctx.shadowBlur = 400;
    drawLine(ctx, line, 1);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < canvas.width; x += 1) {
      for (let y = 0; y < canvas.height; y += 1) {
        const i = (y * canvas.width + x) * 4;
        imageData.data[i + 0] += (0.5 - Math.random()) * 30;
        imageData.data[i + 1] += (0.5 - Math.random()) * 30;
        imageData.data[i + 2] += (0.5 - Math.random()) * 30;
      }
    }

    ctx.putImageData(imageData, 0, 0);
  } else {
    drawLine(ctx, line, line.nodes.length / MAX_LEN);
  }
};

const stop = runWithFps(draw, 60);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      canvas.width = canvas.width;
      stop();
    }
  });
}
