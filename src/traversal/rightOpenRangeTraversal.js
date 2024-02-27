import assert from 'assert';

import Node from '../types/Node.js';

import inordertraversal from './inordertraversal.js';

/**
 * Yields all the keys in the tree rooted at <code>root</code> that lie in the
 * interval <code>[left, +oo)</code>, in order.
 *
 * @param {Function} compare - The comparison function.
 * @param {Node} root - The root of the tree.
 * @param {any} left - The inclusive lower bound of the interval.
 * @returns {IterableIterator}
 */
export default function* rightOpenRangeTraversal(compare, root, left) {
	if (compare(root.key, left) < 0) {
		// If the root lies to the left of the interval, we can discard the
		// entire left subtree.
		if (root.right !== null) {
			assert(root.right instanceof Node);
			yield* rightOpenRangeTraversal(compare, root.right, left);
		}
	} else {
		// Otherwise recurse on left subtree, yield the root, and yield the
		// entire right subtree.
		if (root.left !== null) {
			assert(root.left instanceof Node);
			yield* rightOpenRangeTraversal(compare, root.left, left);
		}

		yield root.key;
		if (root.right !== null) {
			assert(root.right instanceof Node);
			yield* inordertraversal(root.right);
		}
	}
}
