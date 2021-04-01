import assert from 'assert';
import Node from '../types/Node.js';
import swap_color from './swap_color.js';

/**
 * Swap pointers and colors of two NON-ADJACENT nodes.
 *
 *         p         q             q         p
 *         |         |             |         |
 *        -A        +B            +A        -B
 *        / \       / \           / \       / \
 *       u   v     x   y     ->  x   y     u   v
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
	const y = B.right;

	if (p !== null) {
		if (A === p.left) p.left = B;
		else p.right = B;
	}

	if (q !== null) {
		if (B === q.right) q.right = A;
		else q.left = A;
	}

	A.parent = q;
	A.left = x;
	A.right = y;
	B.parent = p;
	B.left = u;
	B.right = v;

	if (x !== null) x.parent = A;
	if (y !== null) y.parent = A;
	if (u !== null) u.parent = B;
	if (v !== null) v.parent = B;

	swap_color(A, B);
};

export default swap_non_adjacent;
