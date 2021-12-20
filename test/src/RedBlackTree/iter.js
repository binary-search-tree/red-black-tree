import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {increasing, decreasing} from '../../fixtures.js';

import {RedBlackTree} from '../../../src/index.js';

for (const compare of [increasing, decreasing]) {
	test(`RedBlackTree::Symbol.iterator [${compare.name}]`, (t) => {
		const tree = new RedBlackTree(compare);

		const a1 = list(tree);

		t.is(a1.length, 0, 'tree contains 0 elements');

		const n = 10_000;
		const reference = [];

		// eslint-disable-next-line no-unused-vars
		for (const _ of range(n)) {
			const x = Math.random();
			tree.add(x);
			reference.push(x);
		}

		reference.sort(compare);

		const a2 = list(tree);

		t.deepEqual(a2.length, n, `tree contains ${n} elements`);
		t.deepEqual(a2, reference, 'tree is sorted');
	});
}
