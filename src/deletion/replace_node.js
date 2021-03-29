import assert from 'assert';
import {Node} from '../adt/Node.js';
import {Leaf} from '../adt/Leaf.js';

/**
 * Replaces node <code>A</code> by node <code>B</code>.
 *
 * @param {Node} A - The node to replace.
 * @param {Node|Leaf} B - The replacement node.
 */
export const replace_node = (A, B) => {
	assert(A instanceof Node);
	assert(B instanceof Node || B instanceof Leaf);
	// We never apply delete_one_child on the root
	assert(A.parent !== null);

	if (A === A.parent.left) A.parent.left = B;
	else A.parent.right = B;

	B.parent = A.parent;
};
