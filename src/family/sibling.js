/**
 * Computes the sibling of the input node.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
export const sibling = (node) => {
	// Assert((node !== null) && (node.parent !== null));
	// We only use this function when node HAS a sibling so this case can never
	// happen.

	return node === node.parent.left ? node.parent.right : node.parent.left;
};
