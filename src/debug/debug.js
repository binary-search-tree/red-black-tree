import {BLACK} from '../color/BLACK.js';

/**
 * Builds a debug function from color handlers.
 *
 * @param {Object} colors The colors to use.
 * @returns {Function} The debug function.
 */
export const _debug = ({red, black}) => {
	/**
	 * Recursively constructs a prettyprint string for the red-black tree rooted at
	 * <code>root</code>.
	 *
	 * @param {Node} root - The root of the tree.
	 * @returns {string}
	 */
	const debug = (root) => {
		if (root.isLeaf()) return black('L');

		const repr = root._color === BLACK ? black(root.key) : red(root.key);

		return `(${debug(root.left)}, ${repr}, ${debug(root.right)})`;
	};

	return debug;
};
