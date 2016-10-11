"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sibling = sibling;
/**
 * Computes the sibling of the input node.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
function sibling(node) {

  // assert((node !== null) && (node.parent !== null));
  // We only use this function when node HAS a sibling so this case can never
  // happen.

  return node === node.parent.left ? node.parent.right : node.parent.left;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYW1pbHkvc2libGluZy5qcyJdLCJuYW1lcyI6WyJzaWJsaW5nIiwibm9kZSIsInBhcmVudCIsImxlZnQiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFNZ0JBLE8sR0FBQUEsTztBQU5oQjs7Ozs7O0FBTU8sU0FBU0EsT0FBVCxDQUFtQkMsSUFBbkIsRUFBMEI7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQSxTQUFRQSxTQUFTQSxLQUFLQyxNQUFMLENBQVlDLElBQXJCLEdBQTRCRixLQUFLQyxNQUFMLENBQVlFLEtBQXhDLEdBQWdESCxLQUFLQyxNQUFMLENBQVlDLElBQXBFO0FBRUEiLCJmaWxlIjoic2libGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29tcHV0ZXMgdGhlIHNpYmxpbmcgb2YgdGhlIGlucHV0IG5vZGUuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIGlucHV0IG5vZGUuXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpYmxpbmcgKCBub2RlICkge1xuXG5cdC8vIGFzc2VydCgobm9kZSAhPT0gbnVsbCkgJiYgKG5vZGUucGFyZW50ICE9PSBudWxsKSk7XG5cdC8vIFdlIG9ubHkgdXNlIHRoaXMgZnVuY3Rpb24gd2hlbiBub2RlIEhBUyBhIHNpYmxpbmcgc28gdGhpcyBjYXNlIGNhbiBuZXZlclxuXHQvLyBoYXBwZW4uXG5cblx0cmV0dXJuICBub2RlID09PSBub2RlLnBhcmVudC5sZWZ0ID8gbm9kZS5wYXJlbnQucmlnaHQgOiBub2RlLnBhcmVudC5sZWZ0IDtcblxufVxuIl19