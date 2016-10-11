"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.predecessor = predecessor;
/**
 * Computes the predecessor of the input node, in the subtree rooted at the
 * input node, when this predecessor is guaranteed to exist.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
function predecessor(node) {

  // assert( !node.left.isleaf() ) ;
  var pred = node.left;

  while (!pred.right.isleaf()) {
    pred = pred.right;
  }return pred;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYW1pbHkvcHJlZGVjZXNzb3IuanMiXSwibmFtZXMiOlsicHJlZGVjZXNzb3IiLCJub2RlIiwicHJlZCIsImxlZnQiLCJyaWdodCIsImlzbGVhZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFPZ0JBLFcsR0FBQUEsVztBQVBoQjs7Ozs7OztBQU9PLFNBQVNBLFdBQVQsQ0FBdUJDLElBQXZCLEVBQThCOztBQUVwQztBQUNBLE1BQUlDLE9BQU9ELEtBQUtFLElBQWhCOztBQUVBLFNBQVEsQ0FBQ0QsS0FBS0UsS0FBTCxDQUFXQyxNQUFYLEVBQVQ7QUFBK0JILFdBQU9BLEtBQUtFLEtBQVo7QUFBL0IsR0FFQSxPQUFPRixJQUFQO0FBRUEiLCJmaWxlIjoicHJlZGVjZXNzb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbXB1dGVzIHRoZSBwcmVkZWNlc3NvciBvZiB0aGUgaW5wdXQgbm9kZSwgaW4gdGhlIHN1YnRyZWUgcm9vdGVkIGF0IHRoZVxuICogaW5wdXQgbm9kZSwgd2hlbiB0aGlzIHByZWRlY2Vzc29yIGlzIGd1YXJhbnRlZWQgdG8gZXhpc3QuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIGlucHV0IG5vZGUuXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZWRlY2Vzc29yICggbm9kZSApIHtcblxuXHQvLyBhc3NlcnQoICFub2RlLmxlZnQuaXNsZWFmKCkgKSA7XG5cdGxldCBwcmVkID0gbm9kZS5sZWZ0IDtcblxuXHR3aGlsZSAoICFwcmVkLnJpZ2h0LmlzbGVhZigpICkgcHJlZCA9IHByZWQucmlnaHQgO1xuXG5cdHJldHVybiBwcmVkIDtcblxufVxuIl19