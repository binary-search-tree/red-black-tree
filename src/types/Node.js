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
	/** @member {Node} The left child */
	this.left = null;
	/** @member {Node} The right child */
	this.right = null;
	/** @member {Node} The parent node. */
	this.parent = null;
	/** @member {any} The key held by this node. */
	this.key = key;
}
