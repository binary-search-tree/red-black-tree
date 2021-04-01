import assert from 'assert';
import BLACK from '../color/BLACK.js';
import Node from '../types/Node.js';
import delete_case1 from './delete_case1.js';

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *
 * @param {Node} n - The input node.
 * @return {Node} The root of the modified subtree.
 */
const delete_case0 = (n) => {
	assert(n instanceof Node);
	assert(n._color === BLACK);
	// If n is the root, there is nothing to do:
	//   - all paths go through n, and
	//   - n is black.
	return n.parent === null ? n : delete_case1(n);
};

export default delete_case0;
