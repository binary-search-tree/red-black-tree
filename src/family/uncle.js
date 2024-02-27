import assert from 'assert';

import Node from '../types/Node.js';

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
	return node.parent === g.left ? g.right : g.left;
};

export default uncle;
