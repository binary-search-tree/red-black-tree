import assert from 'assert';
import Node from '../adt/Node.js';
import grandparent from './grandparent.js';

/**
 * Computes the uncle of the input node when the grandparent is guaranteed to
 * exist.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
const uncle = (node) => {
	assert(node instanceof Node);
	const g = grandparent(node);
	assert(g !== null);
	if (node.parent === g.left) {
		if (g.right.isLeaf()) return null;
		assert(g.right instanceof Node);
		return g.right;
	}

	if (g.left.isLeaf()) return null;
	assert(g.left instanceof Node);
	return g.left;
};

export default uncle;
