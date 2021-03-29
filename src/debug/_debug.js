import assert from 'assert';
import Node from '../adt/Node.js';
import Leaf from '../adt/Leaf.js';
import BLACK from '../color/BLACK.js';

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
	 * @param {Node|Leaf} root - The root of the tree.
	 * @returns {string}
	 */
	const debug = (root) => {
		assert(root instanceof Node || root instanceof Leaf);
		if (root.isLeaf()) {
			assert(root instanceof Leaf);
			return black('L');
		}

		assert(root instanceof Node);

		const repr = root._color === BLACK ? black(root.key) : red(root.key);

		return `(${debug(root.left)}, ${repr}, ${debug(root.right)})`;
	};

	return debug;
};

export default _debug;
