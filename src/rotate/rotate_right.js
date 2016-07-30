/**
 * Rotate tree right. (see https://en.wikipedia.org/wiki/Tree_rotation)
 * /!\ This swaps the references to A and B.
 *
 *         B                A
 *        / \              / \
 *       A   c     ->     a   B
 *      / \                  / \
 *     a   b                b   c
 *
 *
 * @param {Node} B - The root of the tree.
 *
 */

export function rotate_right ( B ) {

	const A = B.left;
	const a = A.left ;
	const b = A.right ;
	const c = B.right ;

	[A.key , B.key] = [B.key , A.key] ;
	[A.color , B.color] = [B.color , A.color] ;

	B.left = a ;
	B.right = A ;

	A.left = b ;
	A.right = c ;

	a.parent = B ;
	b.parent = A ;
	c.parent = A ;

}
