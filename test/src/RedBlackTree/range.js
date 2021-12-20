import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {shuffle} from '@randomized/random';
import {increasing, decreasing} from '../../fixtures.js';

import {RedBlackTree} from '../../../src/index.js';

for (const compare of [increasing, decreasing]) {
	test(`RedBlackTree::range [${compare.name}]`, (t) => {
		const n = 10_000;
		const reference = range(n);
		shuffle(reference, 0, n);

		const tree = RedBlackTree.from(compare, reference);

		const x = (a, b) =>
			t.deepEqual(list(tree.range(a, b)), list(range(a, b, compare.step)));

		x(0, n);
		x(10, 20);
		x(20, 10);
		x(7, 13);
		x(13, 7);
		x(n - 1, -1);
		x(10, 10);
	});
}
