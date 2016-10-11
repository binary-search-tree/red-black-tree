"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.insert = insert;

/**
 * Walks the tree rooted at <code>A</code> down the only path that satisfies
 * the following property: if at a node <code>C</code> we make a left (resp.
 * right), then <code>B < C</code> (resp. <code>B >= C</code>). Once we hit the
 * end of the path, we can add node <code>B</code> at this position. By the
 * property of the path, the tree rooted at <code>A</code> is still a binary
 * search tree.
 * For our red-black tree, all that is left to do is fix the red-black tree
 * properties in case they have been violated by this insertion. This is fixed
 * by {@link insert_case1}.
 *
 * @param compare - The comparison function to use.
 * @param {Node} A - The root of the tree.
 * @param {Node} B - The node to insert.
 * @returns {Node} B - The node that has been inserted.
 */
function insert(compare, A, B) {

	while (true) {

		if (compare(B.key, A.key) < 0) {

			var node = A.left;

			if (node.isleaf()) {
				A.left = B;
				break;
			}

			A = node;
		} else {

			var _node = A.right;

			if (_node.isleaf()) {
				A.right = B;
				break;
			}

			A = _node;
		}
	}

	B.parent = A;

	return B;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnNlcnRpb24vaW5zZXJ0LmpzIl0sIm5hbWVzIjpbImluc2VydCIsImNvbXBhcmUiLCJBIiwiQiIsImtleSIsIm5vZGUiLCJsZWZ0IiwiaXNsZWFmIiwicmlnaHQiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBaUJnQkEsTSxHQUFBQSxNOztBQWhCaEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk8sU0FBU0EsTUFBVCxDQUFrQkMsT0FBbEIsRUFBMkJDLENBQTNCLEVBQThCQyxDQUE5QixFQUFrQzs7QUFFeEMsUUFBUSxJQUFSLEVBQWU7O0FBRWQsTUFBS0YsUUFBU0UsRUFBRUMsR0FBWCxFQUFnQkYsRUFBRUUsR0FBbEIsSUFBMEIsQ0FBL0IsRUFBbUM7O0FBRWxDLE9BQU1DLE9BQU9ILEVBQUVJLElBQWY7O0FBRUEsT0FBS0QsS0FBS0UsTUFBTCxFQUFMLEVBQXFCO0FBQ3BCTCxNQUFFSSxJQUFGLEdBQVNILENBQVQ7QUFDQTtBQUNBOztBQUVERCxPQUFJRyxJQUFKO0FBRUEsR0FYRCxNQWFLOztBQUVKLE9BQU1BLFFBQU9ILEVBQUVNLEtBQWY7O0FBRUEsT0FBS0gsTUFBS0UsTUFBTCxFQUFMLEVBQXFCO0FBQ3BCTCxNQUFFTSxLQUFGLEdBQVVMLENBQVY7QUFDQTtBQUNBOztBQUVERCxPQUFJRyxLQUFKO0FBRUE7QUFFRDs7QUFFREYsR0FBRU0sTUFBRixHQUFXUCxDQUFYOztBQUVBLFFBQU9DLENBQVA7QUFFQSIsImZpbGUiOiJpbnNlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogV2Fsa3MgdGhlIHRyZWUgcm9vdGVkIGF0IDxjb2RlPkE8L2NvZGU+IGRvd24gdGhlIG9ubHkgcGF0aCB0aGF0IHNhdGlzZmllc1xuICogdGhlIGZvbGxvd2luZyBwcm9wZXJ0eTogaWYgYXQgYSBub2RlIDxjb2RlPkM8L2NvZGU+IHdlIG1ha2UgYSBsZWZ0IChyZXNwLlxuICogcmlnaHQpLCB0aGVuIDxjb2RlPkIgPCBDPC9jb2RlPiAocmVzcC4gPGNvZGU+QiA+PSBDPC9jb2RlPikuIE9uY2Ugd2UgaGl0IHRoZVxuICogZW5kIG9mIHRoZSBwYXRoLCB3ZSBjYW4gYWRkIG5vZGUgPGNvZGU+QjwvY29kZT4gYXQgdGhpcyBwb3NpdGlvbi4gQnkgdGhlXG4gKiBwcm9wZXJ0eSBvZiB0aGUgcGF0aCwgdGhlIHRyZWUgcm9vdGVkIGF0IDxjb2RlPkE8L2NvZGU+IGlzIHN0aWxsIGEgYmluYXJ5XG4gKiBzZWFyY2ggdHJlZS5cbiAqIEZvciBvdXIgcmVkLWJsYWNrIHRyZWUsIGFsbCB0aGF0IGlzIGxlZnQgdG8gZG8gaXMgZml4IHRoZSByZWQtYmxhY2sgdHJlZVxuICogcHJvcGVydGllcyBpbiBjYXNlIHRoZXkgaGF2ZSBiZWVuIHZpb2xhdGVkIGJ5IHRoaXMgaW5zZXJ0aW9uLiBUaGlzIGlzIGZpeGVkXG4gKiBieSB7QGxpbmsgaW5zZXJ0X2Nhc2UxfS5cbiAqXG4gKiBAcGFyYW0gY29tcGFyZSAtIFRoZSBjb21wYXJpc29uIGZ1bmN0aW9uIHRvIHVzZS5cbiAqIEBwYXJhbSB7Tm9kZX0gQSAtIFRoZSByb290IG9mIHRoZSB0cmVlLlxuICogQHBhcmFtIHtOb2RlfSBCIC0gVGhlIG5vZGUgdG8gaW5zZXJ0LlxuICogQHJldHVybnMge05vZGV9IEIgLSBUaGUgbm9kZSB0aGF0IGhhcyBiZWVuIGluc2VydGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0ICggY29tcGFyZSwgQSwgQiApIHtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRpZiAoIGNvbXBhcmUoIEIua2V5LCBBLmtleSApIDwgMCApIHtcblxuXHRcdFx0Y29uc3Qgbm9kZSA9IEEubGVmdDtcblxuXHRcdFx0aWYgKCBub2RlLmlzbGVhZigpICkge1xuXHRcdFx0XHRBLmxlZnQgPSBCO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0QSA9IG5vZGU7XG5cblx0XHR9XG5cblx0XHRlbHNlIHtcblxuXHRcdFx0Y29uc3Qgbm9kZSA9IEEucmlnaHQ7XG5cblx0XHRcdGlmICggbm9kZS5pc2xlYWYoKSApIHtcblx0XHRcdFx0QS5yaWdodCA9IEI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRBID0gbm9kZTtcblxuXHRcdH1cblxuXHR9XG5cblx0Qi5wYXJlbnQgPSBBO1xuXG5cdHJldHVybiBCO1xuXG59XG4iXX0=