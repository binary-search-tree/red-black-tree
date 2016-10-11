'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.insert_case2 = insert_case2;

var _ = require('..');

var _insert_case = require('./insert_case3');

/**
 * Preconditions:
 *   - n is red.
 *   - n is not the root of the tree.
 *
 * @param {Node} n - The input node.
 */
function insert_case2(n) {

	/**
  * If the parent of n is black then we have nothing to do.
  *
  *         B
  *        / \
  *      >R   -
  *      / \
  *     -   -
  */
	if (n.parent.color === _.BLACK) return;else (0, _insert_case.insert_case3)(n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnNlcnRpb24vaW5zZXJ0X2Nhc2UyLmpzIl0sIm5hbWVzIjpbImluc2VydF9jYXNlMiIsIm4iLCJwYXJlbnQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFVZ0JBLFksR0FBQUEsWTs7QUFWaEI7O0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPTyxTQUFTQSxZQUFULENBQXdCQyxDQUF4QixFQUE0Qjs7QUFFbEM7Ozs7Ozs7OztBQVNBLEtBQUtBLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxZQUFMLEVBQWdDLE9BQWhDLEtBRUssK0JBQWNGLENBQWQ7QUFFTCIsImZpbGUiOiJpbnNlcnRfY2FzZTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCTEFDSyB9IGZyb20gJy4uJyA7XG5pbXBvcnQgeyBpbnNlcnRfY2FzZTMgfSBmcm9tICcuL2luc2VydF9jYXNlMycgO1xuXG4vKipcbiAqIFByZWNvbmRpdGlvbnM6XG4gKiAgIC0gbiBpcyByZWQuXG4gKiAgIC0gbiBpcyBub3QgdGhlIHJvb3Qgb2YgdGhlIHRyZWUuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBuIC0gVGhlIGlucHV0IG5vZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRfY2FzZTIgKCBuICkge1xuXG5cdC8qKlxuXHQgKiBJZiB0aGUgcGFyZW50IG9mIG4gaXMgYmxhY2sgdGhlbiB3ZSBoYXZlIG5vdGhpbmcgdG8gZG8uXG5cdCAqXG5cdCAqICAgICAgICAgQlxuXHQgKiAgICAgICAgLyBcXFxuXHQgKiAgICAgID5SICAgLVxuXHQgKiAgICAgIC8gXFxcblx0ICogICAgIC0gICAtXG5cdCAqL1xuXHRpZiAoIG4ucGFyZW50LmNvbG9yID09PSBCTEFDSyApIHJldHVybiA7XG5cblx0ZWxzZSBpbnNlcnRfY2FzZTMoIG4gKSA7XG5cbn1cbiJdfQ==