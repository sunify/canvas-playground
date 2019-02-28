export function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export function noisifyCanvas(context, amout = 30) {
  const canvas = context.canvas;
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = new Uint32Array(imageData.data.buffer);

  for (let x = 0; x < canvas.width; x += 1) {
    for (let y = 0; y < canvas.height; y += 1) {
      const i = y * canvas.width + x;
      const r0 = imageData.data[i * 4 + 0];
      const g0 = imageData.data[i * 4 + 1];
      const b0 = imageData.data[i * 4 + 2];
      const a0 = imageData.data[i * 4 + 3];
      const r = Math.max(0, Math.min(255, r0 + (0.5 - Math.random()) * amout));
      const g = Math.max(0, Math.min(255, g0 + (0.5 - Math.random()) * amout));
      const b = Math.max(0, Math.min(255, b0 + (0.5 - Math.random()) * amout));

      data[i] =
        (a0 << 24) | // alpha
        (b << 16) | // blue
        (g << 8) | // green
        r;
    }
  }

  context.putImageData(imageData, 0, 0);
}
