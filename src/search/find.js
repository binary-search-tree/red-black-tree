export function find ( compare, node, value ) {

	// scan for first node whose
	// value equals parameter value

	while ( true ) {

		const d = compare( value, node.value );

		if ( d === 0 ) {
			return node;
		}

		else if ( d < 0 ) {
			node = node.left;
		}

		else {
			node = node.right;
		}

		if ( node.isleaf() ) {
			return null;
		}

	}

}
