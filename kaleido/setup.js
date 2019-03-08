export const PIXEL_RATIO = (() => {
  const ctx = document.createElement('canvas').getContext('2d'),
    dpr = window.devicePixelRatio || 1,
    bsr =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;

  return dpr / bsr;
})();

export const { innerWidth: width, innerHeight: height } = window;

export const canvas = document.getElementById('bg');
export const ctx = canvas.getContext('2d');

document.addEventListener('keyup', e => {
  if (e.keyCode === 83 && e.ctrlKey) {
    e.preventDefault();

    canvas.toBlob(blob => {
      window.open(URL.createObjectURL(blob));
    }, 'image/png');
  }
});

canvas.width = width * PIXEL_RATIO;
canvas.height = height * PIXEL_RATIO;
canvas.style.width = width + 'px';
canvas.style.height = height + 'px';

const downloadLink = document.createElement('a');
document.body.appendChild(downloadLink);
downloadLink.style = 'display: none';
export function downloadCanvas(fn) {
  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = `${fn}.png`;
    downloadLink.click();
    URL.revokeObjectURL(url);
  }, 'image/png');
}
