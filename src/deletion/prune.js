import assert from 'assert';
import Node from '../types/Node.js';
import Leaf from '../types/Leaf.js';

/**
 * Prune subtree rooted at input node.
 *
 * @param {Node|Leaf} root - The leaf to delete.
 */
const prune = (root) => {
	assert(root instanceof Node || root instanceof Leaf);
	assert(root.parent !== null);

	if (root === root.parent.left) root.parent.left = null;
	else root.parent.right = null;
};

export default prune;
