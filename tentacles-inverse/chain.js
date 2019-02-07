import Vector from 'victor';
import SimplexNoise from 'simplex-noise';

const noise = new SimplexNoise();

export class Segment {
  constructor(posOrParent, offset, angle, t = 0) {
    if (posOrParent instanceof Vector) {
      this.position = posOrParent;
      this.child = null;
      this.parent = null;
    } else {
      this.parent = posOrParent;
      this.position = new Vector().copy(this.parent.end);
      posOrParent.child = this;
    }
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

  get end() {
    if (this.position) {
      const start = this.position;
      return new Vector()
        .copy(start)
        .add(
          new Vector(
            this.offset * Math.cos(this.angle),
            this.offset * Math.sin(this.angle)
          )
        );
    }

    return null;
  }

  follow(target) {
    const dirAngle = Math.atan2(
      target.y - this.position.y,
      target.x - this.position.x
    );
    this.angle = dirAngle;
    this.position = new Vector(
      -this.offset * Math.cos(dirAngle) + target.x,
      -this.offset * Math.sin(dirAngle) + target.y
    );

    if (this.parent) {
      this.parent.follow(this.position);
    }
  }
}
