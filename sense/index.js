import runWithFps from 'run-with-fps';
import { Vector } from 'v-for-vector';
import { canvas, ctx, PIXEL_RATIO } from './setup';
import { params } from './params';
import tween from 'tweeen';
import eases from 'eases';
import SimplexNoise from 'simplex-noise';
const noise = new SimplexNoise();

/**
 * @property {Vector} size
 * @property {Node[]} children
 * @property {Node | null} parent
 */
class Node {
  /**
   * @param {Vector} pos
   * @param {Vector} size
   */
  constructor(pos, size) {
    this.pos = pos;
    this.size = size;
    this.selfAngle = size.angle;
    this.children = [];
    this.parent = null;
  }

  get end() {
    return this.pos.clone().add(this.size);
  }

  wiggle() {
    const n = noise.noise3D(this.pos.x / 1000, this.pos.y / 1000, t);
    this.size.angle = this.selfAngle + n * (Math.PI / 30);
    const end = this.end;
    this.children.forEach(c => {
      c.pos = end;
      c.wiggle();
    });
  }

  /**
   * @param {number} n
   */
  makeChildren(n, depth = 0) {
    const count = n;
    for (let i = 0; i < count; i += 1) {
      const angle = ((Math.PI * 1.2) / (depth + 1)) * (0.5 - i / (count - 1));
      const r = (0.5 - Math.random()) * (Math.PI / 3);
      const child = new Node(
        this.end,
        Vector.polar(
          angle + r + this.size.angle,
          Math.min(
            this.size.magnitude,
            this.size.magnitude / 1.4 +
              (Math.random() * this.size.magnitude) / 3
          )
        )
      );
      child.parent = this;
      this.children.push(child);
      if (depth > 0 && n > 0) {
        child.makeChildren(n, depth - 1);
      }
    }
  }
}

const root = Vector.cartesian(canvas.width / 2, canvas.height);
const tree = new Node(root, Vector.polar(-Math.PI / 2, 300), []);

const MAX_DEPTH = 4;
tree.makeChildren(3, MAX_DEPTH);

let t = 0;
const draw = () => {
  t -= 0.005;
  canvas.width = canvas.width;
  tree.wiggle();

  const leaves = [];
  /**
   * @param {Node} node
   */
  const drawNode = (node, depth = 0) => {
    ctx.fillStyle = '#664';
    if (node.children.length) {
      const size1 = Math.tanh((MAX_DEPTH - depth + 1) / MAX_DEPTH) * 50;
      const size2 = Math.tanh((MAX_DEPTH - depth) / MAX_DEPTH) * 50;
      // ctx.lineWidth = size1;
      ctx.beginPath();
      const angle = node.size.angle + Math.PI / 2;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const dx1 = cos * size1;
      const dy1 = sin * size1;
      const dx2 = cos * size2;
      const dy2 = sin * size2;
      // const { pos, end } = node;
      const pos = node.parent ? node.parent.end : node.pos;
      const end = node.end;
      ctx.moveTo(pos.x - dx1, pos.y - dy1);
      ctx.lineTo(pos.x + dx1, pos.y + dy1);
      ctx.lineTo(end.x + dx2, end.y + dy2);
      ctx.lineTo(end.x - dx2, end.y - dy2);
      ctx.lineTo(pos.x - dx1, pos.y - dy1);
      // ctx.moveTo(node.pos.x, node.pos.y);
      // ctx.lineTo(node.end.x, node.end.y);
      ctx.fill();
    } else {
      leaves.push(node);
    }

    node.children.forEach(n => drawNode(n, depth + 1));
  };

  drawNode(tree);
  ctx.fillStyle = 'rgba(0,255,0, 0.1)';
  leaves.forEach(node => {
    ctx.beginPath();
    ctx.arc(node.pos.x, node.pos.y, node.size.magnitude * 1.2, 0, Math.PI * 2);
    ctx.fill();
  });
};

const stop = runWithFps(draw, 30);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      stop();
    }
  });
}
