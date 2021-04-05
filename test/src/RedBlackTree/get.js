import test from 'ava';

import {increasing, decreasing} from '../../fixtures.js';

import {range} from '@aureooms/js-itertools';

import {RedBlackTree} from '../../../src/index.js';

for (const compare of [increasing, decreasing]) {
	test(`RedBlackTree::get [${compare.name}]`, (t) => {
		const tree = RedBlackTree.empty(compare);

		t.true(tree.get(0) === undefined);

		const n = 10000;
		const reference = [];

		// eslint-disable-next-line no-unused-vars
		for (const _ of range(n)) {
			const x = Math.random();
			tree.add(x);
			reference.push(x);
		}

		for (const x of reference) {
			t.deepEqual(tree.get(x), x);
		}

		t.true(tree.get(-1) === undefined);
		t.true(tree.get(n) === undefined);
	});
}
