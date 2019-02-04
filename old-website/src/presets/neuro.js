import drawer from '../drawers/neuro';
import dot from '../dot';

let dots = [];
for(let i = 0; i < 15; i += 1) {
	for(let j = 0; j < 10; j += 1) {
		dots.push(dot(i * 70, j * 70));
	}
}

export default { drawer, dots, time: 1000, offset: 20 };