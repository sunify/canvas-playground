import { Vector } from 'v-for-vector';
import SimplexNoise from 'simplex-noise';

const noise = new SimplexNoise();

export class Segment {
  constructor(posOrParent, offset, angle, t = 0) {
    if (posOrParent instanceof Vector) {
      this.base = posOrParent;
      this.position = posOrParent;
      this.child = null;
      this.parent = null;
    } else {
      this.parent = posOrParent;
      this.position = this.parent.end.clone();
      posOrParent.child = this;
    }
    this.offset = offset;
    this.angle = angle;
    this.selfAngle = angle;
    this.t = Math.random() * 1000;
    this.dt = Math.random() * 0.01;
  }

  wiggle() {
    this.t += this.dt;
    this.selfAngle = noise.noise2D(this.t, 200) / 10;
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

  get end() {
    if (this.position) {
      return Vector.polar(this.angle, this.offset).add(this.position);
    }

    return null;
  }

  follow(target) {
    const dir = target.clone().sub(this.position);
    this.wiggle();
    this.angle = dir.angle + this.selfAngle;
    this.position = dir.setMagnitude(-this.offset).add(target);

    if (this.parent) {
      this.parent.follow(this.position);
    }
  }
}
