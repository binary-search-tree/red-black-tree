import assert from 'assert';
import Node from '../types/Node.js';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import rotate_left from '../rotate/rotate_left.js';
import rotate_right from '../rotate/rotate_right.js';
import grandparent from '../family/grandparent.js';

/**
 * Preconditions:
 *   - n is red.
 *   - n's children are BLACK
 *   - n is not the root of the tree.
 *   - n's parent is red.
 *   - n's uncle is black.
 *   - the path from n to its grandparent makes a left-left or right-right.
 *
 * @param {Node} n - The input node.
 */
const insert_case5 = (n) => {
	assert(n instanceof Node);
	assert(n._color === RED);
	assert(n.left._color === BLACK);
	assert(n.right._color === BLACK);
	assert(n.parent !== null);
	assert(n.parent._color === RED);
	const g = grandparent(n);

	// Repaint n's parent black, n's grandparent red
	n.parent._color = BLACK;
	g._color = RED;

	if (n === n.parent.left) {
		/**
		 * If the path from g to n makes a left-left, {@link rotate_right} at g.
		 * We are done.
		 *
		 *             R                     B
		 *           /   \                 /   \
		 *         B       B            >R       R
		 *        / \     / \   -->     / \     / \
		 *      >R   =   -   -         =   =   =   B
		 *      / \                               / \
		 *     =   =                             -   -
		 */
		assert(g.left instanceof Node);
		assert(n === g.left.left);
		assert(g.right._color === BLACK);
		rotate_right(g);
	} else {
		/**
		 * If the path from g to n makes a right-right, {@link rotate_left} at g.
		 * We are done.
		 *
		 *             R                     B
		 *           /   \                 /   \
		 *         B       B             R      >R
		 *        / \     / \   -->     / \     / \
		 *       -   -   =  >R         B   =   =   =
		 *                  / \       / \
		 *                 =   =     -   -
		 */
		assert(g.right instanceof Node);
		assert(n === g.right.right);
		assert(g.left._color === BLACK);
		rotate_left(g);
	}
};

export default insert_case5;
