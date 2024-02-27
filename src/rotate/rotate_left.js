import assert from 'assert';

import Node from '../types/Node.js';

/**
 * Rotate tree left. (see https://en.wikipedia.org/wiki/Tree_rotation)
 *
 *         p                p
 *         |                |
 *         A                B
 *        / \              / \
 *       x   B     ->     A   y
 *          / \          / \
 *         b   y        x   b
 *
 *
 * @param {Node} A - The root of the tree.
 *
 */

const rotate_left = (A) => {
	assert(A instanceof Node);
	const B = A.right;
	assert(B instanceof Node);

	const p = A.parent;
	if (p !== null) {
		if (A === p.left) p.left = B;
		else p.right = B;
	}

	B.parent = p;
	A.parent = B;

	const b = B.left;
	A.right = b;
	B.left = A;

	if (b !== null) b.parent = A;
};

export default rotate_left;
