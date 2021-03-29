import assert from 'assert';
import {BLACK} from '../color/BLACK.js';
import {Node} from './Node.js';

/**
 * A black leaf node.
 *
 * @class
 * @param {Node} parent - The parent node in the tree.
 */
export function Leaf(parent) {
	assert(parent instanceof Node);
	/** @constant {number} The color of the node. */
	this._color = BLACK;
	/** @member {Node} The parent node. */
	this.parent = parent;
}

/**
 * Returns <code>true</code> if the <code>Leaf</code> object is a leaf. This
 * always returns <code>true</code>.
 *
 * @returns {Boolean}
 */
Leaf.prototype.isLeaf = function () {
	return true;
};
