import assert from 'assert';

import Node from '../types/Node.js';

import swap_color from './swap_color.js';

/**
 * Swap pointers and colors of two NON-ADJACENT nodes with three constraints:
 *   - B is not the root
 *   - B is its parent right child
 *   - B's right child is a leaf
 *
 * NOTE: These three constraints are implied because B is A's in-subtree
 * predecessor without being A's left child.
 *
 *         p       q             q           p
 *         |        \             \          |
 *        -A        +B            +A        -B
 *        / \       / \           / \       / \
 *       u   v     x   -     ->  x   -     u   v
 *
 * @param {Node} A - The first node.
 * @param {Node} B - The second node.
 */

const swap_non_adjacent = (A, B) => {
	assert(A instanceof Node);
	assert(B instanceof Node);
	const p = A.parent;
	const u = A.left;
	const v = A.right;
	const q = B.parent;
	const x = B.left;
	assert(B.right === null);
	assert(q !== null);
	assert(B === q.right);

	if (p !== null) {
		if (A === p.left) p.left = B;
		else p.right = B;
	}

	q.right = A;

	A.parent = q;
	A.left = x;
	A.right = null;
	B.parent = p;
	B.left = u;
	B.right = v;

	if (x !== null) x.parent = A;
	if (u !== null) u.parent = B;
	if (v !== null) v.parent = B;

	swap_color(A, B);
};

export default swap_non_adjacent;
