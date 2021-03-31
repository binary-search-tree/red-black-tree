import assert from 'assert';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import Node from '../types/Node.js';
import Leaf from '../types/Leaf.js';

import replace_node from './replace_node.js';
import delete_case2 from './delete_case2.js';

import prune_subtree from './prune_subtree.js';

/**
 * Delete a node <code>n</code> that has at most a single non-leaf child.
 *
 * Precondition:
 *   - n has at most one non-leaf child.
 *   - n is not the root
 *   - if n has a non-leaf child, then it is its left child.
 *   - hence, n's right child is a leaf
 *
 * @param {Node} n - The node to delete.
 */
const delete_one_child = (n) => {
	assert(n instanceof Node);
	assert(n.parent !== null);
	// Precondition: n's right child is a leaf.
	// The right child of n is always a LEAF because either n is a subtree
	// predecessor or it is the only child of its parent by the red-black tree
	// properties
	assert(n.right === null);

	if (n._color === RED) {
		//    If n is red then its child can only be black. Replacing n with its
		//    child suffices.
		const child = n.left;
		if (child === null) {
			prune_subtree(n);
		} else {
			assert(child._color === BLACK);
			replace_node(n, child);
		}

		return;
	}

	assert(n._color === BLACK);

	// Mock leaf if there is no left child
	const child = n.left === null ? new Leaf(null) : n.left;

	// Replace n with its left child
	replace_node(n, child);

	// If n is black, deleting it reduces the black-height of every path going
	// through it by 1.
	// We can easily fix this when its left child is an
	// internal red node: change the color of the left child to black and
	// replace n with it.
	if (child._color === RED) child._color = BLACK;
	// Otherwise, there are more things to fix.
	else {
		delete_case2(child);
	}

	// Delete mocked leaf
	if (child instanceof Leaf) prune_subtree(child);
};

export default delete_one_child;
