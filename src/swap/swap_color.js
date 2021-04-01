import assert from 'assert';
import Node from '../types/Node.js';

/**
 * Swap colors of two arbitrary nodes.
 *
 *        -A        +B      ->      +A        -B
 *
 * @param {Node} A - The first node.
 * @param {Node} B - The second node.
 */

const swap_color = (A, B) => {
	assert(A instanceof Node);
	assert(B instanceof Node);

	const color = A._color;
	A._color = B._color;
	B._color = color;
};

export default swap_color;
