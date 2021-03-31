import assert from 'assert';
import Node from '../types/Node.js';
import Leaf from '../types/Leaf.js';

/**
 * Computes the sibling of the input node.
 *
 * @param {Node|Leaf} node - The input node.
 * @returns {Node}
 */
const sibling = (node) => {
	assert(node instanceof Node || node instanceof Leaf);
	// We only use this function when node HAS a non-leaf sibling.
	assert(node.parent !== null);

	return node === node.parent.left ? node.parent.right : node.parent.left;
};

export default sibling;
