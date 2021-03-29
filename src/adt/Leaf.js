import {BLACK} from '../color/BLACK.js';

/**
 * A black leaf node.
 *
 * @constructor
 * @param {Node} parent - The parent node in the tree.
 * @returns {Leaf}
 */
export function Leaf(parent) {
	this._color = BLACK;
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
