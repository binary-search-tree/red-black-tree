/**
 * Replaces node <code>A</code> by node <code>B</code>.
 *
 * @param {Node} A - The node to replace.
 * @param {Node} B - The replacement node.
 */
export function replace_node ( A , B ) {

	// assert( A.parent !== null ) ;
	// we never apply delete_one_child on the root so we are safe

	if ( A === A.parent.left ) A.parent.left = B ;

	else A.parent.right = B ;

	B.parent = A.parent ;

}
