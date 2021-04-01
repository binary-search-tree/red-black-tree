import assert from 'assert';
import Node from '../types/Node.js';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import insert_case1 from './insert_case1.js';

/**
 * Preconditions:
 *   - n is red.
 *   - n's children are BLACK
 *
 * @param {Node} n - The input node.
 * @return {Node} The root of the modified subtree.
 */
const insert_case0 = (n) => {
	assert(n instanceof Node);
	assert(n._color === RED);
	assert(n.left._color === BLACK);
	assert(n.right._color === BLACK);
	/**
	 * If n is the root of the tree, paint it black and we are done.
	 *
	 *      >R
	 *      / \
	 *     -   -
	 */
	if (n.parent === null) {
		n._color = BLACK;
		return n;
	}

	return insert_case1(n);
};

export default insert_case0;
