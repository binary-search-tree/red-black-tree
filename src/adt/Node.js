import {Leaf} from './Leaf.js';

/**
 * An internal node. This node can be red or black.
 *
 * @constructor
 * @param {Number} color - The color of the node.
 * @param {Key} key - The key of the node.
 * @returns {Node}
 */
export function Node(color, key) {
	this._color = color;
	this.left = new Leaf(this);
	this.right = new Leaf(this);
	this.parent = null;
	this.key = key;
}

/**
 * Returns <code>true</code> if the <code>Node</code> object is a leaf. This
 * always returns <code>false</code>.
 *
 * @returns {Boolean}
 */
Node.prototype.isLeaf = function () {
	return false;
};
