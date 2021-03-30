import assert from 'assert';
import Node from '../types/Node.js';

/**
 * Traverses the tree rooted at <code>node</code> in order.
 *
 * @param {Node} node - The root of the tree.
 * @returns {IterableIterator}
 */
export default function* inordertraversal(node) {
	assert(node instanceof Node);
	if (!node.left.isLeaf()) {
		// Yield the nodes on the left recursively. Those nodes are all smaller
		// than (or equal to) the current node by the binary search tree
		// properties.
		assert(node.left instanceof Node);
		yield* inordertraversal(node.left);
	}

	// Yield the current node.
	yield node.key;

	if (!node.right.isLeaf()) {
		// Yield the nodes on the right recursively. Those nodes are all larger
		// than (or equal to) the current node by the binary search tree
		// properties.
		assert(node.right instanceof Node);
		yield* inordertraversal(node.right);
	}
}
