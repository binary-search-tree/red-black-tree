import {Node} from './Node.js';
import {BLACK, RED} from '../color/index.js';
import {predecessor} from '../family/predecessor.js';
import {insert, insert_case2} from '../insertion/index.js';
import {delete_one_child} from '../deletion/index.js';
import {search} from '../search/index.js';
import {inordertraversal, rangetraversal} from '../traversal/index.js';

/**
 * A RedBlackTree with key-only nodes.
 *
 */
export class RedBlackTree {
	/**
	 * Constructs a new empty red-black tree.
	 *
	 * @param {Function} compare - The comparison function for node keys.
	 * @returns {RedBlackTree}
	 */
	constructor(compare) {
		this.compare = compare;
		this.root = null;
	}

	/**
	 * Adds a key to the tree.
	 *
	 * @param {Key} key - The key to add.
	 */
	add(key) {
		if (this.root === null) {
			this.root = new Node(BLACK, key);
		} else {
			const node = new Node(RED, key);
			insert(this.compare, this.root, node);
			insert_case2(node);
		}
	}

	/**
	 * Search for the input key in the tree.
	 * Returns the first node whose key equals the input key.
	 * If no such node exists, returns <code>null</code>.
	 *
	 * @param {Key} key - The input key.
	 * @returns {Node}
	 */
	_search(key) {
		if (this.root === null) return null;
		return search(this.compare, this.root, key);
	}

	/**
	 * Search for the input key in the tree. Returns the first node key found
	 * in this way (with {@link RedBlackTree#_search}. If no such key exists
	 * in the tree, returns <code>null</code>.
	 *
	 * @param {Key} key - The input key.
	 * @returns {Key}
	 */
	get(key) {
		const node = this._search(key);
		return node === null ? null : node.key;
	}

	/**
	 * Returns <code>true</code> if and only if the tree contains the input
	 * key.
	 *
	 * @param {Key} key - The input key.
	 * @returns {Boolean}
	 */
	has(key) {
		return this._search(key) !== null;
	}

	/**
	 * Deletes the input node from the tree.
	 *
	 * @param {Node} node - The input node to delete.
	 */
	_delete(node) {
		if (!node.left.isLeaf()) {
			// Replace node's key with predecessor's key
			const pred = predecessor(node);
			node.key = pred.key;
			// Delete predecessor node
			// note: this node can only have one non-leaf child
			//       because the tree is a red-black tree
			delete_one_child(pred);
		} else if (!node.right.isLeaf()) {
			// Replace node's key with successor's key
			// If there is no left child, then there can only be one right
			// child.
			const succ = node.right;
			node.key = succ.key;
			// Delete successor node
			// note: this node can only have one non-leaf child
			//       because the tree is a red-black tree
			delete_one_child(succ);
		} else if (node === this.root) {
			this.root = null;
		} else {
			delete_one_child(node);
		}
	}

	/**
	 * Search for the first node of the tree whose key equals the input key
	 * (with {@link RedBlackTree#_search}), then delete that node
	 * (with {@link RedBlackTree#_delete}). If such a node is found and deleted
	 * then return <code>true</code>. Return <code>false</code> otherwise.
	 *
	 * @param {Key} key - The input key.
	 * @returns {Boolean} - Whether the key existed in the tree before removal.
	 */
	remove(key) {
		const node = this._search(key);
		if (node === null) return false;

		this._delete(node);
		return true;
	}

	/**
	 * Returns an in order iterator over the keys of the tree that lie in the
	 * interval [left, right[.
	 * @param {Key} left - The left bound of the interval.
	 * @param {Key} right - The right bound of the interval.
	 * @returns {Iterator}
	 */
	*range(left, right) {
		if (this.root !== null)
			yield* rangetraversal(this.compare, this.root, left, right);
	}

	/**
	 * Returns an in order iterator over the keys of the tree.
	 *
	 * @returns {Iterator}
	 */
	*items() {
		if (this.root !== null) yield* inordertraversal(this.root);
	}

	/**
	 * Same as {@link RedBlackTree#items}.
	 */
	[Symbol.iterator]() {
		return this.items();
	}

	/**
	 * Constructs a red-black tree from an input iterable.
	 *
	 * @param {Function} compare - The comparison function to use.
	 * @param {Iterbale} iterable - The input iterable.
	 * @returns {RedBlackTree}
	 */
	static from(compare, iterable) {
		const tree = new RedBlackTree(compare);

		for (const element of iterable) tree.add(element);

		return tree;
	}
}
