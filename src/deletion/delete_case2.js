import assert from 'assert';

import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import sibling from '../family/sibling.js';
import Node from '../types/Node.js';

import delete_case0 from './delete_case0.js';
import delete_case3 from './delete_case3.js';

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *   - n's sibling is black
 *
 * @param {Node} n - The input node.
 * @return {Node} The root of the modified subtree.
 */
const delete_case2 = (n) => {
	assert(n instanceof Node);
	assert(n._color === BLACK);
	assert(n.parent !== null);
	const s = sibling(n);
	assert(s instanceof Node);
	assert(s._color === BLACK);

	/**
	 * If n's parent is black and n's sibling's children are black, then
	 * repaint n's sibling red. Now all root-leaf paths going through n's
	 * parent have a black height of b - 1. We recurse thus on n's parent.
	 *
	 *           B                      >B
	 *         /   \                  /     \
	 *      >B       B               B       R
	 *      / \     / \     -->     / \     / \
	 *     -   -  B     B          -   -  B     B
	 *           / \   / \               / \   / \
	 *          -   - -   -             -   - -   -
	 */
	if (
		n.parent._color === BLACK &&
		(s.left === null || s.left._color === BLACK) &&
		(s.right === null || s.right._color === BLACK)
	) {
		s._color = RED;
		return delete_case0(n.parent);
	}

	// Otherwise, go to case 3.
	return delete_case3(n);
};

export default delete_case2;
