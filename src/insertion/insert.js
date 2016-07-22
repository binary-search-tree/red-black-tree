
export function insert ( compare, A, B ) {

	while ( true ) {

		if ( compare( B.value, A.value ) < 0 ) {

			const node = A.left;

			if ( node.isleaf() ) {
				A.left = B;
				break;
			}

			A = node;

		}

		else {

			const node = A.right;

			if ( node.isleaf() ) {
				A.right = B;
				break;
			}

			A = node;

		}

	}

	B.parent = A;

	return B;

}
