'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.delete_case4 = delete_case4;

var _ = require('..');

var _delete_case = require('./delete_case5');

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *   - n's sibling is black
 *   - n's parent and n's sibling's children cannot all be black
 *
 * @param {Node} n - The input node.
 */
function delete_case4(n) {

    var s = (0, _.sibling)(n);

    /**
     * If n's parent is red and n's sibling's children are black, then swap n's
     * parent and n's sibling color. All root-leaf paths going through n have
     * now a black height of b. All other root-leaf paths have their black
     * height unchanged. Red-black properties are respected. We are done.
     *
     *           R                       B
     *         /   \                  /     \
     *      >B       B              >B        R
     *      / \     / \     -->     / \      / \
     *     -   -  B     B          -   -   B     B
     *           / \   / \                / \   / \
     *          -   - -   -              -   - -   -
     */
    if (
    // the parent color test is always true when coming from case 2
    n.parent.color === _.RED && s.left.color === _.BLACK && s.right.color === _.BLACK) {
        s.color = _.RED;
        n.parent.color = _.BLACK;
    }

    // Otherwise, go to case 5.
    else (0, _delete_case.delete_case5)(n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWxldGlvbi9kZWxldGVfY2FzZTQuanMiXSwibmFtZXMiOlsiZGVsZXRlX2Nhc2U0IiwibiIsInMiLCJwYXJlbnQiLCJjb2xvciIsImxlZnQiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFlZ0JBLFksR0FBQUEsWTs7QUFmaEI7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O0FBV08sU0FBU0EsWUFBVCxDQUF3QkMsQ0FBeEIsRUFBNEI7O0FBRS9CLFFBQU1DLElBQUksZUFBUUQsQ0FBUixDQUFWOztBQUVIOzs7Ozs7Ozs7Ozs7OztBQWNHO0FBQ0k7QUFDRUEsTUFBRUUsTUFBRixDQUFTQyxLQUFULFVBQUYsSUFDRUYsRUFBRUcsSUFBRixDQUFPRCxLQUFQLFlBREYsSUFFRUYsRUFBRUksS0FBRixDQUFRRixLQUFSLFlBSk4sRUFLRTtBQUNFRixVQUFFRSxLQUFGO0FBQ0FILFVBQUVFLE1BQUYsQ0FBU0MsS0FBVDtBQUNIOztBQUVEO0FBVkEsU0FXSywrQkFBY0gsQ0FBZDtBQUVSIiwiZmlsZSI6ImRlbGV0ZV9jYXNlNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJMQUNLICwgUkVEICwgc2libGluZyB9IGZyb20gJy4uJyA7XG5cbmltcG9ydCB7IGRlbGV0ZV9jYXNlNSB9IGZyb20gJy4vZGVsZXRlX2Nhc2U1JyA7XG5cbi8qKlxuICogUHJlY29uZGl0aW9uczpcbiAqICAgLSBuIGlzIGJsYWNrXG4gKiAgIC0gYWxsIHJvb3QtbGVhZiBwYXRocyBnb2luZyB0aHJvdWdoIG4gaGF2ZSBhIGJsYWNrIGhlaWdodCBvZiBiIC0gMVxuICogICAtIGFsbCBvdGhlciByb290LWxlYWYgcGF0aHMgaGF2ZSBhIGJsYWNrIGhlaWdodCBvZiBiXG4gKiAgIC0gbiBpcyBub3QgdGhlIHJvb3RcbiAqICAgLSBuJ3Mgc2libGluZyBpcyBibGFja1xuICogICAtIG4ncyBwYXJlbnQgYW5kIG4ncyBzaWJsaW5nJ3MgY2hpbGRyZW4gY2Fubm90IGFsbCBiZSBibGFja1xuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbiAtIFRoZSBpbnB1dCBub2RlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlX2Nhc2U0ICggbiApIHtcblxuICAgIGNvbnN0IHMgPSBzaWJsaW5nKG4pO1xuXG5cdC8qKlxuXHQgKiBJZiBuJ3MgcGFyZW50IGlzIHJlZCBhbmQgbidzIHNpYmxpbmcncyBjaGlsZHJlbiBhcmUgYmxhY2ssIHRoZW4gc3dhcCBuJ3Ncblx0ICogcGFyZW50IGFuZCBuJ3Mgc2libGluZyBjb2xvci4gQWxsIHJvb3QtbGVhZiBwYXRocyBnb2luZyB0aHJvdWdoIG4gaGF2ZVxuXHQgKiBub3cgYSBibGFjayBoZWlnaHQgb2YgYi4gQWxsIG90aGVyIHJvb3QtbGVhZiBwYXRocyBoYXZlIHRoZWlyIGJsYWNrXG5cdCAqIGhlaWdodCB1bmNoYW5nZWQuIFJlZC1ibGFjayBwcm9wZXJ0aWVzIGFyZSByZXNwZWN0ZWQuIFdlIGFyZSBkb25lLlxuXHQgKlxuXHQgKiAgICAgICAgICAgUiAgICAgICAgICAgICAgICAgICAgICAgQlxuXHQgKiAgICAgICAgIC8gICBcXCAgICAgICAgICAgICAgICAgIC8gICAgIFxcXG5cdCAqICAgICAgPkIgICAgICAgQiAgICAgICAgICAgICAgPkIgICAgICAgIFJcblx0ICogICAgICAvIFxcICAgICAvIFxcICAgICAtLT4gICAgIC8gXFwgICAgICAvIFxcXG5cdCAqICAgICAtICAgLSAgQiAgICAgQiAgICAgICAgICAtICAgLSAgIEIgICAgIEJcblx0ICogICAgICAgICAgIC8gXFwgICAvIFxcICAgICAgICAgICAgICAgIC8gXFwgICAvIFxcXG5cdCAqICAgICAgICAgIC0gICAtIC0gICAtICAgICAgICAgICAgICAtICAgLSAtICAgLVxuXHQgKi9cbiAgICBpZiAoXG4gICAgICAgIC8vIHRoZSBwYXJlbnQgY29sb3IgdGVzdCBpcyBhbHdheXMgdHJ1ZSB3aGVuIGNvbWluZyBmcm9tIGNhc2UgMlxuICAgICAgICAoIG4ucGFyZW50LmNvbG9yID09PSBSRUQgKSAmJlxuICAgICAgICAoIHMubGVmdC5jb2xvciA9PT0gQkxBQ0sgKSAmJlxuICAgICAgICAoIHMucmlnaHQuY29sb3IgPT09IEJMQUNLIClcbiAgICApIHtcbiAgICAgICAgcy5jb2xvciA9IFJFRDtcbiAgICAgICAgbi5wYXJlbnQuY29sb3IgPSBCTEFDSztcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIGdvIHRvIGNhc2UgNS5cbiAgICBlbHNlIGRlbGV0ZV9jYXNlNSggbiApIDtcblxufVxuIl19