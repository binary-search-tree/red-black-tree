'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.insert_case1 = insert_case1;

var _ = require('..');

var _insert_case = require('./insert_case2');

/**
 * Preconditions:
 *   - n is red.
 *
 * @param {Node} n - The input node.
 */
function insert_case1(n) {

	/**
  * If n is the root of the tree, paint it black and we are done.
  *
  *      >R
  *      / \
  *     -   -
  */
	if (n.parent === null) n.color = _.BLACK;else (0, _insert_case.insert_case2)(n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnNlcnRpb24vaW5zZXJ0X2Nhc2UxLmpzIl0sIm5hbWVzIjpbImluc2VydF9jYXNlMSIsIm4iLCJwYXJlbnQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLFksR0FBQUEsWTs7QUFUaEI7O0FBQ0E7O0FBRUE7Ozs7OztBQU1PLFNBQVNBLFlBQVQsQ0FBd0JDLENBQXhCLEVBQTRCOztBQUVsQzs7Ozs7OztBQU9BLEtBQUtBLEVBQUVDLE1BQUYsS0FBYSxJQUFsQixFQUF5QkQsRUFBRUUsS0FBRixXQUF6QixLQUVLLCtCQUFjRixDQUFkO0FBRUwiLCJmaWxlIjoiaW5zZXJ0X2Nhc2UxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkxBQ0sgfSBmcm9tICcuLicgO1xuaW1wb3J0IHsgaW5zZXJ0X2Nhc2UyIH0gZnJvbSAnLi9pbnNlcnRfY2FzZTInIDtcblxuLyoqXG4gKiBQcmVjb25kaXRpb25zOlxuICogICAtIG4gaXMgcmVkLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbiAtIFRoZSBpbnB1dCBub2RlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0X2Nhc2UxICggbiApIHtcblxuXHQvKipcblx0ICogSWYgbiBpcyB0aGUgcm9vdCBvZiB0aGUgdHJlZSwgcGFpbnQgaXQgYmxhY2sgYW5kIHdlIGFyZSBkb25lLlxuXHQgKlxuXHQgKiAgICAgID5SXG5cdCAqICAgICAgLyBcXFxuXHQgKiAgICAgLSAgIC1cblx0ICovXG5cdGlmICggbi5wYXJlbnQgPT09IG51bGwgKSBuLmNvbG9yID0gQkxBQ0sgO1xuXG5cdGVsc2UgaW5zZXJ0X2Nhc2UyKCBuICkgO1xuXG59XG4iXX0=