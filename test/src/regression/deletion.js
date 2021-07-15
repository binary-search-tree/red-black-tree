import test from 'ava';

import {list} from '@iterable-iterator/list';
import {increasing} from '../../fixtures.js';
import {RedBlackTree} from '../../../src/index.js';

test('Edge case of small list', (t) => {
	const reference = [5, 3, 2, 6, 7, 8];
	const tree = RedBlackTree.from(increasing, reference);
	t.true(tree.remove(3));
	t.deepEqual(list(tree), [2, 5, 6, 7, 8]);
});
