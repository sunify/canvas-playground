import { Vector } from 'v-for-vector';

export function distFast(x1, y1, x2, y2) {
  // Approximation by using octagons approach
  const x = x2 - x1 || 0.001;
  const y = y2 - y1 || 0.001;
  return (
    1.426776695 *
    Math.min(
      0.7071067812 * (Math.abs(x) + Math.abs(y)),
      Math.max(Math.abs(x), Math.abs(y))
    )
  );
}

export default class Point {
  constructor(pos, vel, acc, friction) {
    this.pos = pos;
    this.acc = acc || new Vector(0, 0);
    this.vel = vel || new Vector(0, 0);
    this.friction = friction || 0.7;
  }

  update(width, height) {
    this.vel.add(this.acc);
    this.vel.multS(this.friction);
    this.pos.add(this.vel);

    if (this.pos.x > width) {
      this.pos.x = 0;
    }

    if (this.pos.x < 0) {
      this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
    }

    if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }

  applyToField(field, gridSize) {
    const i = Math.round(this.pos.x / gridSize);
    const j = Math.round(this.pos.y / gridSize);
    // field.forEach((row, i) => {
    //   row.forEach((cell, j) => {
    //     const x = i * gridSize;
    //     const y = j * gridSize;
    //     const d = distFast(x, y, this.pos.x, this.pos.y);
    //     const f = (1 / Math.pow(d, 2)) * cell * 1000;
    //   });
    // });
    // this.acc.set;

    if (field[i] && field[i][j]) {
      const f = field[i][j] * Math.PI;
      this.acc.x = Math.sin(f) / 40;
      this.acc.y = Math.cos(f) / 40;
    }
  }
}
