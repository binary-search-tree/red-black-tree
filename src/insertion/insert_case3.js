import {BLACK, RED} from '../color/index.js';
import {uncle, grandparent} from '../family/index.js';
import {insert_case1} from './insert_case1.js';
import {insert_case4} from './insert_case4.js';

/**
 * Preconditions:
 *   - n is red.
 *   - n is not the root of the tree.
 *   - n's parent is red.
 *
 * @param {Node} n - The input node.
 */
export const insert_case3 = (n) => {
	const u = uncle(n);

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

	if (u !== null && u._color === RED) {
		n.parent._color = BLACK;
		u._color = BLACK;
		const g = grandparent(n);
		g._color = RED;
		insert_case1(g);
	} else insert_case4(n);
};
