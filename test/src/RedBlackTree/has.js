import test from 'ava';

import {range} from '@iterable-iterator/range';

import {increasing, decreasing} from '../../fixtures.js';

import {RedBlackTree} from '#module';

for (const compare of [increasing, decreasing]) {
	test(`RedBlackTree::has [${compare.name}]`, (t) => {
		const tree = new RedBlackTree(compare);

		t.falsy(tree.has(0));

		const n = 10_000;
		const reference = [];

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
