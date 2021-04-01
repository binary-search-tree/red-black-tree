import assert from 'assert';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import Node from '../types/Node.js';
import rotate_left from '../rotate/rotate_left.js';
import rotate_right from '../rotate/rotate_right.js';
import sibling from '../family/sibling.js';

import delete_case2 from './delete_case2.js';
import delete_case3 from './delete_case3.js';

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *
 * @param {Node} n - The input node.
 * @return {Node} The root of the modified subtree.
 */
const delete_case1 = (n) => {
	assert(n instanceof Node);
	assert(n._color === BLACK);
	assert(n.parent !== null);

	const s = sibling(n);
	assert(s instanceof Node);

	if (s._color === BLACK) {
		// If n's sibling is BLACK, go to case 2.
		return delete_case2(n);
	}

	/**
	 * Otherwise, prepare for and go to case 3.
	 *
	 *           B                      *B
	 *         /   \                  /     \
	 *      >B       R               R       B
	 *      / \     / \     -->    /   \    / \
	 *     -   -  B     B        >B     B  =   =
	 *           / \   / \       / \   / \
	 *          =   = =   =     -   - =   =
	 */
	n.parent._color = RED;
	s._color = BLACK;
	if (n === n.parent.left) rotate_left(n.parent);
	else rotate_right(n.parent);
	return delete_case3(n).parent;
};

export default delete_case1;
