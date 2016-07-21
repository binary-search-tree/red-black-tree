/**
 * -> https://en.wikipedia.org/wiki/Tree_rotation
 *
 *      A                B
 *     / \              / \
 *    a   B     ->     A   c
 *       / \          / \
 *      b   c        a   b
 */

export function rotate_left ( A ) {

	const B = A.right;

	A.right = B.left;
	B.left = A;

	B.parent = A.parent;
	A.right.parent = A;
	A.parent = B;

	return B;

}
