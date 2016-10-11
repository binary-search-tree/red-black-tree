'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.insert_case3 = insert_case3;

var _ = require('..');

var _insert_case = require('./insert_case1');

var _insert_case2 = require('./insert_case4');

/**
 * Preconditions:
 *   - n is red.
 *   - n is not the root of the tree.
 *   - n's parent is red.
 *
 * @param {Node} n - The input node.
 */
function insert_case3(n) {

	var u = (0, _.uncle)(n);

	/**
  * If n has a non-leaf uncle and this uncle is red then we simply
  * repaint the parent and the uncle of n in black, the grandparent of
  * n in red, then call insert_case1 on n's grandparent.
  *
  *             B                    >R
  *           /   \                 /   \
  *         R       R             B       B
  *        / \     / \   -->     / \     / \
  *      >R   -   -   -         R   -   -   -
  *      / \                   / \
  *     -   -                 -   -
  */

	if (u !== null && u.color === _.RED) {
		n.parent.color = _.BLACK;
		u.color = _.BLACK;
		var g = (0, _.grandparent)(n);
		g.color = _.RED;
		(0, _insert_case.insert_case1)(g);
	} else (0, _insert_case2.insert_case4)(n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnNlcnRpb24vaW5zZXJ0X2Nhc2UzLmpzIl0sIm5hbWVzIjpbImluc2VydF9jYXNlMyIsIm4iLCJ1IiwiY29sb3IiLCJwYXJlbnQiLCJnIl0sIm1hcHBpbmdzIjoiOzs7OztRQVlnQkEsWSxHQUFBQSxZOztBQVpoQjs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRTyxTQUFTQSxZQUFULENBQXdCQyxDQUF4QixFQUE0Qjs7QUFFbEMsS0FBTUMsSUFBSSxhQUFPRCxDQUFQLENBQVY7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBZUEsS0FBT0MsTUFBTSxJQUFSLElBQW9CQSxFQUFFQyxLQUFGLFVBQXpCLEVBQTZDO0FBQzVDRixJQUFFRyxNQUFGLENBQVNELEtBQVQ7QUFDQUQsSUFBRUMsS0FBRjtBQUNBLE1BQU1FLElBQUksbUJBQWFKLENBQWIsQ0FBVjtBQUNBSSxJQUFFRixLQUFGO0FBQ0EsaUNBQWNFLENBQWQ7QUFDQSxFQU5ELE1BUUssZ0NBQWNKLENBQWQ7QUFFTCIsImZpbGUiOiJpbnNlcnRfY2FzZTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCTEFDSyAsIFJFRCAsIHVuY2xlICwgZ3JhbmRwYXJlbnQgfSBmcm9tICcuLicgO1xuaW1wb3J0IHsgaW5zZXJ0X2Nhc2UxIH0gZnJvbSAnLi9pbnNlcnRfY2FzZTEnIDtcbmltcG9ydCB7IGluc2VydF9jYXNlNCB9IGZyb20gJy4vaW5zZXJ0X2Nhc2U0JyA7XG5cbi8qKlxuICogUHJlY29uZGl0aW9uczpcbiAqICAgLSBuIGlzIHJlZC5cbiAqICAgLSBuIGlzIG5vdCB0aGUgcm9vdCBvZiB0aGUgdHJlZS5cbiAqICAgLSBuJ3MgcGFyZW50IGlzIHJlZC5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG4gLSBUaGUgaW5wdXQgbm9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc2VydF9jYXNlMyAoIG4gKSB7XG5cblx0Y29uc3QgdSA9IHVuY2xlKCBuICkgO1xuXG5cdC8qKlxuXHQgKiBJZiBuIGhhcyBhIG5vbi1sZWFmIHVuY2xlIGFuZCB0aGlzIHVuY2xlIGlzIHJlZCB0aGVuIHdlIHNpbXBseVxuXHQgKiByZXBhaW50IHRoZSBwYXJlbnQgYW5kIHRoZSB1bmNsZSBvZiBuIGluIGJsYWNrLCB0aGUgZ3JhbmRwYXJlbnQgb2Zcblx0ICogbiBpbiByZWQsIHRoZW4gY2FsbCBpbnNlcnRfY2FzZTEgb24gbidzIGdyYW5kcGFyZW50LlxuXHQgKlxuXHQgKiAgICAgICAgICAgICBCICAgICAgICAgICAgICAgICAgICA+UlxuXHQgKiAgICAgICAgICAgLyAgIFxcICAgICAgICAgICAgICAgICAvICAgXFxcblx0ICogICAgICAgICBSICAgICAgIFIgICAgICAgICAgICAgQiAgICAgICBCXG5cdCAqICAgICAgICAvIFxcICAgICAvIFxcICAgLS0+ICAgICAvIFxcICAgICAvIFxcXG5cdCAqICAgICAgPlIgICAtICAgLSAgIC0gICAgICAgICBSICAgLSAgIC0gICAtXG5cdCAqICAgICAgLyBcXCAgICAgICAgICAgICAgICAgICAvIFxcXG5cdCAqICAgICAtICAgLSAgICAgICAgICAgICAgICAgLSAgIC1cblx0ICovXG5cblxuXHRpZiAoICggdSAhPT0gbnVsbCApICYmICggdS5jb2xvciA9PT0gUkVEICkgKSB7XG5cdFx0bi5wYXJlbnQuY29sb3IgPSBCTEFDSyA7XG5cdFx0dS5jb2xvciA9IEJMQUNLIDtcblx0XHRjb25zdCBnID0gZ3JhbmRwYXJlbnQoIG4gKSA7XG5cdFx0Zy5jb2xvciA9IFJFRCA7XG5cdFx0aW5zZXJ0X2Nhc2UxKCBnICkgO1xuXHR9XG5cblx0ZWxzZSBpbnNlcnRfY2FzZTQoIG4gKSA7XG5cbn1cbiJdfQ==