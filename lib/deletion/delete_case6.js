'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.delete_case6 = delete_case6;

var _ = require('..');

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *   - n's sibling is black
 *   - if n is a left child, the right child of n's sibling is red
 *   - if n is a right child, the left child of n's sibling is red
 *
 * @param {Node} n - The input node.
 */
function delete_case6(n) {

    var s = (0, _.sibling)(n);

    /**
     * Increment the black height of all root-leaf paths going through n by
     * rotating at n's parent. This decrements the black height of all
     * root-leaft paths going through n's sibling's right child.
        * We can repaint n's sibling's right child in black to fix this.
        * We are done.
     *
     *           ?                          ?
     *        /     \                     /   \
     *      >B        B                 B       B
     *      / \      / \               / \     / \
     *     -   -   =     R     -->   >B   =   =   B
     *                  / \          / \         / \
     *                 =   B        -   -       -   -
     *                    / \
     *                   -   -
     */

    s.color = n.parent.color;
    n.parent.color = _.BLACK;

    if (n === n.parent.left) {
        s.right.color = _.BLACK;
        (0, _.rotate_left)(n.parent);
    }

    // symmetric case
    else {
            s.left.color = _.BLACK;
            (0, _.rotate_right)(n.parent);
        }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWxldGlvbi9kZWxldGVfY2FzZTYuanMiXSwibmFtZXMiOlsiZGVsZXRlX2Nhc2U2IiwibiIsInMiLCJjb2xvciIsInBhcmVudCIsImxlZnQiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFjZ0JBLFksR0FBQUEsWTs7QUFkaEI7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNBLFlBQVQsQ0FBd0JDLENBQXhCLEVBQTRCOztBQUUvQixRQUFNQyxJQUFJLGVBQVNELENBQVQsQ0FBVjs7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JHQyxNQUFFQyxLQUFGLEdBQVVGLEVBQUVHLE1BQUYsQ0FBU0QsS0FBbkI7QUFDQUYsTUFBRUcsTUFBRixDQUFTRCxLQUFUOztBQUVBLFFBQUtGLE1BQU1BLEVBQUVHLE1BQUYsQ0FBU0MsSUFBcEIsRUFBMkI7QUFDdkJILFVBQUVJLEtBQUYsQ0FBUUgsS0FBUjtBQUNBLDJCQUFhRixFQUFFRyxNQUFmO0FBQ0g7O0FBRUQ7QUFMQSxTQU1LO0FBQ0RGLGNBQUVHLElBQUYsQ0FBT0YsS0FBUDtBQUNBLGdDQUFjRixFQUFFRyxNQUFoQjtBQUNIO0FBRUoiLCJmaWxlIjoiZGVsZXRlX2Nhc2U2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkxBQ0sgLCBSRUQgLCBzaWJsaW5nICwgcm90YXRlX3JpZ2h0ICwgcm90YXRlX2xlZnQgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIFByZWNvbmRpdGlvbnM6XG4gKiAgIC0gbiBpcyBibGFja1xuICogICAtIGFsbCByb290LWxlYWYgcGF0aHMgZ29pbmcgdGhyb3VnaCBuIGhhdmUgYSBibGFjayBoZWlnaHQgb2YgYiAtIDFcbiAqICAgLSBhbGwgb3RoZXIgcm9vdC1sZWFmIHBhdGhzIGhhdmUgYSBibGFjayBoZWlnaHQgb2YgYlxuICogICAtIG4gaXMgbm90IHRoZSByb290XG4gKiAgIC0gbidzIHNpYmxpbmcgaXMgYmxhY2tcbiAqICAgLSBpZiBuIGlzIGEgbGVmdCBjaGlsZCwgdGhlIHJpZ2h0IGNoaWxkIG9mIG4ncyBzaWJsaW5nIGlzIHJlZFxuICogICAtIGlmIG4gaXMgYSByaWdodCBjaGlsZCwgdGhlIGxlZnQgY2hpbGQgb2YgbidzIHNpYmxpbmcgaXMgcmVkXG4gKlxuICogQHBhcmFtIHtOb2RlfSBuIC0gVGhlIGlucHV0IG5vZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVfY2FzZTYgKCBuICkge1xuXG4gICAgY29uc3QgcyA9IHNpYmxpbmcoIG4gKSA7XG5cblx0LyoqXG5cdCAqIEluY3JlbWVudCB0aGUgYmxhY2sgaGVpZ2h0IG9mIGFsbCByb290LWxlYWYgcGF0aHMgZ29pbmcgdGhyb3VnaCBuIGJ5XG5cdCAqIHJvdGF0aW5nIGF0IG4ncyBwYXJlbnQuIFRoaXMgZGVjcmVtZW50cyB0aGUgYmxhY2sgaGVpZ2h0IG9mIGFsbFxuXHQgKiByb290LWxlYWZ0IHBhdGhzIGdvaW5nIHRocm91Z2ggbidzIHNpYmxpbmcncyByaWdodCBjaGlsZC5cbiAgICAgKiBXZSBjYW4gcmVwYWludCBuJ3Mgc2libGluZydzIHJpZ2h0IGNoaWxkIGluIGJsYWNrIHRvIGZpeCB0aGlzLlxuICAgICAqIFdlIGFyZSBkb25lLlxuXHQgKlxuXHQgKiAgICAgICAgICAgPyAgICAgICAgICAgICAgICAgICAgICAgICAgP1xuXHQgKiAgICAgICAgLyAgICAgXFwgICAgICAgICAgICAgICAgICAgICAvICAgXFxcblx0ICogICAgICA+QiAgICAgICAgQiAgICAgICAgICAgICAgICAgQiAgICAgICBCXG5cdCAqICAgICAgLyBcXCAgICAgIC8gXFwgICAgICAgICAgICAgICAvIFxcICAgICAvIFxcXG5cdCAqICAgICAtICAgLSAgID0gICAgIFIgICAgIC0tPiAgID5CICAgPSAgID0gICBCXG5cdCAqICAgICAgICAgICAgICAgICAgLyBcXCAgICAgICAgICAvIFxcICAgICAgICAgLyBcXFxuXHQgKiAgICAgICAgICAgICAgICAgPSAgIEIgICAgICAgIC0gICAtICAgICAgIC0gICAtXG5cdCAqICAgICAgICAgICAgICAgICAgICAvIFxcXG5cdCAqICAgICAgICAgICAgICAgICAgIC0gICAtXG5cdCAqL1xuXG4gICAgcy5jb2xvciA9IG4ucGFyZW50LmNvbG9yIDtcbiAgICBuLnBhcmVudC5jb2xvciA9IEJMQUNLIDtcblxuICAgIGlmICggbiA9PT0gbi5wYXJlbnQubGVmdCApIHtcbiAgICAgICAgcy5yaWdodC5jb2xvciA9IEJMQUNLIDtcbiAgICAgICAgcm90YXRlX2xlZnQoIG4ucGFyZW50ICkgO1xuICAgIH1cblxuICAgIC8vIHN5bW1ldHJpYyBjYXNlXG4gICAgZWxzZSB7XG4gICAgICAgIHMubGVmdC5jb2xvciA9IEJMQUNLIDtcbiAgICAgICAgcm90YXRlX3JpZ2h0KCBuLnBhcmVudCApIDtcbiAgICB9XG5cbn1cbiJdfQ==