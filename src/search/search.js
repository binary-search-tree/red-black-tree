import assert from 'assert';
import {Node} from '../adt/Node.js';

/**
 * Search for the first node whose key equals <code>key</code>.
 *
 * @param {Function} compare - The comparison function.
 * @param {Node} root - The root of the tree to scan.
 * @param {any} key - The key to search for.
 * @returns {Node}
 */
export const search = (compare, root, key) => {
	assert(root instanceof Node);
	while (true) {
		const d = compare(key, root.key);

		if (d === 0) {
			return root;
		}

		const child = d < 0 ? root.left : root.right;

		if (child.isLeaf()) {
			return null;
		}

		assert(child instanceof Node);
		root = child;
	}
};
