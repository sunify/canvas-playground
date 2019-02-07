import Vector from 'victor';
import SimplexNoise from 'simplex-noise';

const noise = new SimplexNoise();

export class Segment {
  constructor(pos, offset, angle, t = 0) {
    this.child = null;
    this.position = pos;
    this.offset = offset;
    this.angle = angle;
    this.selfAngle = angle;
    this.t = Math.random() * 1000;
    this.dt = Math.random() * 0.01;
  }

  get length() {
    let cur = this;
    let length = 0;
    while (cur) {
      length += 1;
      cur = cur.child;
    }

    return length;
  }

  addChild(child) {
    this.child = child;

    return child;
  }

  wiggle() {
    this.t += this.dt;
    // const min = -Math.PI / 2;
    // const max = Math.PI / 2;
    this.selfAngle = noise.noise2D(this.t, 200) % Math.PI;
  }

  update(position, angle) {
    if (position) {
      this.wiggle();
      this.position = position;
    }
    this.angle = this.selfAngle + (angle || 0);
    const start = this.position;
    const end = new Vector()
      .copy(start)
      .add(
        new Vector(
          this.offset * Math.cos(this.angle),
          this.offset * Math.sin(this.angle)
        )
      );

    if (this.child) {
      this.child.update(end, this.angle);
    }
  }
}
