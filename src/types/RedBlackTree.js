import assert from 'assert';
import Node from './Node.js';
import BLACK from '../color/BLACK.js';
import RED from '../color/RED.js';
import predecessor from '../family/predecessor.js';
import insert from '../insertion/insert.js';
import insert_case2 from '../insertion/insert_case2.js';
import delete_one_child from '../deletion/delete_one_child.js';
import delete_no_child from '../deletion/delete_no_child.js';
import search from '../search/search.js';
import inordertraversal from '../traversal/inordertraversal.js';
import rangetraversal from '../traversal/rangetraversal.js';
import replace_node from '../deletion/replace_node.js';
import swap_non_adjacent from '../swap/swap_non_adjacent.js';
import swap_left from '../swap/swap_left.js';

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
	 * @return {Node} The newly added node.
	 */
	add(key) {
		if (this.root === null) {
			this.root = new Node(BLACK, key);
			return this.root;
		}

		const node = new Node(RED, key);
		insert(this.compare, this.root, node);
		assert(node.parent !== null);
		if (node.parent._color !== BLACK) {
			const subtree = insert_case2(node);
			if (subtree.parent === null) {
				this.root = subtree;
			}
		}

		return node;
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
		return node === null ? undefined : node.key;
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
	unlink(node) {
		assert(node instanceof Node);
		if (node.left !== null) {
			// Swap node with its predecessor
			const pred = predecessor(node);
			// Delete predecessor node
			// NOTE: this node can have at most one non-leaf (left) child
			// because of red-black tree invariant.
			assert(pred.right === null);
			if (pred === node.left) {
				swap_left(node);
			} else {
				swap_non_adjacent(node, pred);
			}

			assert(node.right === null);
			if (node.left === null) {
				const subtree = delete_no_child(node);
				if (subtree.parent === null) {
					this.root = subtree;
				} else if (pred.parent === null) {
					assert(node === this.root);
					this.root = pred;
				}
			} else {
				delete_one_child(node);
				if (pred.parent === null) {
					assert(node === this.root);
					this.root = pred;
				}
			}
		} else if (node.right !== null) {
			/**
			 * Swap node with its successor.
			 *
			 * NOTE: Since pred is a leaf, there can only by one node in the
			 * right subtree, succ, which is necessarily red, hence
			 * node is black.
			 *
			 * The configuration:
			 *
			 *      (A)                 (B)                  (C)
			 *
			 *    p                   p                    p
			 *    |                   |                    |
			 *   node (BLACK)        succ (BLACK)        succ (BLACK)
			 *   / \                 / \                  / \
			 *  -  succ (RED)  ->   -  node (RED)  ->    -   -
			 *     / \                 / \
			 *    -   -               -   -
			 *
			 * NOTE: We take a shortcut and go directly from (A) to (C)
			 */
			assert(node.left === null);
			const succ = node.right;
			assert(succ._color === RED);
			succ._color = BLACK;
			if (node === this.root) {
				assert(node.parent === null);
				succ.parent = null;
				this.root = succ;
			} else {
				replace_node(node, succ);
			}
		} else if (node === this.root) {
			assert(node.parent === null);
			assert(node._color === BLACK);
			assert(node.left === null);
			assert(node.right === null);
			this.root = null;
		} else {
			assert(node.left === null);
			assert(node.right === null);
			const subtree = delete_no_child(node);
			if (subtree.parent === null) {
				this.root = subtree;
			}
		}
	}

	/**
	 * Search for the first node of the tree whose key equals the input key
	 * (with {@link RedBlackTree#_search}), then delete that node
	 * (with {@link RedBlackTree#unlink}). If such a node is found and deleted
	 * then return <code>true</code>. Return <code>false</code> otherwise.
	 *
	 * @param {any} key - The input key.
	 * @returns {boolean} - Whether the key existed in the tree before removal.
	 */
	remove(key) {
		const node = this._search(key);
		if (node === null) return false;

		this.unlink(node);
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
