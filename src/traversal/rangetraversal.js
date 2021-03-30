import assert from 'assert';
import Node from '../types/Node.js';

/**
 * Yields all the keys in the tree rooted at <code>root</code> that lie in the
 * interval <code>[left, right[</code>, in order.
 *
 * @param {Function} compare - The comparison function.
 * @param {Node} root - The root of the tree.
 * @param {any} left - The inclusive lower bound of the interval.
 * @param {any} right - The non-inclusive upper bound of the interval.
 * @returns {IterableIterator}
 */
export default function* rangetraversal(compare, root, left, right) {
	if (compare(root.key, left) < 0) {
		// If the root lies to the left of the interval, we can discard the
		// entire left subtree.
		if (!root.right.isLeaf()) {
			assert(root.right instanceof Node);
			yield* rangetraversal(compare, root.right, left, right);
		}
	} else if (compare(root.key, right) >= 0) {
		// If the root lies to the right of the interval, we can discard the
		// entire right subtree.
		if (!root.left.isLeaf()) {
			assert(root.left instanceof Node);
			yield* rangetraversal(compare, root.left, left, right);
		}
	} else {
		// Otherwise just recurse on both subtrees and yield the root in
		// between.
		if (!root.left.isLeaf()) {
			assert(root.left instanceof Node);
			yield* rangetraversal(compare, root.left, left, right);
		}

		yield root.key;
		if (!root.right.isLeaf()) {
			assert(root.right instanceof Node);
			yield* rangetraversal(compare, root.right, left, right);
		}
	}
}
