import * as dat from 'dat.gui';

export const line = [];

export const params = {
  save() {
    downloadCanvas(`${Date.now()}`);
  },
  clear() {
    line.splice(0, line.length);
  },
  reps: 1,
  density: 1
};
export const gui = new dat.GUI();
gui.add(params, 'reps', 1, 1000, 1);
gui.add(params, 'density', -10, 10, 0.01);
gui.add(params, 'clear');
gui.add(params, 'save');
