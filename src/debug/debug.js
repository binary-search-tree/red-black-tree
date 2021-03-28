import {BLACK} from '../color/BLACK.js';

/**
 * Recursively constructs a prettyprint string for the red-black tree rooted at
 * <code>root</code>.
 *
 * @param {Node} root - The root of the tree.
 * @returns {String}
 */
export function _debug({red, black}) {
	const debug = (root) => {
		if (root.isleaf()) return black('L');

		const repr = root.color === BLACK ? black(root.key) : red(root.key);

		return `(${debug(root.left)}, ${repr}, ${debug(root.right)})`;
	};

	return debug;
}
