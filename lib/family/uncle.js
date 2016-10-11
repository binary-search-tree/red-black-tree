'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.uncle = uncle;

var _grandparent = require('./grandparent');

/**
 * Computes the uncle of the input node when the grandparent is guaranteed to
 * exist.
 *
 * @param {Node} node - The input node.
 * @returns {Node}
 */
function uncle(node) {
	var g = (0, _grandparent.grandparent)(node);
	// assert( g !== null ) ;
	// this can never happen
	if (node.parent === g.left) return g.right.isleaf() ? null : g.right;else return g.left.isleaf() ? null : g.left;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYW1pbHkvdW5jbGUuanMiXSwibmFtZXMiOlsidW5jbGUiLCJub2RlIiwiZyIsInBhcmVudCIsImxlZnQiLCJyaWdodCIsImlzbGVhZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLEssR0FBQUEsSzs7QUFUaEI7O0FBRUE7Ozs7Ozs7QUFPTyxTQUFTQSxLQUFULENBQWlCQyxJQUFqQixFQUF3QjtBQUM5QixLQUFNQyxJQUFJLDhCQUFhRCxJQUFiLENBQVY7QUFDQTtBQUNBO0FBQ0EsS0FBS0EsS0FBS0UsTUFBTCxLQUFnQkQsRUFBRUUsSUFBdkIsRUFDRSxPQUFPRixFQUFFRyxLQUFGLENBQVFDLE1BQVIsS0FBb0IsSUFBcEIsR0FBMkJKLEVBQUVHLEtBQXBDLENBREYsS0FHRSxPQUFPSCxFQUFFRSxJQUFGLENBQU9FLE1BQVAsS0FBbUIsSUFBbkIsR0FBMEJKLEVBQUVFLElBQW5DO0FBQ0YiLCJmaWxlIjoidW5jbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFuZHBhcmVudCB9IGZyb20gJy4vZ3JhbmRwYXJlbnQnIDtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgdW5jbGUgb2YgdGhlIGlucHV0IG5vZGUgd2hlbiB0aGUgZ3JhbmRwYXJlbnQgaXMgZ3VhcmFudGVlZCB0b1xuICogZXhpc3QuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIGlucHV0IG5vZGUuXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuY2xlICggbm9kZSApIHtcblx0Y29uc3QgZyA9IGdyYW5kcGFyZW50KCBub2RlICk7XG5cdC8vIGFzc2VydCggZyAhPT0gbnVsbCApIDtcblx0Ly8gdGhpcyBjYW4gbmV2ZXIgaGFwcGVuXG5cdGlmICggbm9kZS5wYXJlbnQgPT09IGcubGVmdCApXG5cdCAgcmV0dXJuIGcucmlnaHQuaXNsZWFmKCApID8gbnVsbCA6IGcucmlnaHQgO1xuXHRlbHNlXG5cdCAgcmV0dXJuIGcubGVmdC5pc2xlYWYoICkgPyBudWxsIDogZy5sZWZ0IDtcbn1cbiJdfQ==