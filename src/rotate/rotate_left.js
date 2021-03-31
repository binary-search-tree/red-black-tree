import assert from 'assert';
import Node from '../types/Node.js';

/**
 * Rotate tree left. (see https://en.wikipedia.org/wiki/Tree_rotation)
 * /!\ This swaps the references to A and B.
 *
 *         A                B
 *        / \              / \
 *       a   B     ->     A   c
 *          / \          / \
 *         b   c        a   b
 *
 *
 * @param {Node} A - The root of the tree.
 *
 */

const rotate_left = (A) => {
	assert(A instanceof Node);
	const B = A.right;
	assert(B instanceof Node);
	const a = A.left;
	const b = B.left;
	const c = B.right;

	[A.key, B.key] = [B.key, A.key];
	[A._color, B._color] = [B._color, A._color];

	A.left = B;
	A.right = c;

	B.left = a;
	B.right = b;

	if (a !== null) a.parent = B;
	if (b !== null) b.parent = B;
	if (c !== null) c.parent = A;
};

export default rotate_left;
