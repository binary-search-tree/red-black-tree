import { BLACK , RED , uncle , grandparent } from '../index.js' ;
import { insert_case1 } from './insert_case1' ;
import { insert_case4 } from './insert_case4' ;

/**
 * Preconditions:
 *   - n is red.
 *   - n is not the root of the tree.
 *   - n's parent is red.
 *
 * @param {Node} n - The input node.
 */
export function insert_case3 ( n ) {

	const u = uncle( n ) ;

	/**
	 * If n has a non-leaf uncle and this uncle is red then we simply
	 * repaint the parent and the uncle of n in black, the grandparent of
	 * n in red, then call insert_case1 on n's grandparent.
	 *
	 *             B                    >R
	 *           /   \                 /   \
	 *         R       R             B       B
	 *        / \     / \   -->     / \     / \
	 *      >R   -   -   -         R   -   -   -
	 *      / \                   / \
	 *     -   -                 -   -
	 */


	if ( ( u !== null ) && ( u.color === RED ) ) {
		n.parent.color = BLACK ;
		u.color = BLACK ;
		const g = grandparent( n ) ;
		g.color = RED ;
		insert_case1( g ) ;
	}

	else insert_case4( n ) ;

}
