import assert from 'assert';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import Node from '../types/Node.js';
import rotate_left from '../rotate/rotate_left.js';
import rotate_right from '../rotate/rotate_right.js';
import sibling from '../family/sibling.js';

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
 * @return {Node} The root of the modified subtree.
 */
const delete_case5 = (n) => {
	assert(n instanceof Node);
	assert(n._color === BLACK);
	assert(n.parent !== null);
	const s = sibling(n);
	assert(s instanceof Node);
	assert(s._color === BLACK);

	/**
	 * Increment the black height of all root-leaf paths going through n by
	 * swapping the colors of n's parent and n's sibling and
	 * rotating at n's parent. This decrements the black height of all
	 * root-leaf paths going through n's sibling's right child.
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

	// Swap the color of the parent and the sibling.
	s._color = n.parent._color;
	n.parent._color = BLACK;

	if (n === n.parent.left) {
		assert(s.right._color === RED);
		s.right._color = BLACK;
		rotate_left(n.parent);
		return s;
	}

	// Symmetric case

	assert(s.left._color === RED);
	s.left._color = BLACK;
	rotate_right(n.parent);
	return s;
};

export default delete_case5;
