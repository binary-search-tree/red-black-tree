import {delete_case2} from './delete_case2.js';

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *
 * @param {Node} n - The input node.
 */
export function delete_case1(n) {
	// If n is the root, there is nothing to do: all paths go through n, and n
	// is black.
	if (n.parent !== null) delete_case2(n);
}
