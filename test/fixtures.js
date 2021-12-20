import {increasing as _inc, decreasing as _dec} from '@total-order/primitive';

import {_fisheryates, _shuffle, _randint} from '@randomized/random';
import {splitmix64, nextFloat64} from '@entropy-source/pseudo-random';

export const increasing = (a, b) => _inc(a, b);
increasing.step = 1;
export const decreasing = (a, b) => _dec(a, b);
decreasing.step = -1;

export const entropy = (seed) => {
	const prng = splitmix64(seed);
	const random = () => nextFloat64(prng);
	const randint = _randint(random);
	const sample = _fisheryates(randint);
	const shuffle = _shuffle(sample);
	return {
		prng,
		random,
		randint,
		sample,
		shuffle,
	};
};
