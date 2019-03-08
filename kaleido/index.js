import runWithFps from 'run-with-fps';
import { Vector } from 'v-for-vector';
import { canvas, ctx, width, height, downloadCanvas } from './setup';
import { DiffLine, Node } from './diffLine';
import { drawLine } from './drawLine';
import { noisifyCanvas } from '../circnoise/utils';
import * as dat from 'dat.gui';

const params = {
  baseAngle: 0,
  baseAngleSpeed: 0,
  radius: 800,
  sections: 20,
  save() {
    downloadCanvas(`kaleido-${Date.now()}`);
  },
  redraw() {
    // stop();
    start();
    // stop = runWithFps(draw, 30);
  }
};

const gui = new dat.GUI();
gui.add(params, 'save');
gui.add(params, 'redraw');
gui.add(params, 'radius', 200, 1000, 50);
gui.add(params, 'sections', 3, 30, 2);
const baseAngle = gui.add(params, 'baseAngle', 0, 2, 0.001);
gui.add(params, 'baseAngleSpeed', 0, 0.3, 0.001);

let line = null;
const center = Vector.cartesian(width / 2, height / 2);
const START_LENGTH = 5;
const MAX_LEN = 100;

const noiseCanvas = document.createElement('canvas');
noiseCanvas.width = 200;
noiseCanvas.height = 200;
const noiseCtx = noiseCanvas.getContext('2d');

const lineCanvas = document.querySelector('.preview');
// const lineCanvas = document.createElement('canvas');
lineCanvas.width = canvas.width;
lineCanvas.height = canvas.height;
const lineCtx = lineCanvas.getContext('2d');

const rotateCanvas = document.createElement('canvas');
rotateCanvas.width = canvas.width;
rotateCanvas.height = canvas.height;
const rotateCtx = rotateCanvas.getContext('2d');

const sectionCanvas = document.createElement('canvas');
sectionCanvas.width = canvas.width;
sectionCanvas.height = canvas.height;
const sectionCtx = sectionCanvas.getContext('2d');

const start = () => {
  line = new DiffLine(0.1, 2, 100, 1.05, 50);
  // for (let i = 0; i <= START_LENGTH; i += 1) {
  //   const angle = ((Math.PI * 2) / START_LENGTH) * i;
  //   const r = 50;
  //   const x = Math.cos(angle) * r;
  //   const y = Math.sin(angle) * r;
  //   line.addNode(
  //     new Node(Vector.cartesian(x, y).add(center), line.maxForce, line.maxSpeed)
  //   );
  // }
  for (let i = 0; i <= START_LENGTH; i += 1) {
    const padding = 480;
    const x = padding + ((width - padding * 2) / START_LENGTH) * i;
    const y = Math.sin((i * Math.PI) / 10) * 100 * Math.random();
    line.addNode(
      new Node(Vector.cartesian(x, y + center.y), line.maxForce, line.maxSpeed)
    );
  }

  lineCanvas.width = lineCanvas.width;
};

start();

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
const draw = () => {
  if (params.baseAngleSpeed) {
    baseAngle.setValue((baseAngle.getValue() + params.baseAngleSpeed) % 2);
  }

  const done = line.nodes.length > MAX_LEN;
  ctx.globalCompositeOperation = 'source-over';

  if (!done) {
    // lineCanvas.width = lineCanvas.width;
    line.update();
    drawLine(lineCtx, line, line.nodes.length / MAX_LEN);
  }

  canvas.width = canvas.width;
  rotateCanvas.width = rotateCanvas.width;
  rotateCtx.save();
  rotateCtx.translate(canvas.width / 2, canvas.height / 2);
  rotateCtx.rotate(baseAngle.getValue() * Math.PI);
  rotateCtx.translate(-canvas.width / 2, -canvas.height / 2);
  rotateCtx.drawImage(lineCanvas, 0, 0);

  const sectionAngle = (Math.PI * 2) / params.sections;
  sectionCanvas.width = sectionCanvas.width;
  sectionCtx.fillStyle = '#FFF';
  sectionCtx.beginPath();
  const r = params.radius;
  sectionCtx.moveTo(
    r * Math.cos(-sectionAngle / 2) + canvas.width / 2,
    r * Math.sin(-sectionAngle / 2) + canvas.height / 2
  );
  sectionCtx.lineTo(canvas.width / 2, canvas.height / 2);
  sectionCtx.lineTo(
    r * Math.cos(sectionAngle / 2) + canvas.width / 2,
    r * Math.sin(sectionAngle / 2) + canvas.height / 2
  );
  sectionCtx.globalCompositeOperation = 'source-over';
  sectionCtx.fill();
  sectionCtx.globalCompositeOperation = 'source-in';
  sectionCtx.drawImage(rotateCanvas, 0, 0);
  for (let i = 0; i < params.sections; i += 1) {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(i * sectionAngle);
    if (i % 2 && params.sections % 2 === 0) {
      if (params.sections % 4 !== 0) {
        ctx.rotate(i * sectionAngle);
      }
      ctx.scale(-1, 1);
    }
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    ctx.drawImage(
      sectionCanvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
    ctx.restore();
  }

  if (done) {
    // stop();
    // noiseCanvas.width = 800;
    // noiseCanvas.height = 800;
    // noiseCtx.fillStyle = '#000';
    // noiseCtx.fillRect(0, 0, noiseCanvas.width, noiseCanvas.height);
    // noisifyCanvas(noiseCtx, 80);
    // for (let i = 0; i < Math.ceil(canvas.width / noiseCanvas.width); i += 1) {
    //   for (
    //     let j = 0;
    //     j < Math.ceil(canvas.height / noiseCanvas.height);
    //     j += 1
    //   ) {
    //     ctx.drawImage(
    //       noiseCanvas,
    //       i * noiseCanvas.width,
    //       j * noiseCanvas.height
    //     );
    //   }
    // }
  }
};

let stop = runWithFps(draw, 20);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      canvas.width = canvas.width;
      const dgRoot = document.querySelector('body > .dg');
      if (dgRoot) {
        dgRoot.removeChild(dgRoot.querySelector('.dg.main'));
      }
      stop();
    }
  });
}
