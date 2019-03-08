import { Vector } from 'v-for-vector';

export class DiffLine {
  constructor(
    maxForce,
    maxSpeed,
    desiredSeparation,
    separationCohesionRation,
    maxEdgeLen
  ) {
    this.maxForce = maxForce;
    this.maxSpeed = maxSpeed;
    this.desiredSeparation = desiredSeparation;
    this.sq_desiredSeparation = desiredSeparation ** 2;
    this.separationCohesionRation = separationCohesionRation;
    this.maxEdgeLen = maxEdgeLen;
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  addNodeAt(node, index) {
    this.nodes.splice(index, 0, node);
  }

  update() {
    this.differentiate();
    this.growth();
  }

  growth() {
    for (let i = 0; i < this.nodes.length - 1; i += 1) {
      const n1 = this.nodes[i];
      const n2 = this.nodes[i + 1];
      const d = Vector.dist(n1.position, n2.position);
      if (d > this.maxEdgeLen) {
        // Can add more rules for inserting nodes
        const index = this.nodes.indexOf(n2);
        const newNode1 = Vector.clone(n1.position)
          .add(n2.position)
          .div(2);
        this.addNodeAt(new Node(newNode1, this.maxForce, this.maxSpeed), index);
      }
    }
  }

  differentiate() {
    const separationForces = this.getSeparationForces();
    const cohesionForces = this.getEdgeCohesionForces();
    for (let i = 0; i < this.nodes.length; i += 1) {
      const separation = separationForces[i];
      const cohesion = cohesionForces[i];
      separation.mult(this.separationCohesionRation);
      this.nodes[i].applyForce(separation);
      this.nodes[i].applyForce(cohesion);
      this.nodes[i].update();
    }
  }

  getSeparationForces() {
    const n = this.nodes.length;
    const separateForces = [];
    const nearNodes = [];
    let nodei;
    let nodej;

    for (let i = 0; i < n; i += 1) {
      separateForces.push(Vector.zero());
    }

    for (let i = 0; i < n; i += 1) {
      nodei = this.nodes[i];
      for (let j = i + 1; j < n; j += 1) {
        nodej = this.nodes[j];
        const forceij = this.getSeparationForce(nodei, nodej);
        if (forceij.magnitude > 0) {
          separateForces[i].add(forceij);
          separateForces[j].sub(forceij);
          nearNodes[i] = (nearNodes[i] || 0) + 1;
          nearNodes[j] = (nearNodes[j] || 0) + 1;
        }
      }
      if (nearNodes[i] > 0) {
        separateForces[i].div(nearNodes[i]);
      }
      if (separateForces[i].magnitude > 0) {
        separateForces[i]
          .setMagnitude(this.maxSpeed)
          .sub(this.nodes[i].velocity)
          .limit(this.maxForce);
      }
    }
    return separateForces;
  }

  getSeparationForce(n1, n2) {
    const steer = Vector.zero();
    const dx = n1.position.x - n2.position.x;
    const dy = n1.position.y - n2.position.y;
    const sq_d = dx ** 2 + dy ** 2;
    if (sq_d > 0 && sq_d < this.sq_desiredSeparation) {
      const angle = Math.atan2(dy, dx);
      steer.add(Vector.polar(angle, 1 / Math.sqrt(sq_d)));
    }
    return steer;
  }

  getEdgeCohesionForces() {
    const cohesionForces = [];
    for (let i = 0; i < this.nodes.length; i++) {
      const sum = Vector.zero();
      if (i !== 0 && i !== this.nodes.length - 1) {
        sum.add(this.nodes[i - 1].position).add(this.nodes[i + 1].position);
      } else if (i === 0) {
        sum
          .add(this.nodes[this.nodes.length - 1].position)
          .add(this.nodes[i + 1].position);
      } else if (i === this.nodes.length - 1) {
        sum.add(this.nodes[i - 1].position).add(this.nodes[0].position);
      }
      sum.div(2);
      cohesionForces.push(this.nodes[i].seek(sum));
    }
    return cohesionForces;
  }
}

export class Node {
  constructor(position, maxForce, maxSpeed) {
    this.position = position;
    this.maxForce = maxForce;
    this.maxSpeed = maxSpeed;
    this.velocity = Vector.random();
  }

  applyForce(force) {
    this.velocity.add(force);
  }

  update() {
    // this.velocity.angle -= 0.2;
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
  }

  seek(target) {
    return Vector.clone(target)
      .sub(this.position)
      .setMagnitude(this.maxSpeed)
      .sub(this.velocity)
      .limit(this.maxForce);
  }
}
