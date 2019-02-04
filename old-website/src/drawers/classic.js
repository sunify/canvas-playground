import dst from '../utils/dst';
import drawDot from '../drawDot';

export default function draw(diagram) {
	this.canvas.width = this.canvas.width;

	for(let i = 0, max = diagram.edges.length; i < max; i ++) {
		const { va, vb } = diagram.edges[i];
		this.beginPath();
		this.lineWidth = 2;
		this.strokeStyle = `rgba(106,27,154, ${3.5 / dst(va, vb)})`;
		this.moveTo(va.x, va.y);
		this.lineTo(vb.x, vb.y);
		this.stroke();
	}

	diagram.cells.forEach(c => drawDot(this, c.site));
}
