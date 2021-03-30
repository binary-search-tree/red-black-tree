import assert from 'assert';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import Node from '../types/Node.js';
import Leaf from '../types/Leaf.js';
import rotate_left from '../rotate/rotate_left.js';
import rotate_right from '../rotate/rotate_right.js';
import sibling from '../family/sibling.js';

import delete_case3 from './delete_case3.js';
import delete_case4 from './delete_case4.js';

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *
 * @param {Node|Leaf} n - The input node.
 */
const delete_case2 = (n) => {
	assert(n instanceof Node || n instanceof Leaf);
	assert(n._color === BLACK);
	assert(n.parent !== null);

	const s = sibling(n);

	/**
	 * If n's sibling is red, prepare for and go to case 4.
	 *
	 *           B                       B
	 *         /   \                  /     \
	 *      >B       R               R       B
	 *      / \     / \     -->    /   \    / \
	 *     -   -  B     B        >B     B  =   =
	 *           / \   / \       / \   / \
	 *          =   = =   =     -   - =   =
	 */
	if (s._color === RED) {
		n.parent._color = RED;
		s._color = BLACK;
		if (n === n.parent.left) rotate_left(n.parent);
		else rotate_right(n.parent);
		delete_case4(n);
	}

	// Otherwise, go to case 3.
	else delete_case3(n);
};

export default delete_case2;
