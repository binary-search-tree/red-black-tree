import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {sorted} from '@iterable-iterator/sorted';
import {head} from '@iterable-iterator/slice';
import {iter} from '@iterable-iterator/iter';
import {exhaust} from '@iterable-iterator/consume';

import chalk from 'chalk';
import {RedBlackTree, _debug} from '#module';

import {increasing, entropy} from '../../fixtures.js';

const seed = [0, 17];
const {shuffle} = entropy(seed);

const {bgRed: red, bgBlack: black} = chalk;

const debug = _debug({red, black});

const macro = (t, reference) => {
	const n = reference.length;

	const tree = RedBlackTree.from(increasing, reference);
	t.deepEqual(
		list(tree),
		sorted(increasing, reference),
		'tree contains n items',
	);

	const m = Math.floor(n / 2);
	for (const i of range(m)) {
		const x = reference[i];
		t.true(tree.remove(x));
		t.true(tree.get(x) === undefined);
	}

	const _rest = iter(reference);
	exhaust(head(_rest, m));
	const rest = sorted(increasing, _rest);

	t.deepEqual(list(tree), rest, 'tree contains n - m last items');

	for (const i of range(m, n)) {
		const x = reference[i];
		t.deepEqual(tree.get(x), x);
	}

	t.deepEqual(list(tree), rest, 'tree contains n - m last items');

	for (const i of range(m)) {
		const x = reference[i];
		t.true(tree.get(x) === undefined);
		tree.add(x);
		t.true(tree.get(x) === x);
	}

	t.deepEqual(
		list(tree),
		sorted(increasing, reference),
		'tree contains all n items',
	);

	for (const i of range(n)) {
		const x = reference[i];
		t.true(tree.remove(x));
		t.true(tree.get(x) === undefined);
	}

	t.deepEqual(list(tree), [], 'tree is empty');
};

macro.title = (title, reference) =>
	title ||
	'Test RedBlackTree::remove with ' +
		(reference.length > 10
			? `${reference.length} elements`
			: JSON.stringify(reference));

const n = 10_000;
const huge_list = list(range(n));
shuffle(huge_list, 0, n);
test(macro, huge_list);

test(macro, [5, 3, 2, 6, 7, 8, 4, 1]);
test(macro, [5, 3, 2, 6, 7, 8, 4]);
test(macro, [5, 3, 2, 6, 7, 8]);
test(macro, [5, 3, 2, 6, 7]);

test('delete root with right child', (t) => {
	const tree = new RedBlackTree(increasing);

	tree.add(0);
	tree.add(1);

	const repr1 = `(${black('L')}, ${black(0)}, (${black('L')}, ${red(
		1,
	)}, ${black('L')}))`;

	t.deepEqual(debug(tree.root), repr1, 'debug string 1 is correct');

	tree.remove(0);

	t.deepEqual(list(tree), [1]);

	const repr2 = `(${black('L')}, ${black(1)}, ${black('L')})`;

	t.deepEqual(debug(tree.root), repr2, 'debug string 2 is correct');
});

test('delete root with left child', (t) => {
	const tree = new RedBlackTree(increasing);

	tree.add(0);
	tree.add(-1);

	const repr1 = `((${black('L')}, ${red(-1)}, ${black('L')}), ${black(
		0,
	)}, ${black('L')})`;

	t.deepEqual(debug(tree.root), repr1, 'debug string 1 is correct');

	tree.remove(0);

	t.deepEqual(list(tree), [-1]);

	const repr2 = `(${black('L')}, ${black(-1)}, ${black('L')})`;

	t.deepEqual(debug(tree.root), repr2, 'debug string 2 is correct');
});

test('remove from empty tree', (t) => {
	const tree = new RedBlackTree(increasing);

	t.falsy(tree.remove(0));
});

test('remove unexisting stuff', (t) => {
	const tree = RedBlackTree.from(increasing, range(100));

	t.falsy(tree.remove(Math.PI));
});
