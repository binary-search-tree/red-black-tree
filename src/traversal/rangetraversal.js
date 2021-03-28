/**
 * Yields all the keys in the tree rooted at <code>root</code> that lie in the
 * interval <code>[left, right[</code>, in order.
 *
 * @param {Function} compare - The comparison function.
 * @param {Node} root - The root of the tree.
 * @param {Key} left - The lower bound of the interval.
 * @param {Key} right - The upper bound of the interval.
 * @returns {Iterator}
 */
export function* rangetraversal(compare, root, left, right) {
	if (compare(root.key, left) < 0) {
		// If the root lies to the left of the interval, we can discard the
		// entire left subtree.
		if (!root.right.isleaf())
			yield* rangetraversal(compare, root.right, left, right);
	} else if (compare(root.key, right) >= 0) {
		// If the root lies to the right of the interval, we can discard the
		// entire right subtree.
		if (!root.left.isleaf())
			yield* rangetraversal(compare, root.left, left, right);
	} else {
		// Otherwise just recurse on both subtrees and yield the root in
		// between.
		if (!root.left.isleaf())
			yield* rangetraversal(compare, root.left, left, right);
		yield root.key;
		if (!root.right.isleaf())
			yield* rangetraversal(compare, root.right, left, right);
	}
}
