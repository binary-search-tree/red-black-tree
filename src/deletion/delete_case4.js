import assert from 'assert';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import Node from '../types/Node.js';
import sibling from '../family/sibling.js';

import delete_case5 from './delete_case5.js';

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *   - n's sibling is black
 *   - n's parent and n's sibling's children cannot all be black
 *
 * @param {Node} n - The input node.
 */
const delete_case4 = (n) => {
	assert(n instanceof Node);
	assert(n._color === BLACK);
	assert(n.parent !== null);
	const s = sibling(n);
	assert(s instanceof Node);
	assert(s._color === BLACK);
	assert(
		n.parent._color === RED ||
			s.left?._color === RED ||
			s.right?._color === RED,
	);

	/**
	 * If n's parent is red and n's sibling's children are black, then swap n's
	 * parent and n's sibling color. All root-leaf paths going through n have
	 * now a black height of b. All other root-leaf paths have their black
	 * height unchanged. Red-black properties are respected. We are done.
	 *
	 *           R                       B
	 *         /   \                  /     \
	 *      >B       B              >B        R
	 *      / \     / \     -->     / \      / \
	 *     -   -  B     B          -   -   B     B
	 *           / \   / \                / \   / \
	 *          -   - -   -              -   - -   -
	 */
	if (
		// The parent color test is always true when coming from case 2
		n.parent._color === RED &&
		(s.left === null || s.left._color === BLACK) &&
		(s.right === null || s.right._color === BLACK)
	) {
		s._color = RED;
		n.parent._color = BLACK;
	}

	// Otherwise, go to case 5.
	else delete_case5(n);
};

export default delete_case4;
