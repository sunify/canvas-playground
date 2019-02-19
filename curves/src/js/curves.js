const circle = (time, width, height) => {
  const size = Math.min(width, height) / 4;
  return [Math.cos(time) * size, Math.sin(time) * size];
};

const lemniscate = (time, width, height) => {
  const size = Math.min(300, Math.min(width, height) / 4);
  const x = Math.cos(time) * size;
  const y = Math.sin(time) * (size / 1.5) * (Math.cos(time) * 1.3);
  return [x, y];
};

const spiral = (time, width, height) => {
  const a = 2;
  const b = time ** 0.61;

  const angle = Math.log(time) ** 2.35;
  const x = (a + b * angle) * Math.cos(angle);
  const y = (a + b * angle) * Math.sin(angle);
  return [x, y];
};

const lorenz = {
  x: 5,
  y: 5,
  z: 4
};
const lorenzAttractor = () => {
  const a = 6,
    b = 22,
    c = 3;
  const dt = 0.005;
  const { x, y, z } = lorenz;
  const x1 = lorenz.x + a * (-x + y) * dt;
  const y1 = lorenz.y + (b * x - y - z * x) * dt;
  const z1 = lorenz.z + (-c * z + x * y) * dt;
  const result = [x1 * 15, y1 * 15];
  lorenz.x = x1;
  lorenz.y = y1;
  lorenz.z = z1;

  return result;
};

const rose = k => (time, width, height) => {
  const size = Math.min(200, Math.min(width, height) / 4);
  const a = time;
  const r = 1.5;
  const x = Math.cos((a / k) * r) * size * Math.cos(a * r);
  const y = Math.sin((a / k) * r) * size * Math.cos(a * r);
  return [x, y];
};

const hypocycloid = (a, b) => (time, width, height) => {
  const size = Math.min(23, Math.min(width, height) / 30);
  const x =
    ((a - b) * Math.cos(time) + b * Math.cos((a / b - 1) * time)) * size;
  const y =
    ((a - b) * Math.sin(time) - b * Math.sin((a / b - 1) * time)) * size;
  return [x, y];
};

const lissajous = (a, b, phi) => (time, width, height) => {
  const size = Math.min(200, Math.min(width, height) / 4);
  const A = size;
  const B = size;
  const x = A * Math.sin(a * time + phi);
  const y = B * Math.sin(b * time);
  return [x, y];
};

const sin = (time, width, height) => {
  const size = Math.min(40, width / 20);
  const x = time * size - width / 2;
  const y = Math.sin(time) * size * 1.4;
  return [x, y];
};

export default [
  {
    getPoint: circle,
    dt: 0.015,
    title: 'Circle',
    url: 'https://en.wikipedia.org/wiki/Circle'
  },
  {
    getPoint: lemniscate,
    dt: 0.015,
    title: 'Lemniscate of Gerono',
    url: 'https://en.wikipedia.org/wiki/Lemniscate_of_Gerono'
  },
  {
    getPoint: spiral,
    dt: 0.05,
    time: 1,
    title: 'Spiral',
    url: 'https://en.wikipedia.org/wiki/Spiral'
  },
  {
    getPoint: lorenzAttractor,
    dt: 0,
    title: 'Lorenz attractor',
    url: 'https://en.wikipedia.org/wiki/Lorenz_system#Lorenz_attractor'
  },
  {
    getPoint: rose(4 / 5),
    dt: 0.01,
    title: 'Rose [4/5]',
    url: 'https://en.wikipedia.org/wiki/Rose_(mathematics)'
  },
  {
    getPoint: rose(4),
    dt: 0.01,
    title: 'Rose [4]',
    url: 'https://en.wikipedia.org/wiki/Rose_(mathematics)'
  },
  {
    getPoint: rose(2 / 3),
    dt: 0.01,
    title: 'Rose [2/3]',
    url: 'https://en.wikipedia.org/wiki/Rose_(mathematics)'
  },
  {
    getPoint: rose(7 / 5),
    dt: 0.01,
    title: 'Rose [7/5]',
    url: 'https://en.wikipedia.org/wiki/Rose_(mathematics)'
  },
  {
    getPoint: hypocycloid(10, 3),
    dt: 0.013,
    title: 'Hypocycloid',
    url: 'https://en.wikipedia.org/wiki/Hypocycloid'
  },
  {
    getPoint: hypocycloid(12, 3),
    dt: 0.013,
    title: 'Astroid',
    url: 'https://en.wikipedia.org/wiki/Astroid'
  },
  {
    getPoint: hypocycloid(12, 4),
    dt: 0.013,
    title: 'Deltoid',
    url: 'https://en.wikipedia.org/wiki/Deltoid_curve'
  },
  {
    getPoint: lissajous(10, 12, Math.PI * 0.67),
    dt: 0.0015,
    title: 'Lissajous Curve [10:12]',
    url: 'https://en.wikipedia.org/wiki/Lissajous_curve'
  },
  {
    getPoint: lissajous(2, 3, Math.PI * 0.37),
    dt: 0.005,
    title: 'Lissajous Curve [2:3]',
    url: 'https://en.wikipedia.org/wiki/Lissajous_curve'
  },
  {
    getPoint: sin,
    dt: 0.08,
    title: 'Sine',
    url: 'https://en.wikipedia.org/wiki/Sine'
  }
];
