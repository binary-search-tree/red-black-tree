"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grandparent = grandparent;
/**
 * Computes the grandparent (parent of parent) of the input node.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
function grandparent(node) {

  // assert((node !== null) && (node.parent !== null));
  // We only call this function when node HAS a grandparent
  return node.parent.parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYW1pbHkvZ3JhbmRwYXJlbnQuanMiXSwibmFtZXMiOlsiZ3JhbmRwYXJlbnQiLCJub2RlIiwicGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7OztRQU1nQkEsVyxHQUFBQSxXO0FBTmhCOzs7Ozs7QUFNTyxTQUFTQSxXQUFULENBQXVCQyxJQUF2QixFQUE4Qjs7QUFFcEM7QUFDQTtBQUNBLFNBQU9BLEtBQUtDLE1BQUwsQ0FBWUEsTUFBbkI7QUFFQSIsImZpbGUiOiJncmFuZHBhcmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29tcHV0ZXMgdGhlIGdyYW5kcGFyZW50IChwYXJlbnQgb2YgcGFyZW50KSBvZiB0aGUgaW5wdXQgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBUaGUgaW5wdXQgbm9kZS5cbiAqIEByZXR1cm5zIHtOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ3JhbmRwYXJlbnQgKCBub2RlICkge1xuXG5cdC8vIGFzc2VydCgobm9kZSAhPT0gbnVsbCkgJiYgKG5vZGUucGFyZW50ICE9PSBudWxsKSk7XG5cdC8vIFdlIG9ubHkgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gbm9kZSBIQVMgYSBncmFuZHBhcmVudFxuXHRyZXR1cm4gbm9kZS5wYXJlbnQucGFyZW50O1xuXG59XG4iXX0=