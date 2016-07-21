export function predecessor ( node ) {

	var pred = node.left ;

	while ( !pred.right.isleaf() ) pred = pred.right ;

	return pred ;

}
