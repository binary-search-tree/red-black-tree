
export function replace_node ( A , B ) {
	if ( A.parent === null ) {
		// nothing to do
	}
	else if ( A === A.parent.left ) {
		A.parent.left = B ;
	}
	else {
		A.parent.right = B ;
	}
	B.parent = A.parent ;
}
