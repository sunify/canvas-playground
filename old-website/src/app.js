// import './app.css';
import { run, addDot, clear } from './core';
import dot from './dot';

let canvas = document.getElementById('cnv');
let clearBtn = document.getElementById('clear');
let ctx = canvas.getContext('2d');

function start(preset) {
  run(ctx, preset);

  window.new_dots = [];
  function handleMouseMove(e) {
    if (e.which === 1 && Math.random() > 0.2) {
      e.preventDefault();
      document.body.classList.add('st-dragging');
      const d = dot(
        (e.pageX / window.innerWidth) * 1000,
        (e.pageY / window.innerHeight) * 700
      );
      addDot(d);
      window.new_dots.push(d);
    }
  }

  function handleResize() {
    canvas.width = window.innerWidth + 2;
    canvas.height = window.innerHeight + 2;
  }

  function handleMouseUp() {
    document.body.classList.remove('st-dragging');
  }

  clearBtn.addEventListener('click', clear);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('resize', handleResize);
  handleResize();
}

switch (Math.round(Math.random() * 8)) {
  // switch(0) {
  case 0:
    import('./presets/nebula').then(preset => start(preset.default));
    break;
  case 1:
    import('./presets/blue_star').then(preset => start(preset.default));
    break;
  case 2:
    import('./presets/classic').then(preset => start(preset.default));
    break;
  case 3:
    import('./presets/fire_trap').then(preset => start(preset.default));
    break;
  case 4:
    import('./presets/frozen').then(preset => start(preset.default));
    break;
  case 5:
    import('./presets/neuro').then(preset => start(preset.default));
    break;
  case 6:
    import('./presets/graph').then(preset => start(preset.default));
    break;
  case 7:
    import('./presets/cave').then(preset => start(preset.default));
    break;
  case 8:
    import('./presets/sun').then(preset => start(preset.default));
    break;
}
