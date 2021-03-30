import assert from 'assert';
import Node from '../types/Node.js';
import Leaf from '../types/Leaf.js';
import grandparent from './grandparent.js';

/**
 * Computes the uncle of the input node when the grandparent is guaranteed to
 * exist.
 *
 * @param {Node} node - The input node.
 * @returns {Node|Leaf}
 */
const uncle = (node) => {
	assert(node instanceof Node);
	const g = grandparent(node);
	assert(g !== null);
	const u = node.parent === g.left ? g.right : g.left;
	assert(u instanceof Node || u instanceof Leaf);
	return u;
};

export default uncle;
