import dst from '../utils/dst';

export default function draw(diagram) {
	for(let i = 0, max = diagram.edges.length; i < max; i ++) {
		const { va, vb } = diagram.edges[i];

		// const diff = Math.min(
		// 	Math.abs(va.x - window.innerWidth / 2),
		// 	Math.abs(va.y - window.innerHeight / 2),
		// 	Math.abs(vb.y - window.innerHeight / 2),
		// 	Math.abs(vb.x - window.innerWidth / 2)
		// ) / window.innerWidth * 3;
		// console.log(diff);
		const c = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2,
		};
		const diff = Math.min(
			dst(va, c),
			dst(vb, c)
		) / window.innerWidth * 2;

		this.beginPath();
		this.lineWidth = 1;
		const r = Math.round(255 * (1 - diff));
		const g = Math.round(3.5 / dst(va, vb) / diff * 155);
		const b = Math.round(50 + diff * 400);
		const a = 3.5 / dst(va, vb);
		this.strokeStyle = `rgba( ${r}, ${g}, ${b}, ${a})`;
		this.moveTo(va.x, va.y);
		this.lineTo(vb.x, vb.y);
		this.stroke();
	}
}
