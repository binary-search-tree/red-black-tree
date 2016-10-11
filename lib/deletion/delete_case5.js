'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.delete_case5 = delete_case5;

var _ = require('..');

var _delete_case = require('./delete_case6');

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *   - n's sibling is black
 *   - at least one of n's sibling's children is red
 *
 * @param {Node} n - The input node.
 */
function delete_case5(n) {

    var s = (0, _.sibling)(n);

    // The following statements just force the red n's sibling child to be on
    // the left of the left of the parent, or right of the right, so case 6
    // will rotate correctly.

    /**
     *           ?                       ?
     *         /   \                  /     \
     *      >B       B              >B        B
     *      / \     / \     -->     / \      / \
     *     -   -  R     B          -   -   =     R
     *           / \   / \                      / \
     *          =   = -   -                    =   B
     *                                            / \
     *                                           -   -
     */
    if (n === n.parent.left && s.right.color === _.BLACK) {
        s.color = _.RED;
        s.left.color = _.BLACK;
        (0, _.rotate_right)(s);
    }

    /**
     *           ?                       ?
     *         /   \                  /     \
     *       B      >B               B       >B
     *      / \     / \     -->     / \      / \
     *    B     R  -   -          R     =   -   -
     *   / \   / \               / \
     *  -   - =   =             B   =
     *                         / \
     *                        -   -
     */
    else if (n === n.parent.right && s.left.color === _.BLACK) {
            s.color = _.RED;
            s.right.color = _.BLACK;
            (0, _.rotate_left)(s);
        }

    (0, _delete_case.delete_case6)(n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWxldGlvbi9kZWxldGVfY2FzZTUuanMiXSwibmFtZXMiOlsiZGVsZXRlX2Nhc2U1IiwibiIsInMiLCJwYXJlbnQiLCJsZWZ0IiwicmlnaHQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFlZ0JBLFksR0FBQUEsWTs7QUFmaEI7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O0FBV08sU0FBU0EsWUFBVCxDQUF3QkMsQ0FBeEIsRUFBNEI7O0FBRS9CLFFBQU1DLElBQUksZUFBU0QsQ0FBVCxDQUFWOztBQUVBO0FBQ0E7QUFDQTs7QUFFSDs7Ozs7Ozs7Ozs7QUFXRyxRQUFPQSxNQUFNQSxFQUFFRSxNQUFGLENBQVNDLElBQWpCLElBQTZCRixFQUFFRyxLQUFGLENBQVFDLEtBQVIsWUFBbEMsRUFBOEQ7QUFDMURKLFVBQUVJLEtBQUY7QUFDQUosVUFBRUUsSUFBRixDQUFPRSxLQUFQO0FBQ0EsNEJBQWNKLENBQWQ7QUFDSDs7QUFFSjs7Ozs7Ozs7Ozs7QUFORyxTQWlCSyxJQUFPRCxNQUFNQSxFQUFFRSxNQUFGLENBQVNFLEtBQWpCLElBQThCSCxFQUFFRSxJQUFGLENBQU9FLEtBQVAsWUFBbkMsRUFBOEQ7QUFDL0RKLGNBQUVJLEtBQUY7QUFDQUosY0FBRUcsS0FBRixDQUFRQyxLQUFSO0FBQ0EsK0JBQWFKLENBQWI7QUFDSDs7QUFFRCxtQ0FBY0QsQ0FBZDtBQUVIIiwiZmlsZSI6ImRlbGV0ZV9jYXNlNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJMQUNLICwgUkVEICwgc2libGluZyAsIHJvdGF0ZV9yaWdodCAsIHJvdGF0ZV9sZWZ0IH0gZnJvbSAnLi4nIDtcblxuaW1wb3J0IHsgZGVsZXRlX2Nhc2U2IH0gZnJvbSAnLi9kZWxldGVfY2FzZTYnIDtcblxuLyoqXG4gKiBQcmVjb25kaXRpb25zOlxuICogICAtIG4gaXMgYmxhY2tcbiAqICAgLSBhbGwgcm9vdC1sZWFmIHBhdGhzIGdvaW5nIHRocm91Z2ggbiBoYXZlIGEgYmxhY2sgaGVpZ2h0IG9mIGIgLSAxXG4gKiAgIC0gYWxsIG90aGVyIHJvb3QtbGVhZiBwYXRocyBoYXZlIGEgYmxhY2sgaGVpZ2h0IG9mIGJcbiAqICAgLSBuIGlzIG5vdCB0aGUgcm9vdFxuICogICAtIG4ncyBzaWJsaW5nIGlzIGJsYWNrXG4gKiAgIC0gYXQgbGVhc3Qgb25lIG9mIG4ncyBzaWJsaW5nJ3MgY2hpbGRyZW4gaXMgcmVkXG4gKlxuICogQHBhcmFtIHtOb2RlfSBuIC0gVGhlIGlucHV0IG5vZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVfY2FzZTUgKCBuICkge1xuXG4gICAgY29uc3QgcyA9IHNpYmxpbmcoIG4gKSA7XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIHN0YXRlbWVudHMganVzdCBmb3JjZSB0aGUgcmVkIG4ncyBzaWJsaW5nIGNoaWxkIHRvIGJlIG9uXG4gICAgLy8gdGhlIGxlZnQgb2YgdGhlIGxlZnQgb2YgdGhlIHBhcmVudCwgb3IgcmlnaHQgb2YgdGhlIHJpZ2h0LCBzbyBjYXNlIDZcbiAgICAvLyB3aWxsIHJvdGF0ZSBjb3JyZWN0bHkuXG5cblx0LyoqXG5cdCAqICAgICAgICAgICA/ICAgICAgICAgICAgICAgICAgICAgICA/XG5cdCAqICAgICAgICAgLyAgIFxcICAgICAgICAgICAgICAgICAgLyAgICAgXFxcblx0ICogICAgICA+QiAgICAgICBCICAgICAgICAgICAgICA+QiAgICAgICAgQlxuXHQgKiAgICAgIC8gXFwgICAgIC8gXFwgICAgIC0tPiAgICAgLyBcXCAgICAgIC8gXFxcblx0ICogICAgIC0gICAtICBSICAgICBCICAgICAgICAgIC0gICAtICAgPSAgICAgUlxuXHQgKiAgICAgICAgICAgLyBcXCAgIC8gXFwgICAgICAgICAgICAgICAgICAgICAgLyBcXFxuXHQgKiAgICAgICAgICA9ICAgPSAtICAgLSAgICAgICAgICAgICAgICAgICAgPSAgIEJcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8gXFxcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSAgIC1cblx0ICovXG4gICAgaWYgKCAoIG4gPT09IG4ucGFyZW50LmxlZnQgKSAmJiAoIHMucmlnaHQuY29sb3IgPT09IEJMQUNLICkgKSB7XG4gICAgICAgIHMuY29sb3IgPSBSRUQgO1xuICAgICAgICBzLmxlZnQuY29sb3IgPSBCTEFDSyA7XG4gICAgICAgIHJvdGF0ZV9yaWdodCggcyApIDtcbiAgICB9XG5cblx0LyoqXG5cdCAqICAgICAgICAgICA/ICAgICAgICAgICAgICAgICAgICAgICA/XG5cdCAqICAgICAgICAgLyAgIFxcICAgICAgICAgICAgICAgICAgLyAgICAgXFxcblx0ICogICAgICAgQiAgICAgID5CICAgICAgICAgICAgICAgQiAgICAgICA+QlxuXHQgKiAgICAgIC8gXFwgICAgIC8gXFwgICAgIC0tPiAgICAgLyBcXCAgICAgIC8gXFxcblx0ICogICAgQiAgICAgUiAgLSAgIC0gICAgICAgICAgUiAgICAgPSAgIC0gICAtXG5cdCAqICAgLyBcXCAgIC8gXFwgICAgICAgICAgICAgICAvIFxcXG5cdCAqICAtICAgLSA9ICAgPSAgICAgICAgICAgICBCICAgPVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAvIFxcXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgLSAgIC1cblx0ICovXG4gICAgZWxzZSBpZiAoICggbiA9PT0gbi5wYXJlbnQucmlnaHQgKSAmJiAoIHMubGVmdC5jb2xvciA9PT0gQkxBQ0sgKSApIHtcbiAgICAgICAgcy5jb2xvciA9IFJFRCA7XG4gICAgICAgIHMucmlnaHQuY29sb3IgPSBCTEFDSyA7XG4gICAgICAgIHJvdGF0ZV9sZWZ0KCBzICkgO1xuICAgIH1cblxuICAgIGRlbGV0ZV9jYXNlNiggbiApIDtcblxufVxuIl19