import assert from 'assert';
import Node from '../types/Node.js';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import insert_case2 from './insert_case2.js';

/**
 * Preconditions:
 *   - n is red.
 *   - n's children are BLACK
 *
 * @param {Node} n - The input node.
 */
const insert_case1 = (n) => {
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
	if (n.parent === null) n._color = BLACK;
	else insert_case2(n);
};

export default insert_case1;
