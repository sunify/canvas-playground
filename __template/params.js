import * as dat from 'dat.gui';

export const params = {
  save() {
    downloadCanvas(`${Date.now()}`);
  }
};
export const gui = new dat.GUI();
gui.add(params, 'save');
