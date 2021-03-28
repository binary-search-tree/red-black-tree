import {BLACK, RED, sibling} from '../index.js';

import {delete_case1} from './delete_case1.js';
import {delete_case4} from './delete_case4.js';

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *   - n's sibling is black
 *
 * @param {Node} n - The input node.
 */
export function delete_case3(n) {
	const s = sibling(n);

	/**
	 * If n's parent is black and n's sibling's children are black, then
	 * repaint n's sibling red. Now all root-leaft paths going through n's
	 * parent have a black height of b - 1. We recurse thus on n's parent.
	 *
	 *           B                      >B
	 *         /   \                  /     \
	 *      >B       B               B       R
	 *      / \     / \     -->    /   \    / \
	 *     -   -  B     B         -     - B     B
	 *           / \   / \               / \   / \
	 *          -   - -   -             -   - -   -
	 */
	if (
		n.parent.color === BLACK &&
		s.left.color === BLACK &&
		s.right.color === BLACK
	) {
		s.color = RED;
		delete_case1(n.parent);
	}

	// Otherwise, go to case 4.
	else delete_case4(n);
}
