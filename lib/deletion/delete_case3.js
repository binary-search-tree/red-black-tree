'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.delete_case3 = delete_case3;

var _ = require('..');

var _delete_case = require('./delete_case1');

var _delete_case2 = require('./delete_case4');

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *   - n is not the root
 *   - n's sibling is black
 *
 * @param {Node} n - The input node.
 */
function delete_case3(n) {

    var s = (0, _.sibling)(n);

    /**
     * If n's parent is black and n's sibling's children are black, then
        * repaint n's sibling red. Now all root-leaft paths going through n's
        * parent have a black height of b - 1. We recurse thus on n's parent.
     *
     *           B                      >B
     *         /   \                  /     \
     *      >B       B               B       R
     *      / \     / \     -->    /   \    / \
     *     -   -  B     B         -     - B     B
     *           / \   / \               / \   / \
     *          -   - -   -             -   - -   -
     */
    if (n.parent.color === _.BLACK && s.left.color === _.BLACK && s.right.color === _.BLACK) {
        s.color = _.RED;
        (0, _delete_case.delete_case1)(n.parent);
    }

    // Otherwise, go to case 4.
    else (0, _delete_case2.delete_case4)(n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWxldGlvbi9kZWxldGVfY2FzZTMuanMiXSwibmFtZXMiOlsiZGVsZXRlX2Nhc2UzIiwibiIsInMiLCJwYXJlbnQiLCJjb2xvciIsImxlZnQiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFlZ0JBLFksR0FBQUEsWTs7QUFmaEI7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVTyxTQUFTQSxZQUFULENBQXdCQyxDQUF4QixFQUE0Qjs7QUFFL0IsUUFBTUMsSUFBSSxlQUFTRCxDQUFULENBQVY7O0FBRUg7Ozs7Ozs7Ozs7Ozs7QUFhRyxRQUNNQSxFQUFFRSxNQUFGLENBQVNDLEtBQVQsWUFBRixJQUNFRixFQUFFRyxJQUFGLENBQU9ELEtBQVAsWUFERixJQUVFRixFQUFFSSxLQUFGLENBQVFGLEtBQVIsWUFITixFQUlFO0FBQ0VGLFVBQUVFLEtBQUY7QUFDQSx1Q0FBY0gsRUFBRUUsTUFBaEI7QUFDSDs7QUFFRDtBQVRBLFNBVUssZ0NBQWNGLENBQWQ7QUFFUiIsImZpbGUiOiJkZWxldGVfY2FzZTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCTEFDSyAsIFJFRCAsIHNpYmxpbmcgfSBmcm9tICcuLicgO1xuXG5pbXBvcnQgeyBkZWxldGVfY2FzZTEgfSBmcm9tICcuL2RlbGV0ZV9jYXNlMScgO1xuaW1wb3J0IHsgZGVsZXRlX2Nhc2U0IH0gZnJvbSAnLi9kZWxldGVfY2FzZTQnIDtcblxuLyoqXG4gKiBQcmVjb25kaXRpb25zOlxuICogICAtIG4gaXMgYmxhY2tcbiAqICAgLSBhbGwgcm9vdC1sZWFmIHBhdGhzIGdvaW5nIHRocm91Z2ggbiBoYXZlIGEgYmxhY2sgaGVpZ2h0IG9mIGIgLSAxXG4gKiAgIC0gYWxsIG90aGVyIHJvb3QtbGVhZiBwYXRocyBoYXZlIGEgYmxhY2sgaGVpZ2h0IG9mIGJcbiAqICAgLSBuIGlzIG5vdCB0aGUgcm9vdFxuICogICAtIG4ncyBzaWJsaW5nIGlzIGJsYWNrXG4gKlxuICogQHBhcmFtIHtOb2RlfSBuIC0gVGhlIGlucHV0IG5vZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVfY2FzZTMgKCBuICkge1xuXG4gICAgY29uc3QgcyA9IHNpYmxpbmcoIG4gKSA7XG5cblx0LyoqXG5cdCAqIElmIG4ncyBwYXJlbnQgaXMgYmxhY2sgYW5kIG4ncyBzaWJsaW5nJ3MgY2hpbGRyZW4gYXJlIGJsYWNrLCB0aGVuXG4gICAgICogcmVwYWludCBuJ3Mgc2libGluZyByZWQuIE5vdyBhbGwgcm9vdC1sZWFmdCBwYXRocyBnb2luZyB0aHJvdWdoIG4nc1xuICAgICAqIHBhcmVudCBoYXZlIGEgYmxhY2sgaGVpZ2h0IG9mIGIgLSAxLiBXZSByZWN1cnNlIHRodXMgb24gbidzIHBhcmVudC5cblx0ICpcblx0ICogICAgICAgICAgIEIgICAgICAgICAgICAgICAgICAgICAgPkJcblx0ICogICAgICAgICAvICAgXFwgICAgICAgICAgICAgICAgICAvICAgICBcXFxuXHQgKiAgICAgID5CICAgICAgIEIgICAgICAgICAgICAgICBCICAgICAgIFJcblx0ICogICAgICAvIFxcICAgICAvIFxcICAgICAtLT4gICAgLyAgIFxcICAgIC8gXFxcblx0ICogICAgIC0gICAtICBCICAgICBCICAgICAgICAgLSAgICAgLSBCICAgICBCXG5cdCAqICAgICAgICAgICAvIFxcICAgLyBcXCAgICAgICAgICAgICAgIC8gXFwgICAvIFxcXG5cdCAqICAgICAgICAgIC0gICAtIC0gICAtICAgICAgICAgICAgIC0gICAtIC0gICAtXG5cdCAqL1xuICAgIGlmIChcbiAgICAgICAgKCBuLnBhcmVudC5jb2xvciA9PT0gQkxBQ0sgKSAmJlxuICAgICAgICAoIHMubGVmdC5jb2xvciA9PT0gQkxBQ0sgKSAmJlxuICAgICAgICAoIHMucmlnaHQuY29sb3IgPT09IEJMQUNLIClcbiAgICApIHtcbiAgICAgICAgcy5jb2xvciA9IFJFRCA7XG4gICAgICAgIGRlbGV0ZV9jYXNlMSggbi5wYXJlbnQgKSA7XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBnbyB0byBjYXNlIDQuXG4gICAgZWxzZSBkZWxldGVfY2FzZTQoIG4gKSA7XG5cbn1cbiJdfQ==