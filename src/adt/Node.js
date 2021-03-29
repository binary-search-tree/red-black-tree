import Leaf from './Leaf.js';

/**
 * An internal node. This node can be red or black.
 *
 * @class
 * @param {number} color - The color of the node.
 * @param {any} key - The key of the node.
 */
export default function Node(color, key) {
	/** @member {number} The color of the node. */
	this._color = color;
	/** @member {Node|Leaf} The left child */
	this.left = new Leaf(this);
	/** @member {Node|Leaf} The right child */
	this.right = new Leaf(this);
	/** @member {Node} The parent node. */
	this.parent = null;
	/** @member {any} The key held by this node. */
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
