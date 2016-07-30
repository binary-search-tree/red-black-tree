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

export function rotate_left ( A ) {

	const B = A.right ;
	const a = A.left ;
	const b = B.left ;
	const c = B.right ;

	[A.key , B.key] = [B.key , A.key] ;
	[A.color , B.color] = [B.color , A.color] ;

	A.left = B ;
	A.right = c ;

	B.left = a ;
	B.right = b ;

	a.parent = B ;
	b.parent = B ;
	c.parent = A ;
}
