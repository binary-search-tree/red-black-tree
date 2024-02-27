import assert from 'assert';

import replace_node from '../deletion/replace_node.js';
import Node from '../types/Node.js';

import swap_color from './swap_color.js';

/**
 * Swap pointers and colors of a node and its left child B with one constraint:
 *   - B's right child is a leaf
 *
 * NOTE: This constraint is implied because B is A's in-subtree predecessor.
 *
 *         p                   p
 *         |                   |
 *        -A                  -B
 *        / \                 / \
 *      +B   c       ->     +A   c
 *      / \                 / \
 *     a   -               a   -
 *
 * @param {Node} A - The node.
 * @return {Node} The node B.
 */

const swap_left = (A) => {
	assert(A instanceof Node);
	const B = A.left;
	assert(B instanceof Node);
	const a = B.left;
	assert(B.right === null);
	const c = A.right;

	if (A.parent === null) {
		B.parent = null;
	} else {
		replace_node(A, B);
	}

	A.parent = B;

	A.right = null;
	B.right = c;
	if (c !== null) c.parent = B;

	A.left = a;
	if (a !== null) a.parent = A;
	B.left = A;

	swap_color(A, B);

	return B;
};

export default swap_left;
