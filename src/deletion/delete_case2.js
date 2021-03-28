import { BLACK , RED , sibling , rotate_left , rotate_right } from '../index.js' ;

import { delete_case3 } from "./delete_case3.js" ;
import { delete_case4 } from "./delete_case4.js" ;

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *
 * @param {Node} n - The input node.
 */
export function delete_case2 ( n ) {

    const s = sibling( n ) ;

	/**
	 * If n's sibling is red, prepare for and go to case 4.
	 *
	 *           B                       B
	 *         /   \                  /     \
	 *      >B       R               R       B
	 *      / \     / \     -->    /   \    / \
	 *     -   -  B     B        >B     B  =   =
	 *           / \   / \       / \   / \
	 *          =   = =   =     -   - =   =
	 */
    if ( s.color === RED ) {
        n.parent.color = RED ;
        s.color = BLACK ;
        if ( n === n.parent.left ) rotate_left( n.parent ) ;
        else rotate_right( n.parent ) ;
        delete_case4( n ) ;
    }

    // Otherwise, go to case 3.
    else delete_case3( n ) ;

}
