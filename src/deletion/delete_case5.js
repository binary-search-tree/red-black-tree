import assert from 'assert';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import Node from '../types/Node.js';
import rotate_left from '../rotate/rotate_left.js';
import rotate_right from '../rotate/rotate_right.js';
import sibling from '../family/sibling.js';

import delete_case6 from './delete_case6.js';

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *   - n's sibling is black
 *   - at least one of n's sibling's children is red
 *
 * @param {Node} n - The input node.
 */
const delete_case5 = (n) => {
	assert(n instanceof Node);
	assert(n._color === BLACK);
	assert(n.parent !== null);
	const s = sibling(n);
	assert(s instanceof Node);
	assert(s._color === BLACK);
	assert(s.left?._color === RED || s.right?._color === RED);

	// The following statements just force the red n's sibling child to be on
	// the left of the left of the parent, or right of the right, so case 6
	// will rotate correctly.

	/**
	 *           ?                       ?
	 *         /   \                  /     \
	 *      >B       B              >B        B
	 *      / \     / \     -->     / \      / \
	 *     -   -  R     B          -   -   =     R
	 *           / \   / \                      / \
	 *          =   = -   -                    =   B
	 *                                            / \
	 *                                           -   -
	 */
	if (n === n.parent.left && (s.right === null || s.right._color === BLACK)) {
		s._color = RED;
		s.left._color = BLACK;
		rotate_right(s);
	} else if (
		n === n.parent.right &&
		(s.left === null || s.left._color === BLACK)
	) {
		/**
		 *           ?                       ?
		 *         /   \                  /     \
		 *       B      >B               B       >B
		 *      / \     / \     -->     / \      / \
		 *    B     R  -   -          R     =   -   -
		 *   / \   / \               / \
		 *  -   - =   =             B   =
		 *                         / \
		 *                        -   -
		 */
		s._color = RED;
		s.right._color = BLACK;
		rotate_left(s);
	}

	delete_case6(n);
};

export default delete_case5;
