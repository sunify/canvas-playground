export default function drawDot(ctx, dot) {
	ctx.beginPath();
	ctx.arc(dot.x, dot.y, dot.ex/2, 0, Math.PI * 2);
	ctx.fillStyle = dot.color;
	ctx.fill();
}
