export function* rangetraversal ( compare , node , left , right ) {

	if ( compare( node.value , left ) < 0 ) {
		if ( !node.right.isleaf() ) yield *rangetraversal( compare , node.right , left , right );
	}
	else if ( compare( node.value , right ) >= 0 ) {
		if ( !node.left.isleaf() ) yield *rangetraversal( compare , node.left , left , right );
	}
	else {
		if ( !node.left.isleaf() ) yield *rangetraversal( compare , node.left , left , right );
		yield node.value ;
		if ( !node.right.isleaf() ) yield *rangetraversal( compare , node.right , left , right );
	}

}
