import assert from 'assert';
import Node from '../types/Node.js';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import rotate_left from '../rotate/rotate_left.js';
import rotate_right from '../rotate/rotate_right.js';
import grandparent from '../family/grandparent.js';
import insert_case5 from './insert_case5.js';

/**
 * Preconditions:
 *   - n is red.
 *   - n's children are BLACK
 *   - n is not the root of the tree.
 *   - n's parent is red.
 *   - n's uncle is black.
 *
 * Here we fix the input subtree to pass the preconditions of {@link insert_case5}.
 *
 * @param {Node} n - The input node.
 */
const insert_case4 = (n) => {
	assert(n instanceof Node);
	assert(n._color === RED);
	assert(n.left === null || n.left._color === BLACK);
	assert(n.right === null || n.right._color === BLACK);
	assert(n.parent !== null);
	assert(n.parent._color === RED);
	const g = grandparent(n);

	/**
	 * If the path from g to n makes a left-right, change it to a left-left
	 * with {@link rotate_left}. Then call {@link insert_case5} on the old
	 * parent of n.
	 *
	 *             B                     B
	 *           /   \                 /   \
	 *         R       B             R       B
	 *        / \     / \   -->     / \     / \
	 *       =  >R   -   -        >R   =   -   -
	 *          / \               / \
	 *         =   =             =   =
	 */

	if (n === n.parent.right && n.parent === g.left) {
		rotate_left(n.parent);

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
	} else if (n === n.parent.left && n.parent === g.right) {
		/**
		 * If the path from g to n makes a right-left, change it to a right-right
		 * with {@link rotate_right}. Then call {@link insert_case5} on the old
		 * parent of n.
		 *
		 *             B                     B
		 *           /   \                 /   \
		 *         B       R             B       R
		 *        / \     / \   -->     / \     / \
		 *       -   -  >R   =         -   -   =  >R
		 *              / \                       / \
		 *             =   =                     =   =
		 */
		rotate_right(n.parent);

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
	}

	insert_case5(n);
};

export default insert_case4;
