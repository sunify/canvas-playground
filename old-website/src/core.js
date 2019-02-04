import Voronoi from 'voronoi';
import raf from 'raf';

const { sin, cos, round, random, min, PI } = Math;

let _preset;
let _ctx;
let _dots;

let voronoi = new Voronoi();
let diagram = null;

function currentPos(time, dot) {
	const speed = time / (_preset.time || 400) / dot.speed * PI;
	const x1 = cos(speed) * (_preset.offset || 5);
	const y1 = sin(speed) * dot.ex * dot.reverse * (_preset.offset || 5);

	dot.x = dot._x / 1000 * window.innerWidth + (x1 * cos(dot.angle) - y1 * sin(dot.angle));
	dot.y = dot._y / 700 * window.innerHeight + (x1 * sin(dot.angle) + y1 * cos(dot.angle));
}

function update(dots, ctx, time) {
	voronoi.recycle(diagram);

	for(let i = 0, max = _dots.length; i < max; i += 1) {
		currentPos(time, _dots[i]);
	}

	diagram = voronoi.compute(
		_dots,
		{xl: 0, xr: _ctx.canvas.width, yt: 0, yb: _ctx.canvas.height}
	);

	_preset.drawer.apply(_ctx, [diagram]);
}

export function addDot(dot) {
	_dots.push(dot);
}

export function clear() {
	_dots = [];
	_ctx.canvas.width = _ctx.canvas.width;
}

export function run(ctx, preset) {
	_ctx = ctx;
	_dots = preset.dots.slice();
	_preset = preset;

	function loop(time) {
		setTimeout(() => raf(loop), 1000/20);
		update(_dots, _ctx, time);
	}

	raf(loop);
}
