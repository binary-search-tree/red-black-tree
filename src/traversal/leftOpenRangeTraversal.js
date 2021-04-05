import assert from 'assert';
import Node from '../types/Node.js';
import inordertraversal from './inordertraversal.js';

/**
 * Yields all the keys in the tree rooted at <code>root</code> that lie in the
 * interval <code>(-oo, right[</code>, in order.
 *
 * @param {Function} compare - The comparison function.
 * @param {Node} root - The root of the tree.
 * @param {any} right - The non-inclusive upper bound of the interval.
 * @returns {IterableIterator}
 */
export default function* leftOpenRangeTraversal(compare, root, right) {
	if (compare(root.key, right) >= 0) {
		// If the root lies to the right of the interval, we can discard the
		// entire right subtree.
		if (root.left !== null) {
			assert(root.left instanceof Node);
			yield* leftOpenRangeTraversal(compare, root.left, right);
		}
	} else {
		// Otherwise yield entire left subtree, yield the root, and recurse on
		// the right subtree.
		if (root.left !== null) {
			assert(root.left instanceof Node);
			yield* inordertraversal(root.left);
		}

		yield root.key;
		if (root.right !== null) {
			assert(root.right instanceof Node);
			yield* leftOpenRangeTraversal(compare, root.right, right);
		}
	}
}
