import assert from 'assert';
import {Node} from '../adt/Node.js';

/**
 * Computes the predecessor of the input node, in the subtree rooted at the
 * input node, when this predecessor is guaranteed to exist.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
export const predecessor = (node) => {
	assert(node.left instanceof Node);
	let pred = node.left;

	while (!pred.right.isLeaf()) {
		assert(pred.right instanceof Node);
		pred = pred.right;
	}

	return pred;
};
