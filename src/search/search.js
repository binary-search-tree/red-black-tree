import assert from 'assert';

import Node from '../types/Node.js';

/**
 * Search for the first node whose key equals <code>key</code>.
 *
 * @param {Function} compare - The comparison function.
 * @param {Node} root - The root of the tree to scan.
 * @param {any} key - The key to search for.
 * @returns {Node}
 */
const search = (compare, root, key) => {
	assert(root instanceof Node);
	while (true) {
		const d = compare(key, root.key);

		if (d === 0) {
			return root;
		}

		root = d < 0 ? root.left : root.right;

		if (root === null) {
			return null;
		}
	}
};

export default search;
