/**
 * Computes the predecessor of the input node, in the subtree rooted at the
 * input node, when this predecessor is guaranteed to exist.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
export function predecessor(node) {
	// Assert( !node.left.isleaf() ) ;
	let pred = node.left;

	while (!pred.right.isleaf()) pred = pred.right;

	return pred;
}
