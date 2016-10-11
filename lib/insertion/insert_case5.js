'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.insert_case5 = insert_case5;

var _ = require('..');

/**
 * Preconditions:
 *   - n is red.
 *   - n is not the root of the tree.
 *   - n's parent is red.
 *   - n's uncle is black.
 *   - the path from n to its grandparent makes a left-left or right-right.
 *
 * @param {Node} n - The input node.
 */
function insert_case5(n) {

	var g = (0, _.grandparent)(n);

	// repaint n's parent black, n's grandparent red
	n.parent.color = _.BLACK;
	g.color = _.RED;

	/**
  * If the path from g to n makes a left-left, {@link rotate_right} at g.
  * We are done.
  *
  *             R                     B
  *           /   \                 /   \
  *         B       B            >R       R
  *        / \     / \   -->     / \     / \
  *      >R   =   -   -         =   =   =   B
  *      / \                               / \
  *     =   =                             -   -
  */
	if (n === n.parent.left) (0, _.rotate_right)(g);

	/**
  * If the path from g to n makes a right-right, {@link rotate_left} at g.
  * We are done.
  *
  *             R                     B
  *           /   \                 /   \
  *         B       B             R      >R
  *        / \     / \   -->     / \     / \
  *       -   -   =  >R         B   =   =   =
  *                  / \       / \
  *                 =   =     -   -
  */
	else (0, _.rotate_left)(g);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnNlcnRpb24vaW5zZXJ0X2Nhc2U1LmpzIl0sIm5hbWVzIjpbImluc2VydF9jYXNlNSIsIm4iLCJnIiwicGFyZW50IiwiY29sb3IiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQVlnQkEsWSxHQUFBQSxZOztBQVpoQjs7QUFFQTs7Ozs7Ozs7OztBQVVPLFNBQVNBLFlBQVQsQ0FBd0JDLENBQXhCLEVBQTRCOztBQUVsQyxLQUFNQyxJQUFJLG1CQUFhRCxDQUFiLENBQVY7O0FBRUE7QUFDQUEsR0FBRUUsTUFBRixDQUFTQyxLQUFUO0FBQ0FGLEdBQUVFLEtBQUY7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlBLEtBQUtILE1BQU1BLEVBQUVFLE1BQUYsQ0FBU0UsSUFBcEIsRUFBMkIsb0JBQWNILENBQWQ7O0FBRTNCOzs7Ozs7Ozs7Ozs7QUFGQSxNQWNLLG1CQUFhQSxDQUFiO0FBRUwiLCJmaWxlIjoiaW5zZXJ0X2Nhc2U1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVEICwgQkxBQ0sgLCByb3RhdGVfbGVmdCAsIHJvdGF0ZV9yaWdodCAsIGdyYW5kcGFyZW50IH0gZnJvbSAnLi4nIDtcblxuLyoqXG4gKiBQcmVjb25kaXRpb25zOlxuICogICAtIG4gaXMgcmVkLlxuICogICAtIG4gaXMgbm90IHRoZSByb290IG9mIHRoZSB0cmVlLlxuICogICAtIG4ncyBwYXJlbnQgaXMgcmVkLlxuICogICAtIG4ncyB1bmNsZSBpcyBibGFjay5cbiAqICAgLSB0aGUgcGF0aCBmcm9tIG4gdG8gaXRzIGdyYW5kcGFyZW50IG1ha2VzIGEgbGVmdC1sZWZ0IG9yIHJpZ2h0LXJpZ2h0LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbiAtIFRoZSBpbnB1dCBub2RlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0X2Nhc2U1ICggbiApIHtcblxuXHRjb25zdCBnID0gZ3JhbmRwYXJlbnQoIG4gKSA7XG5cblx0Ly8gcmVwYWludCBuJ3MgcGFyZW50IGJsYWNrLCBuJ3MgZ3JhbmRwYXJlbnQgcmVkXG5cdG4ucGFyZW50LmNvbG9yID0gQkxBQ0sgO1xuXHRnLmNvbG9yID0gUkVEIDtcblxuXHQvKipcblx0ICogSWYgdGhlIHBhdGggZnJvbSBnIHRvIG4gbWFrZXMgYSBsZWZ0LWxlZnQsIHtAbGluayByb3RhdGVfcmlnaHR9IGF0IGcuXG5cdCAqIFdlIGFyZSBkb25lLlxuXHQgKlxuXHQgKiAgICAgICAgICAgICBSICAgICAgICAgICAgICAgICAgICAgQlxuXHQgKiAgICAgICAgICAgLyAgIFxcICAgICAgICAgICAgICAgICAvICAgXFxcblx0ICogICAgICAgICBCICAgICAgIEIgICAgICAgICAgICA+UiAgICAgICBSXG5cdCAqICAgICAgICAvIFxcICAgICAvIFxcICAgLS0+ICAgICAvIFxcICAgICAvIFxcXG5cdCAqICAgICAgPlIgICA9ICAgLSAgIC0gICAgICAgICA9ICAgPSAgID0gICBCXG5cdCAqICAgICAgLyBcXCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIFxcXG5cdCAqICAgICA9ICAgPSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSAgIC1cblx0ICovXG5cdGlmICggbiA9PT0gbi5wYXJlbnQubGVmdCApIHJvdGF0ZV9yaWdodCggZyApIDtcblxuXHQvKipcblx0ICogSWYgdGhlIHBhdGggZnJvbSBnIHRvIG4gbWFrZXMgYSByaWdodC1yaWdodCwge0BsaW5rIHJvdGF0ZV9sZWZ0fSBhdCBnLlxuXHQgKiBXZSBhcmUgZG9uZS5cblx0ICpcblx0ICogICAgICAgICAgICAgUiAgICAgICAgICAgICAgICAgICAgIEJcblx0ICogICAgICAgICAgIC8gICBcXCAgICAgICAgICAgICAgICAgLyAgIFxcXG5cdCAqICAgICAgICAgQiAgICAgICBCICAgICAgICAgICAgIFIgICAgICA+UlxuXHQgKiAgICAgICAgLyBcXCAgICAgLyBcXCAgIC0tPiAgICAgLyBcXCAgICAgLyBcXFxuXHQgKiAgICAgICAtICAgLSAgID0gID5SICAgICAgICAgQiAgID0gICA9ICAgPVxuXHQgKiAgICAgICAgICAgICAgICAgIC8gXFwgICAgICAgLyBcXFxuXHQgKiAgICAgICAgICAgICAgICAgPSAgID0gICAgIC0gICAtXG5cdCAqL1xuXHRlbHNlIHJvdGF0ZV9sZWZ0KCBnICkgO1xuXG59XG4iXX0=