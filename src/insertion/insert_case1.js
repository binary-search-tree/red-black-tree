import {BLACK} from '../color/BLACK.js';
import {insert_case2} from './insert_case2.js';

/**
 * Preconditions:
 *   - n is red.
 *
 * @param {Node} n - The input node.
 */
export function insert_case1(n) {
	/**
	 * If n is the root of the tree, paint it black and we are done.
	 *
	 *      >R
	 *      / \
	 *     -   -
	 */
	if (n.parent === null) n.color = BLACK;
	else insert_case2(n);
}
