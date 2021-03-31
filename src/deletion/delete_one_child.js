import assert from 'assert';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import Node from '../types/Node.js';

import replace_node from './replace_node.js';
import delete_case2 from './delete_case2.js';

/**
 * Delete a node <code>n</code> with one non-leaf left child and one leaf right
 * child.
 *
 * Precondition:
 *   - n has exactly one non-leaf child.
 *   - n is not the root
 *   - n's only non-leaf child is n's left child.
 *   - hence, n's right child is a leaf
 *
 * @param {Node} n - The node to delete.
 */
const delete_one_child = (n) => {
	assert(n instanceof Node);
	assert(n.parent !== null);
	assert(n.left instanceof Node);
	assert(n.right === null);

	const child = n.left;

	// Replace n with its only child
	replace_node(n, child);

	if (n._color === BLACK) {
		// If n is black, deleting it reduces the black-height of every path going
		// through it by 1.
		// We can easily fix this when its only child is an
		// internal red node: change the color of the child to black and
		// replace n with it.
		if (child._color === RED) child._color = BLACK;
		// Otherwise, there are more things to fix.
		else {
			delete_case2(child);
		}
	} else {
		assert(n._color === RED);
		// If n is red then its child can only be black. Replacing n with its
		// child suffices. This has already been done above.
		assert(child._color === BLACK);
	}
};

export default delete_one_child;
