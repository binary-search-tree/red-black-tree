export function predecessor ( node ) {

	var pred = node.right ;

	while ( !pred.left.isleaf() ) pred = pred.left ;

	return pred ;

}
