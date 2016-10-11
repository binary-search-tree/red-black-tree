"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.inordertraversal = inordertraversal;

var _marked = [inordertraversal].map(regeneratorRuntime.mark);

/**
 * Traverses the tree rooted at <code>node</code> in order.
 *
 * @param {Node} node - The root of the tree.
 * @returns {Iterator}
 */
function inordertraversal(node) {
	return regeneratorRuntime.wrap(function inordertraversal$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (node.left.isleaf()) {
						_context.next = 2;
						break;
					}

					return _context.delegateYield(inordertraversal(node.left), "t0", 2);

				case 2:
					_context.next = 4;
					return node.key;

				case 4:
					if (node.right.isleaf()) {
						_context.next = 6;
						break;
					}

					return _context.delegateYield(inordertraversal(node.right), "t1", 6);

				case 6:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmF2ZXJzYWwvaW5vcmRlcnRyYXZlcnNhbC5qcyJdLCJuYW1lcyI6WyJpbm9yZGVydHJhdmVyc2FsIiwibm9kZSIsImxlZnQiLCJpc2xlYWYiLCJrZXkiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFNaUJBLGdCLEdBQUFBLGdCOztlQUFBQSxnQjs7QUFOakI7Ozs7OztBQU1PLFNBQVVBLGdCQUFWLENBQTZCQyxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQUEsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLEVBRkE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUNBTUVILGlCQUFrQkMsS0FBS0MsSUFBdkIsQ0FORjs7QUFBQTtBQUFBO0FBQUEsWUFVQUQsS0FBS0csR0FWTDs7QUFBQTtBQUFBLFNBWUFILEtBQUtJLEtBQUwsQ0FBV0YsTUFBWCxFQVpBO0FBQUE7QUFBQTtBQUFBOztBQUFBLG1DQWdCRUgsaUJBQWtCQyxLQUFLSSxLQUF2QixDQWhCRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJpbm9yZGVydHJhdmVyc2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUcmF2ZXJzZXMgdGhlIHRyZWUgcm9vdGVkIGF0IDxjb2RlPm5vZGU8L2NvZGU+IGluIG9yZGVyLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIFRoZSByb290IG9mIHRoZSB0cmVlLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIGlub3JkZXJ0cmF2ZXJzYWwgKCBub2RlICkge1xuXG5cdGlmICggIW5vZGUubGVmdC5pc2xlYWYoKSApIHtcblx0XHQvLyBZaWVsZCB0aGUgbm9kZXMgb24gdGhlIGxlZnQgcmVjdXJzaXZlbHkuIFRob3NlIG5vZGVzIGFyZSBhbGwgc21hbGxlclxuXHRcdC8vIHRoYW4gKG9yIGVxdWFsIHRvKSB0aGUgY3VycmVudCBub2RlIGJ5IHRoZSBiaW5hcnkgc2VhcmNoIHRyZWVcblx0XHQvLyBwcm9wZXJ0aWVzLlxuXHRcdHlpZWxkICppbm9yZGVydHJhdmVyc2FsKCBub2RlLmxlZnQgKTtcblx0fVxuXG5cdC8vIFlpZWxkIHRoZSBjdXJyZW50IG5vZGUuXG5cdHlpZWxkIG5vZGUua2V5IDtcblxuXHRpZiAoICFub2RlLnJpZ2h0LmlzbGVhZigpICkge1xuXHRcdC8vIFlpZWxkIHRoZSBub2RlcyBvbiB0aGUgcmlnaHQgcmVjdXJzaXZlbHkuIFRob3NlIG5vZGVzIGFyZSBhbGwgbGFyZ2VyXG5cdFx0Ly8gdGhhbiAob3IgZXF1YWwgdG8pIHRoZSBjdXJyZW50IG5vZGUgYnkgdGhlIGJpbmFyeSBzZWFyY2ggdHJlZVxuXHRcdC8vIHByb3BlcnRpZXMuXG5cdFx0eWllbGQqIGlub3JkZXJ0cmF2ZXJzYWwoIG5vZGUucmlnaHQgKTtcblx0fVxuXG59XG4iXX0=