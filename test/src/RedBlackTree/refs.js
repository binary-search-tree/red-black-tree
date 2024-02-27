import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {zip} from '@iterable-iterator/zip';

import {increasing, entropy} from '../../fixtures.js';

import {empty} from '#module';

const seed = [0, 17];
const {shuffle} = entropy(seed);

const randomItems = (n) => {
	const items = list(range(n));
	shuffle(items, 0, n);
	return items;
};

const macro = (t, items) => {
	const refs = [];
	const tree = empty(increasing);
	for (const item of items) {
		const ref = tree.add(item);
		refs.push(ref);
	}

	for (const [item, ref] of zip(items, refs)) {
		t.is(ref.key, item);
		if (ref.parent === null) {
			t.is(ref, tree.root);
		} else {
			t.true(ref === ref.parent.left || ref === ref.parent.right);
		}
	}

	for (const [item, ref] of zip(items, refs)) {
		t.is(ref.key, item);
		if (ref.parent === null) {
			t.is(ref, tree.root);
		} else {
			t.true(ref === ref.parent.left || ref === ref.parent.right);
		}

		tree.remove(item);
	}

	t.true(tree.isEmpty());
};

macro.title = (title, items) =>
	title ||
	'Test references with ' +
		(items.length > 10 ? `${items.length} elements` : JSON.stringify(items));

test(macro, randomItems(2));
test(macro, randomItems(3));
test(macro, randomItems(4));
test(macro, randomItems(5));
test(macro, randomItems(10));
test(macro, randomItems(20));
test(macro, randomItems(100));
test(macro, randomItems(1000));
test(macro, randomItems(10_000));
