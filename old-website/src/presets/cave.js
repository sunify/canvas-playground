import drawer from '../drawers/ice';
import dot from '../dot';

let dots = [];
for(let i = 0; i < 15; i += 1) {
	for(let j = 0; j < 10; j += 1) {
		dots.push(dot(i * 70 * (Math.random() + 0.5), j * 70 * (Math.random() + 0.5)));
	}
}

export default { drawer, dots, time: 200, offset: 5 };