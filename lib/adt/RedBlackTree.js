'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RedBlackTree = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node = require('./Node');

var _ = require('..');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A RedBlackTree with key-only nodes.
 *
 */
var RedBlackTree = exports.RedBlackTree = function () {

	/**
  * Constructs a new empty red-black tree.
  *
  * @param {Function} compare - The comparison function for node keys.
  * @returns {RedBlackTree}
  */
	function RedBlackTree(compare) {
		_classCallCheck(this, RedBlackTree);

		this.compare = compare;
		this.root = null;
	}

	/**
  * Adds a key to the tree.
  *
  * @param {Key} key - The key to add.
  */


	_createClass(RedBlackTree, [{
		key: 'add',
		value: function add(key) {
			if (this.root === null) {
				this.root = new _Node.Node(_.BLACK, key);
			} else {
				var node = new _Node.Node(_.RED, key);
				(0, _.insert)(this.compare, this.root, node);
				(0, _.insert_case2)(node);
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

	}, {
		key: '_search',
		value: function _search(key) {
			if (this.root === null) return null;
			return (0, _.search)(this.compare, this.root, key);
		}

		/**
   * Search for the input key in the tree. Returns the first node key found
   * in this way (with {@link RedBlackTree#_search}. If no such key exists
   * in the tree, returns <code>null</code>.
   *
   * @param {Key} key - The input key.
   * @returns {Key}
   */

	}, {
		key: 'get',
		value: function get(key) {
			var node = this._search(key);
			return node === null ? null : node.key;
		}

		/**
   * Returns <code>true</code> if and only if the tree contains the input
   * key.
   *
   * @param {Key} key - The input key.
   * @returns {Boolean}
   */

	}, {
		key: 'has',
		value: function has(key) {
			return this._search(key) !== null;
		}

		/**
   * Deletes the input node from the tree.
   *
   * @param {Node} node - The input node to delete.
   */

	}, {
		key: '_delete',
		value: function _delete(node) {

			if (!node.left.isleaf()) {
				// replace node's key with predecessor's key
				var pred = (0, _.predecessor)(node);
				node.key = pred.key;
				// delete predecessor node
				// note: this node can only have one non-leaf child
				//       because the tree is a red-black tree
				(0, _.delete_one_child)(pred);
			} else if (!node.right.isleaf()) {
				// replace node's key with successor's key
				// If there is no left child, then there can only be one right
				// child.
				var succ = node.right;
				node.key = succ.key;
				// delete successor node
				// note: this node can only have one non-leaf child
				//       because the tree is a red-black tree
				(0, _.delete_one_child)(succ);
			} else if (node === this.root) {
				this.root = null;
			} else {
				(0, _.delete_one_child)(node);
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

	}, {
		key: 'remove',
		value: function remove(key) {

			var node = this._search(key);
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

	}, {
		key: 'range',
		value: regeneratorRuntime.mark(function range(left, right) {
			return regeneratorRuntime.wrap(function range$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (!(this.root !== null)) {
								_context.next = 2;
								break;
							}

							return _context.delegateYield((0, _.rangetraversal)(this.compare, this.root, left, right), 't0', 2);

						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, range, this);
		})

		/**
   * Returns an in order iterator over the keys of the tree.
   *
   * @returns {Iterator}
   */

	}, {
		key: 'items',
		value: regeneratorRuntime.mark(function items() {
			return regeneratorRuntime.wrap(function items$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (!(this.root !== null)) {
								_context2.next = 2;
								break;
							}

							return _context2.delegateYield((0, _.inordertraversal)(this.root), 't0', 2);

						case 2:
						case 'end':
							return _context2.stop();
					}
				}
			}, items, this);
		})

		/**
   * Same as {@link RedBlackTree#items}.
   */

	}, {
		key: Symbol.iterator,
		value: function value() {

			return this.items();
		}

		/**
   * Constructs a red-black tree from an input iterable.
   *
   * @param {Function} compare - The comparison function to use.
   * @param {Iterbale} iterable - The input iterable.
   * @returns {RedBlackTree}
   */

	}], [{
		key: 'from',
		value: function from(compare, iterable) {

			var tree = new RedBlackTree(compare);

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var element = _step.value;
					tree.add(element);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return tree;
		}
	}]);

	return RedBlackTree;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZHQvUmVkQmxhY2tUcmVlLmpzIl0sIm5hbWVzIjpbIlJlZEJsYWNrVHJlZSIsImNvbXBhcmUiLCJyb290Iiwia2V5Iiwibm9kZSIsIl9zZWFyY2giLCJsZWZ0IiwiaXNsZWFmIiwicHJlZCIsInJpZ2h0Iiwic3VjYyIsIl9kZWxldGUiLCJTeW1ib2wiLCJpdGVyYXRvciIsIml0ZW1zIiwiaXRlcmFibGUiLCJ0cmVlIiwiZWxlbWVudCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFPQTs7OztJQUlhQSxZLFdBQUFBLFk7O0FBRVo7Ozs7OztBQU1BLHVCQUFjQyxPQUFkLEVBQXdCO0FBQUE7O0FBRXZCLE9BQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtDLElBQUwsR0FBWSxJQUFaO0FBRUE7O0FBRUQ7Ozs7Ozs7OztzQkFLTUMsRyxFQUFNO0FBQ1gsT0FBSyxLQUFLRCxJQUFMLEtBQWMsSUFBbkIsRUFBMEI7QUFDekIsU0FBS0EsSUFBTCxHQUFZLHdCQUFrQkMsR0FBbEIsQ0FBWjtBQUNBLElBRkQsTUFHSztBQUNKLFFBQU1DLE9BQU8sc0JBQWdCRCxHQUFoQixDQUFiO0FBQ0Esa0JBQVEsS0FBS0YsT0FBYixFQUF1QixLQUFLQyxJQUE1QixFQUFtQ0UsSUFBbkM7QUFDQSx3QkFBY0EsSUFBZDtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OzBCQVFVRCxHLEVBQU07QUFDZixPQUFLLEtBQUtELElBQUwsS0FBYyxJQUFuQixFQUEwQixPQUFPLElBQVA7QUFDMUIsVUFBTyxjQUFRLEtBQUtELE9BQWIsRUFBdUIsS0FBS0MsSUFBNUIsRUFBbUNDLEdBQW5DLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7c0JBUU1BLEcsRUFBTTtBQUNYLE9BQU1DLE9BQU8sS0FBS0MsT0FBTCxDQUFjRixHQUFkLENBQWI7QUFDQSxVQUFPQyxTQUFTLElBQVQsR0FBZ0IsSUFBaEIsR0FBdUJBLEtBQUtELEdBQW5DO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7c0JBT01BLEcsRUFBTTtBQUNYLFVBQU8sS0FBS0UsT0FBTCxDQUFjRixHQUFkLE1BQXdCLElBQS9CO0FBQ0E7O0FBRUQ7Ozs7Ozs7OzBCQUtVQyxJLEVBQU87O0FBRWhCLE9BQUssQ0FBQ0EsS0FBS0UsSUFBTCxDQUFVQyxNQUFWLEVBQU4sRUFBMkI7QUFDMUI7QUFDQSxRQUFNQyxPQUFPLG1CQUFhSixJQUFiLENBQWI7QUFDQUEsU0FBS0QsR0FBTCxHQUFXSyxLQUFLTCxHQUFoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUFrQkssSUFBbEI7QUFDQSxJQVJELE1BVUssSUFBSyxDQUFDSixLQUFLSyxLQUFMLENBQVdGLE1BQVgsRUFBTixFQUE0QjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxRQUFNRyxPQUFPTixLQUFLSyxLQUFsQjtBQUNBTCxTQUFLRCxHQUFMLEdBQVdPLEtBQUtQLEdBQWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQWtCTyxJQUFsQjtBQUNBLElBVkksTUFZQSxJQUFLTixTQUFTLEtBQUtGLElBQW5CLEVBQTBCO0FBQzlCLFNBQUtBLElBQUwsR0FBWSxJQUFaO0FBQ0EsSUFGSSxNQUlBO0FBQ0osNEJBQWtCRSxJQUFsQjtBQUNBO0FBRUQ7O0FBRUQ7Ozs7Ozs7Ozs7Ozt5QkFTU0QsRyxFQUFNOztBQUVkLE9BQU1DLE9BQU8sS0FBS0MsT0FBTCxDQUFjRixHQUFkLENBQWI7QUFDQSxPQUFLQyxTQUFTLElBQWQsRUFBcUIsT0FBTyxLQUFQOztBQUVyQixRQUFLTyxPQUFMLENBQWNQLElBQWQ7QUFDQSxVQUFPLElBQVA7QUFFQTs7QUFFRDs7Ozs7Ozs7OztnREFPU0UsSSxFQUFPRyxLOzs7OzthQUVWLEtBQUtQLElBQUwsS0FBYyxJOzs7OztxQ0FBYyxzQkFBZ0IsS0FBS0QsT0FBckIsRUFBK0IsS0FBS0MsSUFBcEMsRUFBMkNJLElBQTNDLEVBQWtERyxLQUFsRCxDOzs7Ozs7Ozs7O0FBSWxDOzs7Ozs7Ozs7Ozs7O2FBT00sS0FBS1AsSUFBTCxLQUFjLEk7Ozs7O3NDQUFjLHdCQUFrQixLQUFLQSxJQUF2QixDOzs7Ozs7Ozs7O0FBSWxDOzs7OztPQUdDVSxPQUFPQyxROzBCQUFjOztBQUVyQixVQUFPLEtBQUtDLEtBQUwsRUFBUDtBQUVBOztBQUVEOzs7Ozs7Ozs7O3VCQU9jYixPLEVBQVVjLFEsRUFBVzs7QUFFbEMsT0FBTUMsT0FBTyxJQUFJaEIsWUFBSixDQUFrQkMsT0FBbEIsQ0FBYjs7QUFGa0M7QUFBQTtBQUFBOztBQUFBO0FBSWxDLHlCQUF1QmMsUUFBdkI7QUFBQSxTQUFZRSxPQUFaO0FBQWtDRCxVQUFLRSxHQUFMLENBQVVELE9BQVY7QUFBbEM7QUFKa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNbEMsVUFBT0QsSUFBUDtBQUVBIiwiZmlsZSI6IlJlZEJsYWNrVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZScgO1xuaW1wb3J0IHsgUkVEICwgQkxBQ0sgfSBmcm9tICcuLicgO1xuaW1wb3J0IHsgcHJlZGVjZXNzb3IgfSBmcm9tICcuLicgO1xuaW1wb3J0IHsgaW5zZXJ0ICwgaW5zZXJ0X2Nhc2UyIH0gZnJvbSAnLi4nIDtcbmltcG9ydCB7IGRlbGV0ZV9vbmVfY2hpbGQgfSBmcm9tICcuLicgO1xuaW1wb3J0IHsgc2VhcmNoIH0gZnJvbSAnLi4nIDtcbmltcG9ydCB7IGlub3JkZXJ0cmF2ZXJzYWwgLCByYW5nZXRyYXZlcnNhbCB9IGZyb20gJy4uJyA7XG5cbi8qKlxuICogQSBSZWRCbGFja1RyZWUgd2l0aCBrZXktb25seSBub2Rlcy5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWRCbGFja1RyZWUge1xuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RzIGEgbmV3IGVtcHR5IHJlZC1ibGFjayB0cmVlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJlIC0gVGhlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIG5vZGUga2V5cy5cblx0ICogQHJldHVybnMge1JlZEJsYWNrVHJlZX1cblx0ICovXG5cdGNvbnN0cnVjdG9yICggY29tcGFyZSApIHtcblxuXHRcdHRoaXMuY29tcGFyZSA9IGNvbXBhcmUgO1xuXHRcdHRoaXMucm9vdCA9IG51bGwgO1xuXG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIGtleSB0byB0aGUgdHJlZS5cblx0ICpcblx0ICogQHBhcmFtIHtLZXl9IGtleSAtIFRoZSBrZXkgdG8gYWRkLlxuXHQgKi9cblx0YWRkICgga2V5ICkge1xuXHRcdGlmICggdGhpcy5yb290ID09PSBudWxsICkge1xuXHRcdFx0dGhpcy5yb290ID0gbmV3IE5vZGUoIEJMQUNLICwga2V5ICkgO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGNvbnN0IG5vZGUgPSBuZXcgTm9kZSggUkVEICwga2V5ICkgO1xuXHRcdFx0aW5zZXJ0KCB0aGlzLmNvbXBhcmUgLCB0aGlzLnJvb3QgLCBub2RlICkgO1xuXHRcdFx0aW5zZXJ0X2Nhc2UyKCBub2RlICkgO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggZm9yIHRoZSBpbnB1dCBrZXkgaW4gdGhlIHRyZWUuXG5cdCAqIFJldHVybnMgdGhlIGZpcnN0IG5vZGUgd2hvc2Uga2V5IGVxdWFscyB0aGUgaW5wdXQga2V5LlxuXHQgKiBJZiBubyBzdWNoIG5vZGUgZXhpc3RzLCByZXR1cm5zIDxjb2RlPm51bGw8L2NvZGU+LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0tleX0ga2V5IC0gVGhlIGlucHV0IGtleS5cblx0ICogQHJldHVybnMge05vZGV9XG5cdCAqL1xuXHRfc2VhcmNoICgga2V5ICkge1xuXHRcdGlmICggdGhpcy5yb290ID09PSBudWxsICkgcmV0dXJuIG51bGwgO1xuXHRcdHJldHVybiBzZWFyY2goIHRoaXMuY29tcGFyZSAsIHRoaXMucm9vdCAsIGtleSApIDtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZWFyY2ggZm9yIHRoZSBpbnB1dCBrZXkgaW4gdGhlIHRyZWUuIFJldHVybnMgdGhlIGZpcnN0IG5vZGUga2V5IGZvdW5kXG5cdCAqIGluIHRoaXMgd2F5ICh3aXRoIHtAbGluayBSZWRCbGFja1RyZWUjX3NlYXJjaH0uIElmIG5vIHN1Y2gga2V5IGV4aXN0c1xuXHQgKiBpbiB0aGUgdHJlZSwgcmV0dXJucyA8Y29kZT5udWxsPC9jb2RlPi5cblx0ICpcblx0ICogQHBhcmFtIHtLZXl9IGtleSAtIFRoZSBpbnB1dCBrZXkuXG5cdCAqIEByZXR1cm5zIHtLZXl9XG5cdCAqL1xuXHRnZXQgKCBrZXkgKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuX3NlYXJjaCgga2V5ICkgO1xuXHRcdHJldHVybiBub2RlID09PSBudWxsID8gbnVsbCA6IG5vZGUua2V5IDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIGFuZCBvbmx5IGlmIHRoZSB0cmVlIGNvbnRhaW5zIHRoZSBpbnB1dFxuXHQgKiBrZXkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7S2V5fSBrZXkgLSBUaGUgaW5wdXQga2V5LlxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICovXG5cdGhhcyAoIGtleSApIHtcblx0XHRyZXR1cm4gdGhpcy5fc2VhcmNoKCBrZXkgKSAhPT0gbnVsbCA7XG5cdH1cblxuXHQvKipcblx0ICogRGVsZXRlcyB0aGUgaW5wdXQgbm9kZSBmcm9tIHRoZSB0cmVlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBUaGUgaW5wdXQgbm9kZSB0byBkZWxldGUuXG5cdCAqL1xuXHRfZGVsZXRlICggbm9kZSApIHtcblxuXHRcdGlmICggIW5vZGUubGVmdC5pc2xlYWYoKSApIHtcblx0XHRcdC8vIHJlcGxhY2Ugbm9kZSdzIGtleSB3aXRoIHByZWRlY2Vzc29yJ3Mga2V5XG5cdFx0XHRjb25zdCBwcmVkID0gcHJlZGVjZXNzb3IoIG5vZGUgKSA7XG5cdFx0XHRub2RlLmtleSA9IHByZWQua2V5IDtcblx0XHRcdC8vIGRlbGV0ZSBwcmVkZWNlc3NvciBub2RlXG5cdFx0XHQvLyBub3RlOiB0aGlzIG5vZGUgY2FuIG9ubHkgaGF2ZSBvbmUgbm9uLWxlYWYgY2hpbGRcblx0XHRcdC8vICAgICAgIGJlY2F1c2UgdGhlIHRyZWUgaXMgYSByZWQtYmxhY2sgdHJlZVxuXHRcdFx0ZGVsZXRlX29uZV9jaGlsZCggcHJlZCApIDtcblx0XHR9XG5cblx0XHRlbHNlIGlmICggIW5vZGUucmlnaHQuaXNsZWFmKCkgKSB7XG5cdFx0XHQvLyByZXBsYWNlIG5vZGUncyBrZXkgd2l0aCBzdWNjZXNzb3IncyBrZXlcblx0XHRcdC8vIElmIHRoZXJlIGlzIG5vIGxlZnQgY2hpbGQsIHRoZW4gdGhlcmUgY2FuIG9ubHkgYmUgb25lIHJpZ2h0XG5cdFx0XHQvLyBjaGlsZC5cblx0XHRcdGNvbnN0IHN1Y2MgPSBub2RlLnJpZ2h0IDtcblx0XHRcdG5vZGUua2V5ID0gc3VjYy5rZXkgO1xuXHRcdFx0Ly8gZGVsZXRlIHN1Y2Nlc3NvciBub2RlXG5cdFx0XHQvLyBub3RlOiB0aGlzIG5vZGUgY2FuIG9ubHkgaGF2ZSBvbmUgbm9uLWxlYWYgY2hpbGRcblx0XHRcdC8vICAgICAgIGJlY2F1c2UgdGhlIHRyZWUgaXMgYSByZWQtYmxhY2sgdHJlZVxuXHRcdFx0ZGVsZXRlX29uZV9jaGlsZCggc3VjYyApIDtcblx0XHR9XG5cblx0XHRlbHNlIGlmICggbm9kZSA9PT0gdGhpcy5yb290ICkge1xuXHRcdFx0dGhpcy5yb290ID0gbnVsbCA7XG5cdFx0fVxuXG5cdFx0ZWxzZSB7XG5cdFx0XHRkZWxldGVfb25lX2NoaWxkKCBub2RlICkgO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaCBmb3IgdGhlIGZpcnN0IG5vZGUgb2YgdGhlIHRyZWUgd2hvc2Uga2V5IGVxdWFscyB0aGUgaW5wdXQga2V5XG5cdCAqICh3aXRoIHtAbGluayBSZWRCbGFja1RyZWUjX3NlYXJjaH0pLCB0aGVuIGRlbGV0ZSB0aGF0IG5vZGVcblx0ICogKHdpdGgge0BsaW5rIFJlZEJsYWNrVHJlZSNfZGVsZXRlfSkuIElmIHN1Y2ggYSBub2RlIGlzIGZvdW5kIGFuZCBkZWxldGVkXG5cdCAqIHRoZW4gcmV0dXJuIDxjb2RlPnRydWU8L2NvZGU+LiBSZXR1cm4gPGNvZGU+ZmFsc2U8L2NvZGU+IG90aGVyd2lzZS5cblx0ICpcblx0ICogQHBhcmFtIHtLZXl9IGtleSAtIFRoZSBpbnB1dCBrZXkuXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufSAtIFdoZXRoZXIgdGhlIGtleSBleGlzdGVkIGluIHRoZSB0cmVlIGJlZm9yZSByZW1vdmFsLlxuXHQgKi9cblx0cmVtb3ZlICgga2V5ICkge1xuXG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuX3NlYXJjaCgga2V5ICkgO1xuXHRcdGlmICggbm9kZSA9PT0gbnVsbCApIHJldHVybiBmYWxzZSA7XG5cblx0XHR0aGlzLl9kZWxldGUoIG5vZGUgKSA7XG5cdFx0cmV0dXJuIHRydWUgO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhbiBpbiBvcmRlciBpdGVyYXRvciBvdmVyIHRoZSBrZXlzIG9mIHRoZSB0cmVlIHRoYXQgbGllIGluIHRoZVxuXHQgKiBpbnRlcnZhbCBbbGVmdCwgcmlnaHRbLlxuXHQgKiBAcGFyYW0ge0tleX0gbGVmdCAtIFRoZSBsZWZ0IGJvdW5kIG9mIHRoZSBpbnRlcnZhbC5cblx0ICogQHBhcmFtIHtLZXl9IHJpZ2h0IC0gVGhlIHJpZ2h0IGJvdW5kIG9mIHRoZSBpbnRlcnZhbC5cblx0ICogQHJldHVybnMge0l0ZXJhdG9yfVxuXHQgKi9cblx0KnJhbmdlICggbGVmdCAsIHJpZ2h0ICkge1xuXG5cdFx0aWYgKCB0aGlzLnJvb3QgIT09IG51bGwgKSB5aWVsZCogcmFuZ2V0cmF2ZXJzYWwoIHRoaXMuY29tcGFyZSAsIHRoaXMucm9vdCAsIGxlZnQgLCByaWdodCApIDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gaW4gb3JkZXIgaXRlcmF0b3Igb3ZlciB0aGUga2V5cyBvZiB0aGUgdHJlZS5cblx0ICpcblx0ICogQHJldHVybnMge0l0ZXJhdG9yfVxuXHQgKi9cblx0Kml0ZW1zICggKSB7XG5cblx0XHRpZiAoIHRoaXMucm9vdCAhPT0gbnVsbCApIHlpZWxkKiBpbm9yZGVydHJhdmVyc2FsKCB0aGlzLnJvb3QgKSA7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTYW1lIGFzIHtAbGluayBSZWRCbGFja1RyZWUjaXRlbXN9LlxuXHQgKi9cblx0W1N5bWJvbC5pdGVyYXRvcl0gKCApIHtcblxuXHRcdHJldHVybiB0aGlzLml0ZW1zKCkgO1xuXG5cdH1cblxuXHQvKipcblx0ICogQ29uc3RydWN0cyBhIHJlZC1ibGFjayB0cmVlIGZyb20gYW4gaW5wdXQgaXRlcmFibGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmUgLSBUaGUgY29tcGFyaXNvbiBmdW5jdGlvbiB0byB1c2UuXG5cdCAqIEBwYXJhbSB7SXRlcmJhbGV9IGl0ZXJhYmxlIC0gVGhlIGlucHV0IGl0ZXJhYmxlLlxuXHQgKiBAcmV0dXJucyB7UmVkQmxhY2tUcmVlfVxuXHQgKi9cblx0c3RhdGljIGZyb20gKCBjb21wYXJlICwgaXRlcmFibGUgKSB7XG5cblx0XHRjb25zdCB0cmVlID0gbmV3IFJlZEJsYWNrVHJlZSggY29tcGFyZSApIDtcblxuXHRcdGZvciAoIGNvbnN0IGVsZW1lbnQgb2YgaXRlcmFibGUgKSB0cmVlLmFkZCggZWxlbWVudCApIDtcblxuXHRcdHJldHVybiB0cmVlIDtcblxuXHR9XG5cbn1cbiJdfQ==