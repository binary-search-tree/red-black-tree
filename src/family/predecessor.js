/**
 * Computes the predecessor of the input node, in the subtree rooted at the
 * input node, when this predecessor is guaranteed to exist.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
export const predecessor = (node) => {
	// Assert( !node.left.isLeaf() ) ;
	let pred = node.left;

	while (!pred.right.isLeaf()) pred = pred.right;

	return pred;
};
