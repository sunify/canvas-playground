import * as dat from 'dat.gui';
import eases from 'eases';
import tweeen from 'tweeen';
import lerp from '@sunify/lerp-color';
import { canvas, downloadCanvas } from './setup';
import { shuffle } from './utils';

const palettes = [
  ['#d71259', '#8e2d56', '#208381', '#eca639', '#73d2de'],
  ['#820263', '#d90368', '#53dd6c', '#2e294e', '#ffd400']
];

const initialColors = shuffle([...palettes[0]]);

export const params = {
  colorsArr: initialColors,
  colors: lerp(...initialColors, ...initialColors),
  segments: 100,
  iterations: 50,
  palette: 1,
  noiseFrequency: 5,
  noiseAmplitude: 10,
  speed: 0.1,
  colorSpeed: 0.1,
  strokeWeight: 0.5,
  stroke: false,
  shape: 'circle',
  save() {
    downloadCanvas(`${params.shape}-${Date.now()}`);
  },
  refreshPalette() {
    const prevColors = [...this.colorsArr];
    this.colorsArr = shuffle([...palettes[this.palette]]);

    if (this.prevTween) {
      this.prevTween();
    }

    this.prevTween = tweeen(
      0,
      1,
      progress => {
        const curColors = prevColors.map((prevC, i) =>
          lerp(prevC, '#FFF', this.colorsArr[i], progress)
        );
        this.colors = lerp(...curColors, ...curColors);
      },
      {
        duration: 300,
        easing: eases.quadInOut
      }
    );
  }
};
export const gui = new dat.GUI();
gui.add(params, 'shape', ['circle', 'heart']);
gui.add(params, 'palette', { Default: 0, "Majora's mask": 1 }).onChange(() => {
  params.refreshPalette();
});
gui.add(params, 'segments', 3, 150);
gui.add(params, 'iterations', 5, 250);
gui.add(params, 'noiseFrequency', 0, 10);
gui.add(params, 'noiseAmplitude', 0, 10);
gui.add(params, 'speed', 0, 1);
gui.add(params, 'colorSpeed', 0, 1);
gui.add(params, 'stroke');
gui.add(params, 'strokeWeight', 0, 4);
gui.add(params, 'refreshPalette');
gui.add(params, 'save');

canvas.addEventListener('touchend', e => {
  params.refreshPalette();
});

document.addEventListener('keydown', e => {
  if (e.keyCode === 32) {
    params.refreshPalette();
  }
});
