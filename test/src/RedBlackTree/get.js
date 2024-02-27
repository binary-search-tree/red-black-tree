import test from 'ava';

import {range} from '@iterable-iterator/range';

import {increasing, decreasing} from '../../fixtures.js';

import {RedBlackTree} from '#module';

for (const compare of [increasing, decreasing]) {
	test(`RedBlackTree::get [${compare.name}]`, (t) => {
		const tree = RedBlackTree.empty(compare);

		t.true(tree.get(0) === undefined);

		const n = 10_000;
		const reference = [];

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
