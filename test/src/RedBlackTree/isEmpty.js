import test from 'ava';

import {range} from '@aureooms/js-itertools';

import {increasing, decreasing} from '../../fixtures.js';

import {empty, from, RedBlackTree} from '../../../src/index.js';

for (const compare of [increasing, decreasing]) {
	test(`empty(${compare.name})`, (t) => {
		t.true(empty(compare).isEmpty());
	});

	test(`from(${compare.name}, [])`, (t) => {
		t.true(from(compare, []).isEmpty());
	});

	test(`from(${compare.name}, range(100))`, (t) => {
		t.false(from(compare, range(100)).isEmpty());
	});

	test(`RedBlackTree.empty(${compare.name}) + add + remove`, (t) => {
		const tree = RedBlackTree.empty(compare);
		t.true(tree.isEmpty());
		tree.add('x');
		t.false(tree.isEmpty());
		tree.remove('x');
		t.true(tree.isEmpty());
	});
}

const macro = (t, compare, items, expected) => {
	const tree = RedBlackTree.from(compare, items);
	t.is(tree.isEmpty(), expected);
};

macro.title = (title, compare, items, _expected) =>
	`RedBlackTree.from(${compare.name}, ${
		title || JSON.stringify(items)
	}).isEmpty()`;

for (const compare of [increasing, decreasing]) {
	test(macro, compare, [], true);
	test(macro, compare, [1], false);
	test(macro, compare, '', true);
	test(macro, compare, 'ab', false);
	test(macro, compare, 'abc', false);
	test('range(0)', macro, compare, range(0), true);
	test('range(1)', macro, compare, range(1), false);
	test('range(10)', macro, compare, range(10), false);
	test('range(10000)', macro, compare, range(10000), false);
}
