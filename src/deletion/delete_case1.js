import assert from 'assert';
import {BLACK} from '../color/BLACK.js';
import {Node} from '../adt/Node.js';
import {Leaf} from '../adt/Leaf.js';
import {delete_case2} from './delete_case2.js';

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *
 * @param {Node|Leaf} n - The input node.
 */
export const delete_case1 = (n) => {
	assert(n instanceof Node || n instanceof Leaf);
	assert(n._color === BLACK);
	// If n is the root, there is nothing to do:
	//   - all paths go through n, and
	//   - n is black.
	if (n.parent !== null) delete_case2(n);
};
