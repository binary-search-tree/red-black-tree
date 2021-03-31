import assert from 'assert';
import Node from '../types/Node.js';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import uncle from '../family/uncle.js';
import grandparent from '../family/grandparent.js';
import insert_case0 from './insert_case0.js';
import insert_case4 from './insert_case4.js';

/**
 * Preconditions:
 *   - n is red.
 *   - n's children are BLACK
 *   - n is not the root of the tree.
 *   - n's parent is red.
 *
 * @param {Node} n - The input node.
 */
const insert_case2 = (n) => {
	assert(n instanceof Node);
	assert(n._color === RED);
	assert(n.left === null || n.left._color === BLACK);
	assert(n.right === null || n.right._color === BLACK);
	assert(n.parent !== null);
	assert(n.parent._color === RED);
	const u = uncle(n);

	/**
	 * If n has a non-leaf uncle and this uncle is red then we simply
	 * repaint the parent and the uncle of n in black, the grandparent of
	 * n in red, then call insert_case0 on n's grandparent.
	 *
	 *             B                    >R
	 *           /   \                 /   \
	 *         R       R             B       B
	 *        / \     / \   -->     / \     / \
	 *      >R   -   -   -         R   -   -   -
	 *      / \                   / \
	 *     -   -                 -   -
	 */

	if (u !== null && u._color === RED) {
		n.parent._color = BLACK;
		u._color = BLACK;
		const g = grandparent(n);
		g._color = RED;
		insert_case0(g);
	} else insert_case4(n);
};

export default insert_case2;
