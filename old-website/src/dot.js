const { random, round, PI } = Math;

function rndm(a, b) {
	return random() * (b - a) + a;
}

export default function dot(x, y) {
	return { x, y,
		_x: x,
		_y: y,
		ex: rndm(1, 5),
		angle: rndm(0, 10 * PI),
		reverse: round(random()) * 2 - 1,
		speed: rndm(1, 10),
		color: `rgb(${[rndm(100, 200), rndm(10, 150), rndm(10, 100)].map(round).join(',')})`
	};
}
