export function* inordertraversal ( node ) {

	if ( !node.left.isleaf() ) {
		yield *inordertraversal( node.left );
	}

	yield node.value ;

	if ( !node.right.isleaf() ) {
		yield* inordertraversal( node.right );
	}

}
