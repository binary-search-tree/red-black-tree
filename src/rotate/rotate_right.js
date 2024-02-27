import assert from 'assert';

import Node from '../types/Node.js';

/**
 * Rotate tree right. (see https://en.wikipedia.org/wiki/Tree_rotation)
 *
 *         p                p
 *         |                |
 *         B                A
 *        / \              / \
 *       A   y     ->     x   B
 *      / \                  / \
 *     x   b                b   j
 *
 *
 * @param {Node} B - The root of the tree.
 *
 */

const rotate_right = (B) => {
	assert(B instanceof Node);
	const A = B.left;
	assert(A instanceof Node);

	const p = B.parent;
	if (p !== null) {
		if (B === p.left) p.left = A;
		else p.right = A;
	}

	A.parent = p;
	B.parent = A;

	const b = A.right;
	B.left = b;
	A.right = B;

	if (b !== null) b.parent = B;
};

export default rotate_right;
