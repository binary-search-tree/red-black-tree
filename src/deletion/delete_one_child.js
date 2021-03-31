import assert from 'assert';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import Node from '../types/Node.js';

import replace_node from './replace_node.js';

/**
 * Delete a node <code>n</code> with one non-leaf left child and one leaf right
 * child.
 *
 * Precondition:
 *   - n has exactly one non-leaf child.
 *   - n is not the root
 *   - n's only non-leaf child is n's left child.
 *   - hence, n's right child is a leaf
 *   - hence, n's left child is RED
 *   - hence, n is BLACK
 *
 * @param {Node} n - The node to delete.
 */
const delete_one_child = (n) => {
	assert(n instanceof Node);
	assert(n._color === BLACK);
	assert(n.parent !== null);
	assert(n.left instanceof Node);
	assert(n.left._color === RED);
	assert(n.right === null);

	const child = n.left;
	// If n is black, deleting it reduces the black-height of every path going
	// through it by 1.
	// We can easily fix this when its only child is an
	// internal RED node: change the color of the child to black and
	// replace n with it.
	replace_node(n, child);
	child._color = BLACK;
};

export default delete_one_child;
