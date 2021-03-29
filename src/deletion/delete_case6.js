import {BLACK} from '../color/BLACK.js';
import {rotate_left, rotate_right} from '../rotate/index.js';
import {sibling} from '../family/sibling.js';

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
export const delete_case6 = (n) => {
	const s = sibling(n);

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

	s._color = n.parent._color;
	n.parent._color = BLACK;

	if (n === n.parent.left) {
		s.right._color = BLACK;
		rotate_left(n.parent);
	}

	// Symmetric case
	else {
		s.left._color = BLACK;
		rotate_right(n.parent);
	}
};
