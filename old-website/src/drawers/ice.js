import dst from '../utils/dst';

export default function draw(diagram) {
	for(let i = 0, max = diagram.edges.length; i < max; i ++) {
		const { va, vb } = diagram.edges[i];

		this.beginPath();
		this.lineWidth = 1;
		this.strokeStyle = `rgba(50,${Math.round(3.5 / dst(va, vb) * 255)},255, ${3.5 / dst(va, vb)})`;
		this.moveTo(va.x, va.y);
		this.lineTo(vb.x, vb.y);
		this.stroke();
	}
}
