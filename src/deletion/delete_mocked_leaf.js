import assert from 'assert';
import Leaf from '../types/Leaf.js';

/**
 * Delete leaf L.
 *
 * @param {Leaf} L - The leaf to delete.
 */
const delete_mocked_leaf = (L) => {
	assert(L instanceof Leaf);
	assert(L.parent !== null);

	if (L === L.parent.left) L.parent.left = null;
	else L.parent.right = null;
};

export default delete_mocked_leaf;
