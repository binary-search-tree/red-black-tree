
import { BLACK , RED , replace_node } from '..' ;

import { delete_case1 } from './delete_case1' ;

export function delete_one_child ( n ) {

    // Precondition: n has at most one non-leaf child.
    // assert( n.right.isleaf() || n.left.isleaf());

    // const child = n.right.isleaf() ? n.left : n.right;
    // n.right is always a LEAF because either n is a subtree predecessor or it
    // is the only child of its parent by the red-black tree properties
    const child = n.left ;

    replace_node(n, child);

    if (n.color === BLACK) {
        if (child.color === RED) child.color = BLACK;
        else delete_case1(child);
    }

    //else {
    //    If n is RED then its child can only be BLACK. Replacing n with its
    //    child suffices.
    //}

}
