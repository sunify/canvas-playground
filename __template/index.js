import runWithFps from 'run-with-fps';
import { canvas, ctx, PIXEL_RATIO } from './setup';

const draw = () => {
  canvas.width = canvas.width;
};

const stop = runWithFps(draw, 30);

// Handle hot module replacement
if (module.hot) {
  module.hot.dispose(() => {
    if (stop) {
      stop();
    }
  });
}
