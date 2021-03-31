import assert from 'assert';
import Node from './Node.js';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import predecessor from '../family/predecessor.js';
import insert from '../insertion/insert.js';
import insert_case1 from '../insertion/insert_case1.js';
import delete_one_child from '../deletion/delete_one_child.js';
import delete_no_child from '../deletion/delete_no_child.js';
import search from '../search/search.js';
import inordertraversal from '../traversal/inordertraversal.js';
import rangetraversal from '../traversal/rangetraversal.js';

/**
 * A RedBlackTree with key-only nodes.
 *
 */
export default class RedBlackTree {
	/**
	 * Constructs a new empty red-black tree.
	 *
	 * @param {Function} compare - The comparison function for node keys.
	 */
	constructor(compare) {
		assert(compare instanceof Function);
		/** @member {Function} The comparison function for node keys. */
		this.compare = compare;
		/** @member {Node} The root of the tree. */
		this.root = null;
	}

	/**
	 * Tells whether the tree is empty.
	 *
	 * @returns {boolean} true if empty, false otherwise.
	 */
	isEmpty() {
		return this.root === null;
	}

	/**
	 * Adds a key to the tree.
	 *
	 * @param {any} key - The key to add.
	 */
	add(key) {
		if (this.root === null) {
			this.root = new Node(BLACK, key);
		} else {
			const node = new Node(RED, key);
			insert(this.compare, this.root, node);
			insert_case1(node);
		}
	}

	/**
	 * Search for the input key in the tree.
	 * Returns the first node whose key equals the input key.
	 * If no such node exists, returns <code>null</code>.
	 *
	 * @param {any} key - The input key.
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
	 * @param {any} key - The input key.
	 * @returns {any}
	 */
	get(key) {
		const node = this._search(key);
		return node === null ? null : node.key;
	}

	/**
	 * Returns <code>true</code> if and only if the tree contains the input
	 * key.
	 *
	 * @param {any} key - The input key.
	 * @returns {boolean}
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
		assert(node instanceof Node);
		if (node.left !== null) {
			// Replace node's key with predecessor's key
			const pred = predecessor(node);
			node.key = pred.key;
			// Delete predecessor node
			// NOTE: this node can only have one non-leaf (left) child because
			// of red-black tree invariant.
			if (pred.left === null) {
				delete_no_child(pred);
			} else {
				delete_one_child(pred);
			}
		} else if (node.right !== null) {
			// Replace node's key with successor's key
			// NOTE: Since there is no left child, then there can only be one
			// right child by the red-black tree invariant.
			const succ = node.right;
			node.key = succ.key;
			// Delete successor node
			delete_no_child(succ);
		} else if (node === this.root) {
			this.root = null;
		} else {
			delete_no_child(node);
		}
	}

	/**
	 * Search for the first node of the tree whose key equals the input key
	 * (with {@link RedBlackTree#_search}), then delete that node
	 * (with {@link RedBlackTree#_delete}). If such a node is found and deleted
	 * then return <code>true</code>. Return <code>false</code> otherwise.
	 *
	 * @param {any} key - The input key.
	 * @returns {boolean} - Whether the key existed in the tree before removal.
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
	 * @param {any} left - The left bound of the interval.
	 * @param {any} right - The right bound of the interval.
	 * @returns {IterableIterator}
	 */
	*range(left, right) {
		if (this.root !== null)
			yield* rangetraversal(this.compare, this.root, left, right);
	}

	/**
	 * Returns an in order iterator over the keys of the tree.
	 *
	 * @returns {IterableIterator}
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
	 * Constructs an empty red-black tree.
	 *
	 * @param {Function} compare - The comparison function to use.
	 * @returns {RedBlackTree}
	 */
	static empty(compare) {
		return new RedBlackTree(compare);
	}

	/**
	 * Constructs a red-black tree from an input iterable.
	 *
	 * @param {Function} compare - The comparison function to use.
	 * @param {Iterable} iterable - The input iterable.
	 * @returns {RedBlackTree}
	 */
	static from(compare, iterable) {
		const tree = new RedBlackTree(compare);

		for (const element of iterable) tree.add(element);

		return tree;
	}
}
