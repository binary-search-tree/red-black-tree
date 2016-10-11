'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delete_case1 = delete_case1;

var _delete_case = require('./delete_case2');

/**
 * Preconditions:
 *   - n is black
 *   - all root-leaf paths going through n have a black height of b - 1
 *   - all other root-leaf paths have a black height of b
 *
 * @param {Node} n - The input node.
 */
function delete_case1(n) {

  // If n is the root, there is nothing to do: all paths go through n, and n
  // is black.
  if (n.parent !== null) (0, _delete_case.delete_case2)(n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWxldGlvbi9kZWxldGVfY2FzZTEuanMiXSwibmFtZXMiOlsiZGVsZXRlX2Nhc2UxIiwibiIsInBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFVZ0JBLFksR0FBQUEsWTs7QUFWaEI7O0FBRUE7Ozs7Ozs7O0FBUU8sU0FBU0EsWUFBVCxDQUF3QkMsQ0FBeEIsRUFBNEI7O0FBRS9CO0FBQ0E7QUFDQSxNQUFLQSxFQUFFQyxNQUFGLEtBQWEsSUFBbEIsRUFBeUIsK0JBQWNELENBQWQ7QUFFNUIiLCJmaWxlIjoiZGVsZXRlX2Nhc2UxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVsZXRlX2Nhc2UyIH0gZnJvbSAnLi9kZWxldGVfY2FzZTInIDtcblxuLyoqXG4gKiBQcmVjb25kaXRpb25zOlxuICogICAtIG4gaXMgYmxhY2tcbiAqICAgLSBhbGwgcm9vdC1sZWFmIHBhdGhzIGdvaW5nIHRocm91Z2ggbiBoYXZlIGEgYmxhY2sgaGVpZ2h0IG9mIGIgLSAxXG4gKiAgIC0gYWxsIG90aGVyIHJvb3QtbGVhZiBwYXRocyBoYXZlIGEgYmxhY2sgaGVpZ2h0IG9mIGJcbiAqXG4gKiBAcGFyYW0ge05vZGV9IG4gLSBUaGUgaW5wdXQgbm9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZV9jYXNlMSAoIG4gKSB7XG5cbiAgICAvLyBJZiBuIGlzIHRoZSByb290LCB0aGVyZSBpcyBub3RoaW5nIHRvIGRvOiBhbGwgcGF0aHMgZ28gdGhyb3VnaCBuLCBhbmQgblxuICAgIC8vIGlzIGJsYWNrLlxuICAgIGlmICggbi5wYXJlbnQgIT09IG51bGwgKSBkZWxldGVfY2FzZTIoIG4gKSA7XG5cbn1cbiJdfQ==