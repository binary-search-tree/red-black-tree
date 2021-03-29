import assert from 'assert';
import {Node} from '../adt/Node.js';

/**
 * Computes the grandparent (parent of parent) of the input node.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
export const grandparent = (node) => {
	assert(node instanceof Node);
	// We only call this function when node HAS a grandparent
	assert(node.parent !== null);
	assert(node.parent.parent !== null);
	return node.parent.parent;
};
