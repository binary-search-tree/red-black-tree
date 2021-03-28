import test from 'ava';

import {increasing, decreasing} from '@aureooms/js-compare';

import {range} from '@aureooms/js-itertools';

import {RedBlackTree} from '../../../src/index.js';

test('RedBlackTree::get', (t) => {
	for (const compare of [increasing, decreasing]) {
		const tree = new RedBlackTree(compare);

		t.is(tree.get(0), null);

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

		t.is(tree.get(-1), null);
		t.is(tree.get(n), null);
	}
});
