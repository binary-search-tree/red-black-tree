import assert from 'assert';

import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import Node from '../types/Node.js';

import insert_case2 from './insert_case2.js';

/**
 * Preconditions:
 *   - n is red.
 *   - n's children are BLACK
 *   - n is not the root of the tree.
 *
 * @param {Node} n - The input node.
 * @return {Node} The root of the modified subtree.
 */
const insert_case1 = (n) => {
	assert(n instanceof Node);
	assert(n._color === RED);
	assert(n.left === null || n.left._color === BLACK);
	assert(n.right === null || n.right._color === BLACK);
	assert(n.parent !== null);

	/**
	 * If the parent of n is black then we have nothing to do.
	 *
	 *         B
	 *        / \
	 *      >R   -
	 *      / \
	 *     -   -
	 */
	return n.parent._color === BLACK ? n : insert_case2(n);
};

export default insert_case1;
