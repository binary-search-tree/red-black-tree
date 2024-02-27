import assert from 'assert';

import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import rotate_left from '../rotate/rotate_left.js';
import rotate_right from '../rotate/rotate_right.js';
import Node from '../types/Node.js';

import insert_case4 from './insert_case4.js';

/**
 * Preconditions:
 *   - n is red.
 *   - n's children are BLACK
 *   - n is not the root of the tree.
 *   - n's parent is red.
 *   - n's uncle is black.
 *
 * Here we fix the input subtree to pass the preconditions of {@link insert_case4}.
 *
 * @param {Node} n - The input node.
 * @return {Node} The root of the modified subtree.
 */
const insert_case3 = (n) => {
	assert(n instanceof Node);
	assert(n._color === RED);
	assert(n.left === null || n.left._color === BLACK);
	assert(n.right === null || n.right._color === BLACK);
	assert(n.parent !== null);
	assert(n.parent._color === RED);
	const p = n.parent;
	const g = p.parent;

	if (n === p.right && p === g.left) {
		/**
		 * If the path from g to n makes a left-right, change it to a left-left
		 * with {@link rotate_left}. Then call {@link insert_case4} on the old
		 * parent of n.
		 *
		 *             B                     B
		 *           /   \                 /   \
		 *         R       B            >R       B
		 *        / \     / \   -->     / \     / \
		 *       =  >R   -   -         R   =   -   -
		 *          / \               / \
		 *         =   =             =   =
		 */
		rotate_left(p);

		/**
		 * Rotate_left can be the below because of already having *g =  grandparent(n)
		 *
		 * saved_p=g.left, *saved_left_n=n.left;
		 * g.left=n;
		 * n.left=saved_p;
		 * saved_p.right=saved_left_n;
		 *
		 * and modify the parent's nodes properly
		 */

		// n = n.left; /!\ need to fix rotate, so that we can safely reference a node
		return insert_case4(p);
	}

	if (n === p.left && p === g.right) {
		/**
		 * If the path from g to n makes a right-left, change it to a right-right
		 * with {@link rotate_right}. Then call {@link insert_case4} on the old
		 * parent of n.
		 *
		 *             B                     B
		 *           /   \                 /   \
		 *         B       R             B      >R
		 *        / \     / \   -->     / \     / \
		 *       -   -  >R   =         -   -   =   R
		 *              / \                       / \
		 *             =   =                     =   =
		 */
		rotate_right(p);

		/**
		 * Rotate_right can be the below to take advantage of already having *g =  grandparent(n)
		 *
		 * saved_p=g.right, *saved_right_n=n.right;
		 * g.right=n;
		 * n.right=saved_p;
		 * saved_p.left=saved_right_n;
		 *
		 */

		// n = n.right ;
		return insert_case4(p);
	}

	return insert_case4(n);
};

export default insert_case3;
