import { BLACK , RED , sibling , rotate_right , rotate_left } from '../index.js' ;

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *   - n's sibling is black
 *   - if n is a left child, the right child of n's sibling is red
 *   - if n is a right child, the left child of n's sibling is red
 *
 * @param {Node} n - The input node.
 */
export function delete_case6 ( n ) {

    const s = sibling( n ) ;

	/**
	 * Increment the black height of all root-leaf paths going through n by
	 * rotating at n's parent. This decrements the black height of all
	 * root-leaft paths going through n's sibling's right child.
     * We can repaint n's sibling's right child in black to fix this.
     * We are done.
	 *
	 *           ?                          ?
	 *        /     \                     /   \
	 *      >B        B                 B       B
	 *      / \      / \               / \     / \
	 *     -   -   =     R     -->   >B   =   =   B
	 *                  / \          / \         / \
	 *                 =   B        -   -       -   -
	 *                    / \
	 *                   -   -
	 */

    s.color = n.parent.color ;
    n.parent.color = BLACK ;

    if ( n === n.parent.left ) {
        s.right.color = BLACK ;
        rotate_left( n.parent ) ;
    }

    // symmetric case
    else {
        s.left.color = BLACK ;
        rotate_right( n.parent ) ;
    }

}
