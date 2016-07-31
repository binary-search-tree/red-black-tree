import { BLACK , RED } from '..' ;

import { replace_node } from './replace_node' ;
import { delete_case1 } from './delete_case1' ;

/**
 * Delete a node <code>n</code> that has at most a single non-leaf child.
 *
 * Precondition:
 *   - n has at most one non-leaf child.
 *   - if n has a non-leaf child, then it is its left child.
 *
 * @param {Node} n - The node to delete.
 */
export function delete_one_child ( n ) {

    // Precondition: n has at most one non-leaf child.
    // assert( n.right.isleaf() || n.left.isleaf());

    // const child = n.right.isleaf() ? n.left : n.right;
    // n.right is always a LEAF because either n is a subtree predecessor or it
    // is the only child of its parent by the red-black tree properties
    const child = n.left ;

    // replace n with its left child
    replace_node( n , child ) ;

    // If n is black, deleting it reduces the black-height of every path going
    // through it by 1.
    if ( n.color === BLACK ) {

        // We can easily fix this when its left child is an
        // internal red node: change the color of the left child to black and
        // replace n with it.
        if ( child.color === RED ) child.color = BLACK ;

        // Otherwise, there are more things to fix.
        else delete_case1( child ) ;

    }

    // else {
    //    If n is red then its child can only be black. Replacing n with its
    //    child suffices.
    // }

}
