"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replace_node = replace_node;
/**
 * Replaces node <code>A</code> by node <code>B</code>.
 *
 * @param {Node} A - The node to replace.
 * @param {Node} B - The replacement node.
 */
function replace_node(A, B) {

  // assert( A.parent !== null ) ;
  // we never apply delete_one_child on the root so we are safe

  if (A === A.parent.left) A.parent.left = B;else A.parent.right = B;

  B.parent = A.parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWxldGlvbi9yZXBsYWNlX25vZGUuanMiXSwibmFtZXMiOlsicmVwbGFjZV9ub2RlIiwiQSIsIkIiLCJwYXJlbnQiLCJsZWZ0IiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWdCQSxZLEdBQUFBLFk7QUFOaEI7Ozs7OztBQU1PLFNBQVNBLFlBQVQsQ0FBd0JDLENBQXhCLEVBQTRCQyxDQUE1QixFQUFnQzs7QUFFdEM7QUFDQTs7QUFFQSxNQUFLRCxNQUFNQSxFQUFFRSxNQUFGLENBQVNDLElBQXBCLEVBQTJCSCxFQUFFRSxNQUFGLENBQVNDLElBQVQsR0FBZ0JGLENBQWhCLENBQTNCLEtBRUtELEVBQUVFLE1BQUYsQ0FBU0UsS0FBVCxHQUFpQkgsQ0FBakI7O0FBRUxBLElBQUVDLE1BQUYsR0FBV0YsRUFBRUUsTUFBYjtBQUVBIiwiZmlsZSI6InJlcGxhY2Vfbm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVwbGFjZXMgbm9kZSA8Y29kZT5BPC9jb2RlPiBieSBub2RlIDxjb2RlPkI8L2NvZGU+LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gQSAtIFRoZSBub2RlIHRvIHJlcGxhY2UuXG4gKiBAcGFyYW0ge05vZGV9IEIgLSBUaGUgcmVwbGFjZW1lbnQgbm9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2Vfbm9kZSAoIEEgLCBCICkge1xuXG5cdC8vIGFzc2VydCggQS5wYXJlbnQgIT09IG51bGwgKSA7XG5cdC8vIHdlIG5ldmVyIGFwcGx5IGRlbGV0ZV9vbmVfY2hpbGQgb24gdGhlIHJvb3Qgc28gd2UgYXJlIHNhZmVcblxuXHRpZiAoIEEgPT09IEEucGFyZW50LmxlZnQgKSBBLnBhcmVudC5sZWZ0ID0gQiA7XG5cblx0ZWxzZSBBLnBhcmVudC5yaWdodCA9IEIgO1xuXG5cdEIucGFyZW50ID0gQS5wYXJlbnQgO1xuXG59XG4iXX0=