import {BLACK} from '../color/BLACK.js';
import {insert_case3} from './insert_case3.js';

/**
 * Preconditions:
 *   - n is red.
 *   - n is not the root of the tree.
 *
 * @param {Node} n - The input node.
 */
export const insert_case2 = (n) => {
	/**
	 * If the parent of n is black then we have nothing to do.
	 *
	 *         B
	 *        / \
	 *      >R   -
	 *      / \
	 *     -   -
	 */
	if (n.parent._color === BLACK) return;

	insert_case3(n);
};
