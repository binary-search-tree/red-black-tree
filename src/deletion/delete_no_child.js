import assert from 'assert';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import Node from '../types/Node.js';

import delete_case1 from './delete_case1.js';

import prune from './prune.js';

/**
 * Delete a node <code>n</code> that has no non-leaf child.
 *
 * Precondition:
 *   - n has no non-leaf child.
 *   - n is not the root
 *
 * @param {Node} n - The node to delete.
 * @return {Node} The root of the modified subtree.
 */
const delete_no_child = (n) => {
	assert(n instanceof Node);
	assert(n.parent !== null);
	assert(n.left === null);
	assert(n.right === null);

	if (n._color !== BLACK) {
		assert(n._color === RED);
		prune(n);
		return n.parent;
	}

	// If n is black, deleting it reduces the black-height of every path going
	// through it by 1. The leaf is black, so there are more things to fix.
	// NOTE We temporarily keep n in the tree to mock a leaf, since n does not
	// have children.
	const subtree = delete_case1(n);

	// Delete mocked leaf
	prune(n);
	return subtree;
};

export default delete_no_child;
