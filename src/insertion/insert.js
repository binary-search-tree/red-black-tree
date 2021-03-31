import assert from 'assert';
import Node from '../types/Node.js';

/**
 * Walks the tree rooted at <code>A</code> down the only path that satisfies
 * the following property: if at a node <code>C</code> we make a left (resp.
 * right), then <code>B < C</code> (resp. <code>B >= C</code>). Once we hit the
 * end of the path, we can add node <code>B</code> at this position. By the
 * property of the path, the tree rooted at <code>A</code> is still a binary
 * search tree.
 * For our red-black tree, all that is left to do is fix the red-black tree
 * properties in case they have been violated by this insertion. This is fixed
 * by {@link insert_case0}.
 *
 * @param {Function} compare - The comparison function to use.
 * @param {Node} A - The root of the tree.
 * @param {Node} B - The node to insert.
 * @returns {Node} B - The node that has been inserted.
 */
const insert = (compare, A, B) => {
	while (true) {
		if (compare(B.key, A.key) < 0) {
			const node = A.left;

			if (node === null) {
				A.left = B;
				break;
			}

			assert(node instanceof Node);
			A = node;
		} else {
			const node = A.right;

			if (node === null) {
				A.right = B;
				break;
			}

			assert(node instanceof Node);
			A = node;
		}
	}

	B.parent = A;

	return B;
};

export default insert;
