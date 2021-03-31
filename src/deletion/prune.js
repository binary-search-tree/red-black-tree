import assert from 'assert';
import Node from '../types/Node.js';

/**
 * Prune subtree rooted at input node.
 *
 * @param {Node} root - The root of the subtree to prune.
 */
const prune = (root) => {
	assert(root instanceof Node);
	assert(root.parent !== null);

	if (root === root.parent.left) root.parent.left = null;
	else root.parent.right = null;
};

export default prune;
