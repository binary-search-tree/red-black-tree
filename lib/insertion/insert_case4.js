'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.insert_case4 = insert_case4;

var _ = require('..');

var _insert_case = require('./insert_case5');

/**
 * Preconditions:
 *   - n is red.
 *   - n is not the root of the tree.
 *   - n's parent is red.
 *   - n's uncle is black.
 *
 * Here we fix the input subtree to pass the preconditions of {@link insert_case5}.
 *
 * @param {Node} n - The input node.
 */
function insert_case4(n) {

	var g = (0, _.grandparent)(n);

	/**
  * If the path from g to n makes a left-right, change it to a left-left
  * with {@link rotate_left}. Then call {@link insert_case5} on the old
  * parent of n.
  *
  *             B                     B
  *           /   \                 /   \
  *         R       B             R       B
  *        / \     / \   -->     / \     / \
  *       =  >R   -   -        >R   =   -   -
  *          / \               / \
  *         =   =             =   =
  */

	if (n === n.parent.right && n.parent === g.left) {

		(0, _.rotate_left)(n.parent);

		/**
   * rotate_left can be the below because of already having *g =  grandparent(n)
   *
   * saved_p=g.left, *saved_left_n=n.left;
   * g.left=n;
   * n.left=saved_p;
   * saved_p.right=saved_left_n;
   *
   * and modify the parent's nodes properly
   */

		// n = n.left; /!\ need to fix rotate, so that we can safely reference a node
	}

	/**
  * If the path from g to n makes a right-left, change it to a right-right
  * with {@link rotate_right}. Then call {@link insert_case5} on the old
  * parent of n.
  *
  *             B                     B
  *           /   \                 /   \
  *         B       R             B       R
  *        / \     / \   -->     / \     / \
  *       -   -  >R   =         -   -   =  >R
  *              / \                       / \
  *             =   =                     =   =
  */

	else if (n === n.parent.left && n.parent === g.right) {

			(0, _.rotate_right)(n.parent);

			/**
    * rotate_right can be the below to take advantage of already having *g =  grandparent(n)
    *
    * saved_p=g.right, *saved_right_n=n.right;
    * g.right=n;
    * n.right=saved_p;
    * saved_p.left=saved_right_n;
    *
    */

			// n = n.right ;
		}

	(0, _insert_case.insert_case5)(n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnNlcnRpb24vaW5zZXJ0X2Nhc2U0LmpzIl0sIm5hbWVzIjpbImluc2VydF9jYXNlNCIsIm4iLCJnIiwicGFyZW50IiwicmlnaHQiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQWVnQkEsWSxHQUFBQSxZOztBQWRoQjs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXTyxTQUFTQSxZQUFULENBQXdCQyxDQUF4QixFQUE0Qjs7QUFFbEMsS0FBTUMsSUFBSSxtQkFBYUQsQ0FBYixDQUFWOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNBLEtBQU9BLE1BQU1BLEVBQUVFLE1BQUYsQ0FBU0MsS0FBakIsSUFBOEJILEVBQUVFLE1BQUYsS0FBYUQsRUFBRUcsSUFBbEQsRUFBMkQ7O0FBRTFELHFCQUFhSixFQUFFRSxNQUFmOztBQUVBOzs7Ozs7Ozs7OztBQVdBO0FBRUE7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBbkJBLE1BaUNLLElBQU9GLE1BQU1BLEVBQUVFLE1BQUYsQ0FBU0UsSUFBakIsSUFBNkJKLEVBQUVFLE1BQUYsS0FBYUQsRUFBRUUsS0FBakQsRUFBMkQ7O0FBRS9ELHVCQUFjSCxFQUFFRSxNQUFoQjs7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7O0FBRUQsZ0NBQWNGLENBQWQ7QUFFQSIsImZpbGUiOiJpbnNlcnRfY2FzZTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHJvdGF0ZV9sZWZ0ICwgcm90YXRlX3JpZ2h0ICwgZ3JhbmRwYXJlbnQgfSBmcm9tICcuLicgO1xuaW1wb3J0IHsgaW5zZXJ0X2Nhc2U1IH0gZnJvbSAnLi9pbnNlcnRfY2FzZTUnIDtcblxuLyoqXG4gKiBQcmVjb25kaXRpb25zOlxuICogICAtIG4gaXMgcmVkLlxuICogICAtIG4gaXMgbm90IHRoZSByb290IG9mIHRoZSB0cmVlLlxuICogICAtIG4ncyBwYXJlbnQgaXMgcmVkLlxuICogICAtIG4ncyB1bmNsZSBpcyBibGFjay5cbiAqXG4gKiBIZXJlIHdlIGZpeCB0aGUgaW5wdXQgc3VidHJlZSB0byBwYXNzIHRoZSBwcmVjb25kaXRpb25zIG9mIHtAbGluayBpbnNlcnRfY2FzZTV9LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbiAtIFRoZSBpbnB1dCBub2RlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0X2Nhc2U0ICggbiApIHtcblxuXHRjb25zdCBnID0gZ3JhbmRwYXJlbnQoIG4gKSA7XG5cblx0LyoqXG5cdCAqIElmIHRoZSBwYXRoIGZyb20gZyB0byBuIG1ha2VzIGEgbGVmdC1yaWdodCwgY2hhbmdlIGl0IHRvIGEgbGVmdC1sZWZ0XG5cdCAqIHdpdGgge0BsaW5rIHJvdGF0ZV9sZWZ0fS4gVGhlbiBjYWxsIHtAbGluayBpbnNlcnRfY2FzZTV9IG9uIHRoZSBvbGRcblx0ICogcGFyZW50IG9mIG4uXG5cdCAqXG5cdCAqICAgICAgICAgICAgIEIgICAgICAgICAgICAgICAgICAgICBCXG5cdCAqICAgICAgICAgICAvICAgXFwgICAgICAgICAgICAgICAgIC8gICBcXFxuXHQgKiAgICAgICAgIFIgICAgICAgQiAgICAgICAgICAgICBSICAgICAgIEJcblx0ICogICAgICAgIC8gXFwgICAgIC8gXFwgICAtLT4gICAgIC8gXFwgICAgIC8gXFxcblx0ICogICAgICAgPSAgPlIgICAtICAgLSAgICAgICAgPlIgICA9ICAgLSAgIC1cblx0ICogICAgICAgICAgLyBcXCAgICAgICAgICAgICAgIC8gXFxcblx0ICogICAgICAgICA9ICAgPSAgICAgICAgICAgICA9ICAgPVxuXHQgKi9cblxuXHRpZiAoICggbiA9PT0gbi5wYXJlbnQucmlnaHQgKSAmJiAoIG4ucGFyZW50ID09PSBnLmxlZnQgKSApIHtcblxuXHRcdHJvdGF0ZV9sZWZ0KCBuLnBhcmVudCApIDtcblxuXHRcdC8qKlxuXHRcdCAqIHJvdGF0ZV9sZWZ0IGNhbiBiZSB0aGUgYmVsb3cgYmVjYXVzZSBvZiBhbHJlYWR5IGhhdmluZyAqZyA9ICBncmFuZHBhcmVudChuKVxuXHRcdCAqXG5cdFx0ICogc2F2ZWRfcD1nLmxlZnQsICpzYXZlZF9sZWZ0X249bi5sZWZ0O1xuXHRcdCAqIGcubGVmdD1uO1xuXHRcdCAqIG4ubGVmdD1zYXZlZF9wO1xuXHRcdCAqIHNhdmVkX3AucmlnaHQ9c2F2ZWRfbGVmdF9uO1xuXHRcdCAqXG5cdFx0ICogYW5kIG1vZGlmeSB0aGUgcGFyZW50J3Mgbm9kZXMgcHJvcGVybHlcblx0XHQgKi9cblxuXHRcdC8vIG4gPSBuLmxlZnQ7IC8hXFwgbmVlZCB0byBmaXggcm90YXRlLCBzbyB0aGF0IHdlIGNhbiBzYWZlbHkgcmVmZXJlbmNlIGEgbm9kZVxuXG5cdH1cblxuXHQvKipcblx0ICogSWYgdGhlIHBhdGggZnJvbSBnIHRvIG4gbWFrZXMgYSByaWdodC1sZWZ0LCBjaGFuZ2UgaXQgdG8gYSByaWdodC1yaWdodFxuXHQgKiB3aXRoIHtAbGluayByb3RhdGVfcmlnaHR9LiBUaGVuIGNhbGwge0BsaW5rIGluc2VydF9jYXNlNX0gb24gdGhlIG9sZFxuXHQgKiBwYXJlbnQgb2Ygbi5cblx0ICpcblx0ICogICAgICAgICAgICAgQiAgICAgICAgICAgICAgICAgICAgIEJcblx0ICogICAgICAgICAgIC8gICBcXCAgICAgICAgICAgICAgICAgLyAgIFxcXG5cdCAqICAgICAgICAgQiAgICAgICBSICAgICAgICAgICAgIEIgICAgICAgUlxuXHQgKiAgICAgICAgLyBcXCAgICAgLyBcXCAgIC0tPiAgICAgLyBcXCAgICAgLyBcXFxuXHQgKiAgICAgICAtICAgLSAgPlIgICA9ICAgICAgICAgLSAgIC0gICA9ICA+UlxuXHQgKiAgICAgICAgICAgICAgLyBcXCAgICAgICAgICAgICAgICAgICAgICAgLyBcXFxuXHQgKiAgICAgICAgICAgICA9ICAgPSAgICAgICAgICAgICAgICAgICAgID0gICA9XG5cdCAqL1xuXG5cdGVsc2UgaWYgKCAoIG4gPT09IG4ucGFyZW50LmxlZnQgKSAmJiAoIG4ucGFyZW50ID09PSBnLnJpZ2h0ICkgKSB7XG5cblx0XHRyb3RhdGVfcmlnaHQoIG4ucGFyZW50ICkgO1xuXG5cdFx0LyoqXG5cdFx0ICogcm90YXRlX3JpZ2h0IGNhbiBiZSB0aGUgYmVsb3cgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgYWxyZWFkeSBoYXZpbmcgKmcgPSAgZ3JhbmRwYXJlbnQobilcblx0XHQgKlxuXHRcdCAqIHNhdmVkX3A9Zy5yaWdodCwgKnNhdmVkX3JpZ2h0X249bi5yaWdodDtcblx0XHQgKiBnLnJpZ2h0PW47XG5cdFx0ICogbi5yaWdodD1zYXZlZF9wO1xuXHRcdCAqIHNhdmVkX3AubGVmdD1zYXZlZF9yaWdodF9uO1xuXHRcdCAqXG5cdFx0ICovXG5cblx0XHQvLyBuID0gbi5yaWdodCA7XG5cdH1cblxuXHRpbnNlcnRfY2FzZTUoIG4gKSA7XG5cbn1cbiJdfQ==