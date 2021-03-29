import {grandparent} from './grandparent.js';

/**
 * Computes the uncle of the input node when the grandparent is guaranteed to
 * exist.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
export const uncle = (node) => {
	const g = grandparent(node);
	// Assert( g !== null ) ;
	// this can never happen
	if (node.parent === g.left) return g.right.isLeaf() ? null : g.right;
	return g.left.isLeaf() ? null : g.left;
};
