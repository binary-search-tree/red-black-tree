import {BLACK, RED} from '../color/index.js';
import {rotate_left, rotate_right} from '../rotate/index.js';
import {grandparent} from '../family/grandparent.js';

/**
 * Preconditions:
 *   - n is red.
 *   - n is not the root of the tree.
 *   - n's parent is red.
 *   - n's uncle is black.
 *   - the path from n to its grandparent makes a left-left or right-right.
 *
 * @param {Node} n - The input node.
 */
export const insert_case5 = (n) => {
	const g = grandparent(n);

	// Repaint n's parent black, n's grandparent red
	n.parent._color = BLACK;
	g._color = RED;

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
	if (n === n.parent.left) rotate_right(g);
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
	 */ else rotate_left(g);
};
