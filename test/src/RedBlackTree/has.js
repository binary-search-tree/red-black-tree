import test from 'ava';

import {increasing, decreasing} from '../../fixtures.js';

import {range} from '@aureooms/js-itertools';

import {RedBlackTree} from '../../../src/index.js';

for (const compare of [increasing, decreasing]) {
	test(`RedBlackTree::has [${compare.name}]`, (t) => {
		const tree = new RedBlackTree(compare);

		t.falsy(tree.has(0));

		const n = 10000;
		const reference = [];

		// eslint-disable-next-line no-unused-vars
		for (const _ of range(n)) {
			const x = Math.random();
			tree.add(x);
			reference.push(x);
		}

		for (const x of reference) {
			t.true(tree.has(x));
		}

		t.falsy(tree.has(-1));
		t.falsy(tree.has(n));
	});
}
