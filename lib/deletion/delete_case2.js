'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.delete_case2 = delete_case2;

var _ = require('..');

var _delete_case = require('./delete_case3');

var _delete_case2 = require('./delete_case4');

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *
 * @param {Node} n - The input node.
 */
function delete_case2(n) {

    var s = (0, _.sibling)(n);

    /**
     * If n's sibling is red, prepare for and go to case 4.
     *
     *           B                       B
     *         /   \                  /     \
     *      >B       R               R       B
     *      / \     / \     -->    /   \    / \
     *     -   -  B     B        >B     B  =   =
     *           / \   / \       / \   / \
     *          =   = =   =     -   - =   =
     */
    if (s.color === _.RED) {
        n.parent.color = _.RED;
        s.color = _.BLACK;
        if (n === n.parent.left) (0, _.rotate_left)(n.parent);else (0, _.rotate_right)(n.parent);
        (0, _delete_case2.delete_case4)(n);
    }

    // Otherwise, go to case 3.
    else (0, _delete_case.delete_case3)(n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWxldGlvbi9kZWxldGVfY2FzZTIuanMiXSwibmFtZXMiOlsiZGVsZXRlX2Nhc2UyIiwibiIsInMiLCJjb2xvciIsInBhcmVudCIsImxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBY2dCQSxZLEdBQUFBLFk7O0FBZGhCOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTTyxTQUFTQSxZQUFULENBQXdCQyxDQUF4QixFQUE0Qjs7QUFFL0IsUUFBTUMsSUFBSSxlQUFTRCxDQUFULENBQVY7O0FBRUg7Ozs7Ozs7Ozs7O0FBV0csUUFBS0MsRUFBRUMsS0FBRixVQUFMLEVBQXVCO0FBQ25CRixVQUFFRyxNQUFGLENBQVNELEtBQVQ7QUFDQUQsVUFBRUMsS0FBRjtBQUNBLFlBQUtGLE1BQU1BLEVBQUVHLE1BQUYsQ0FBU0MsSUFBcEIsRUFBMkIsbUJBQWFKLEVBQUVHLE1BQWYsRUFBM0IsS0FDSyxvQkFBY0gsRUFBRUcsTUFBaEI7QUFDTCx3Q0FBY0gsQ0FBZDtBQUNIOztBQUVEO0FBUkEsU0FTSywrQkFBY0EsQ0FBZDtBQUVSIiwiZmlsZSI6ImRlbGV0ZV9jYXNlMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJMQUNLICwgUkVEICwgc2libGluZyAsIHJvdGF0ZV9sZWZ0ICwgcm90YXRlX3JpZ2h0IH0gZnJvbSAnLi4nIDtcblxuaW1wb3J0IHsgZGVsZXRlX2Nhc2UzIH0gZnJvbSAnLi9kZWxldGVfY2FzZTMnIDtcbmltcG9ydCB7IGRlbGV0ZV9jYXNlNCB9IGZyb20gJy4vZGVsZXRlX2Nhc2U0JyA7XG5cbi8qKlxuICogUHJlY29uZGl0aW9uczpcbiAqICAgLSBuIGlzIGJsYWNrXG4gKiAgIC0gYWxsIHJvb3QtbGVhZiBwYXRocyBnb2luZyB0aHJvdWdoIG4gaGF2ZSBhIGJsYWNrIGhlaWdodCBvZiBiIC0gMVxuICogICAtIGFsbCBvdGhlciByb290LWxlYWYgcGF0aHMgaGF2ZSBhIGJsYWNrIGhlaWdodCBvZiBiXG4gKiAgIC0gbiBpcyBub3QgdGhlIHJvb3RcbiAqXG4gKiBAcGFyYW0ge05vZGV9IG4gLSBUaGUgaW5wdXQgbm9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZV9jYXNlMiAoIG4gKSB7XG5cbiAgICBjb25zdCBzID0gc2libGluZyggbiApIDtcblxuXHQvKipcblx0ICogSWYgbidzIHNpYmxpbmcgaXMgcmVkLCBwcmVwYXJlIGZvciBhbmQgZ28gdG8gY2FzZSA0LlxuXHQgKlxuXHQgKiAgICAgICAgICAgQiAgICAgICAgICAgICAgICAgICAgICAgQlxuXHQgKiAgICAgICAgIC8gICBcXCAgICAgICAgICAgICAgICAgIC8gICAgIFxcXG5cdCAqICAgICAgPkIgICAgICAgUiAgICAgICAgICAgICAgIFIgICAgICAgQlxuXHQgKiAgICAgIC8gXFwgICAgIC8gXFwgICAgIC0tPiAgICAvICAgXFwgICAgLyBcXFxuXHQgKiAgICAgLSAgIC0gIEIgICAgIEIgICAgICAgID5CICAgICBCICA9ICAgPVxuXHQgKiAgICAgICAgICAgLyBcXCAgIC8gXFwgICAgICAgLyBcXCAgIC8gXFxcblx0ICogICAgICAgICAgPSAgID0gPSAgID0gICAgIC0gICAtID0gICA9XG5cdCAqL1xuICAgIGlmICggcy5jb2xvciA9PT0gUkVEICkge1xuICAgICAgICBuLnBhcmVudC5jb2xvciA9IFJFRCA7XG4gICAgICAgIHMuY29sb3IgPSBCTEFDSyA7XG4gICAgICAgIGlmICggbiA9PT0gbi5wYXJlbnQubGVmdCApIHJvdGF0ZV9sZWZ0KCBuLnBhcmVudCApIDtcbiAgICAgICAgZWxzZSByb3RhdGVfcmlnaHQoIG4ucGFyZW50ICkgO1xuICAgICAgICBkZWxldGVfY2FzZTQoIG4gKSA7XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBnbyB0byBjYXNlIDMuXG4gICAgZWxzZSBkZWxldGVfY2FzZTMoIG4gKSA7XG5cbn1cbiJdfQ==