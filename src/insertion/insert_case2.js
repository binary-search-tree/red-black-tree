import assert from 'assert';
import Node from '../adt/Node.js';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import insert_case3 from './insert_case3.js';

/**
 * Preconditions:
 *   - n is red.
 *   - n is not the root of the tree.
 *
 * @param {Node} n - The input node.
 */
const insert_case2 = (n) => {
	assert(n instanceof Node);
	assert(n._color === RED);
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
	if (n.parent._color === BLACK) return;

	insert_case3(n);
};

export default insert_case2;
