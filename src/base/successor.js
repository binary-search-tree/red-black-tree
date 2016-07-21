export function successor ( node ) {

	var succ = node.right ;

	while ( !succ.left.isleaf() ) succ = succ.left ;

	return succ ;

}
