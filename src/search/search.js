/**
 * Search for the first node whose key equals <code>key</code>.
 *
 * @param {Function} compare - The comparison function.
 * @param {Node} root - The root of the tree to scan.
 * @param {Key} key - The key to search for.
 * @returns {Node}
 */
export function search(compare, root, key) {
	while (true) {
		const d = compare(key, root.key);

		if (d === 0) {
			return root;
		}

		root = d < 0 ? root.left : root.right;

		if (root.isleaf()) {
			return null;
		}
	}
}
