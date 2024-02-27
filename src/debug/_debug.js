import assert from 'assert';

import BLACK from '../color/BLACK.js';
import Node from '../types/Node.js';

/**
 * Builds a debug function from color handlers.
 *
 * @param {Object} colors The colors to use.
 * @returns {Function} The debug function.
 */
const _debug = ({red, black}) => {
	/**
	 * Recursively constructs a prettyprint string for the red-black tree rooted at
	 * <code>root</code>.
	 *
	 * @param {Node} root - The root of the tree.
	 * @returns {string}
	 */
	const debug = (root) => {
		if (root === null) return black('L');

		assert(root instanceof Node);

		const repr = root._color === BLACK ? black(root.key) : red(root.key);

		return `(${debug(root.left)}, ${repr}, ${debug(root.right)})`;
	};

	return debug;
};

export default _debug;
