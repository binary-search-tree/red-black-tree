'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.delete_one_child = delete_one_child;

var _ = require('..');

var _replace_node = require('./replace_node');

var _delete_case = require('./delete_case1');

/**
 * Delete a node <code>n</code> that has at most a single non-leaf child.
 *
 * Precondition:
 *   - n has at most one non-leaf child.
 *   - if n has a non-leaf child, then it is its left child.
 *
 * @param {Node} n - The node to delete.
 */
function delete_one_child(n) {

    // Precondition: n has at most one non-leaf child.
    // assert( n.right.isleaf() || n.left.isleaf());

    // const child = n.right.isleaf() ? n.left : n.right;
    // n.right is always a LEAF because either n is a subtree predecessor or it
    // is the only child of its parent by the red-black tree properties
    var child = n.left;

    // replace n with its left child
    (0, _replace_node.replace_node)(n, child);

    // If n is black, deleting it reduces the black-height of every path going
    // through it by 1.
    if (n.color === _.BLACK) {

        // We can easily fix this when its left child is an
        // internal red node: change the color of the left child to black and
        // replace n with it.
        if (child.color === _.RED) child.color = _.BLACK;

        // Otherwise, there are more things to fix.
        else (0, _delete_case.delete_case1)(child);
    }

    // else {
    //    If n is red then its child can only be black. Replacing n with its
    //    child suffices.
    // }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWxldGlvbi9kZWxldGVfb25lX2NoaWxkLmpzIl0sIm5hbWVzIjpbImRlbGV0ZV9vbmVfY2hpbGQiLCJuIiwiY2hpbGQiLCJsZWZ0IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7O1FBY2dCQSxnQixHQUFBQSxnQjs7QUFkaEI7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNPLFNBQVNBLGdCQUFULENBQTRCQyxDQUE1QixFQUFnQzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFNQyxRQUFRRCxFQUFFRSxJQUFoQjs7QUFFQTtBQUNBLG9DQUFjRixDQUFkLEVBQWtCQyxLQUFsQjs7QUFFQTtBQUNBO0FBQ0EsUUFBS0QsRUFBRUcsS0FBRixZQUFMLEVBQXlCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQSxZQUFLRixNQUFNRSxLQUFOLFVBQUwsRUFBMkJGLE1BQU1FLEtBQU47O0FBRTNCO0FBRkEsYUFHSywrQkFBY0YsS0FBZDtBQUVSOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBRUgiLCJmaWxlIjoiZGVsZXRlX29uZV9jaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJMQUNLICwgUkVEIH0gZnJvbSAnLi4nIDtcblxuaW1wb3J0IHsgcmVwbGFjZV9ub2RlIH0gZnJvbSAnLi9yZXBsYWNlX25vZGUnIDtcbmltcG9ydCB7IGRlbGV0ZV9jYXNlMSB9IGZyb20gJy4vZGVsZXRlX2Nhc2UxJyA7XG5cbi8qKlxuICogRGVsZXRlIGEgbm9kZSA8Y29kZT5uPC9jb2RlPiB0aGF0IGhhcyBhdCBtb3N0IGEgc2luZ2xlIG5vbi1sZWFmIGNoaWxkLlxuICpcbiAqIFByZWNvbmRpdGlvbjpcbiAqICAgLSBuIGhhcyBhdCBtb3N0IG9uZSBub24tbGVhZiBjaGlsZC5cbiAqICAgLSBpZiBuIGhhcyBhIG5vbi1sZWFmIGNoaWxkLCB0aGVuIGl0IGlzIGl0cyBsZWZ0IGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbiAtIFRoZSBub2RlIHRvIGRlbGV0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZV9vbmVfY2hpbGQgKCBuICkge1xuXG4gICAgLy8gUHJlY29uZGl0aW9uOiBuIGhhcyBhdCBtb3N0IG9uZSBub24tbGVhZiBjaGlsZC5cbiAgICAvLyBhc3NlcnQoIG4ucmlnaHQuaXNsZWFmKCkgfHwgbi5sZWZ0LmlzbGVhZigpKTtcblxuICAgIC8vIGNvbnN0IGNoaWxkID0gbi5yaWdodC5pc2xlYWYoKSA/IG4ubGVmdCA6IG4ucmlnaHQ7XG4gICAgLy8gbi5yaWdodCBpcyBhbHdheXMgYSBMRUFGIGJlY2F1c2UgZWl0aGVyIG4gaXMgYSBzdWJ0cmVlIHByZWRlY2Vzc29yIG9yIGl0XG4gICAgLy8gaXMgdGhlIG9ubHkgY2hpbGQgb2YgaXRzIHBhcmVudCBieSB0aGUgcmVkLWJsYWNrIHRyZWUgcHJvcGVydGllc1xuICAgIGNvbnN0IGNoaWxkID0gbi5sZWZ0IDtcblxuICAgIC8vIHJlcGxhY2UgbiB3aXRoIGl0cyBsZWZ0IGNoaWxkXG4gICAgcmVwbGFjZV9ub2RlKCBuICwgY2hpbGQgKSA7XG5cbiAgICAvLyBJZiBuIGlzIGJsYWNrLCBkZWxldGluZyBpdCByZWR1Y2VzIHRoZSBibGFjay1oZWlnaHQgb2YgZXZlcnkgcGF0aCBnb2luZ1xuICAgIC8vIHRocm91Z2ggaXQgYnkgMS5cbiAgICBpZiAoIG4uY29sb3IgPT09IEJMQUNLICkge1xuXG4gICAgICAgIC8vIFdlIGNhbiBlYXNpbHkgZml4IHRoaXMgd2hlbiBpdHMgbGVmdCBjaGlsZCBpcyBhblxuICAgICAgICAvLyBpbnRlcm5hbCByZWQgbm9kZTogY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgbGVmdCBjaGlsZCB0byBibGFjayBhbmRcbiAgICAgICAgLy8gcmVwbGFjZSBuIHdpdGggaXQuXG4gICAgICAgIGlmICggY2hpbGQuY29sb3IgPT09IFJFRCApIGNoaWxkLmNvbG9yID0gQkxBQ0sgO1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhlcmUgYXJlIG1vcmUgdGhpbmdzIHRvIGZpeC5cbiAgICAgICAgZWxzZSBkZWxldGVfY2FzZTEoIGNoaWxkICkgO1xuXG4gICAgfVxuXG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICAgSWYgbiBpcyByZWQgdGhlbiBpdHMgY2hpbGQgY2FuIG9ubHkgYmUgYmxhY2suIFJlcGxhY2luZyBuIHdpdGggaXRzXG4gICAgLy8gICAgY2hpbGQgc3VmZmljZXMuXG4gICAgLy8gfVxuXG59XG4iXX0=