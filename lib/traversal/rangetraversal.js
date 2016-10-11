"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.rangetraversal = rangetraversal;

var _marked = [rangetraversal].map(regeneratorRuntime.mark);

/**
 * Yields all the keys in the tree rooted at <code>root</code> that lie in the
 * interval <code>[left, right[</code>, in order.
 *
 * @param {Function} compare - The comparison function.
 * @param {Node} root - The root of the tree.
 * @param {Key} left - The lower bound of the interval.
 * @param {Key} right - The upper bound of the interval.
 * @returns {Iterator}
 */
function rangetraversal(compare, root, left, right) {
	return regeneratorRuntime.wrap(function rangetraversal$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!(compare(root.key, left) < 0)) {
						_context.next = 5;
						break;
					}

					if (root.right.isleaf()) {
						_context.next = 3;
						break;
					}

					return _context.delegateYield(rangetraversal(compare, root.right, left, right), "t0", 3);

				case 3:
					_context.next = 16;
					break;

				case 5:
					if (!(compare(root.key, right) >= 0)) {
						_context.next = 10;
						break;
					}

					if (root.left.isleaf()) {
						_context.next = 8;
						break;
					}

					return _context.delegateYield(rangetraversal(compare, root.left, left, right), "t1", 8);

				case 8:
					_context.next = 16;
					break;

				case 10:
					if (root.left.isleaf()) {
						_context.next = 12;
						break;
					}

					return _context.delegateYield(rangetraversal(compare, root.left, left, right), "t2", 12);

				case 12:
					_context.next = 14;
					return root.key;

				case 14:
					if (root.right.isleaf()) {
						_context.next = 16;
						break;
					}

					return _context.delegateYield(rangetraversal(compare, root.right, left, right), "t3", 16);

				case 16:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmF2ZXJzYWwvcmFuZ2V0cmF2ZXJzYWwuanMiXSwibmFtZXMiOlsicmFuZ2V0cmF2ZXJzYWwiLCJjb21wYXJlIiwicm9vdCIsImxlZnQiLCJyaWdodCIsImtleSIsImlzbGVhZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFVaUJBLGMsR0FBQUEsYzs7ZUFBQUEsYzs7QUFWakI7Ozs7Ozs7Ozs7QUFVTyxTQUFVQSxjQUFWLENBQTJCQyxPQUEzQixFQUFxQ0MsSUFBckMsRUFBNENDLElBQTVDLEVBQW1EQyxLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFREgsUUFBU0MsS0FBS0csR0FBZCxFQUFvQkYsSUFBcEIsSUFBNkIsQ0FGNUI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsU0FLQ0QsS0FBS0UsS0FBTCxDQUFXRSxNQUFYLEVBTEQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUNBSzhCTixlQUFnQkMsT0FBaEIsRUFBMEJDLEtBQUtFLEtBQS9CLEVBQXVDRCxJQUF2QyxFQUE4Q0MsS0FBOUMsQ0FMOUI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsV0FPSUgsUUFBU0MsS0FBS0csR0FBZCxFQUFvQkQsS0FBcEIsS0FBK0IsQ0FQbkM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsU0FVQ0YsS0FBS0MsSUFBTCxDQUFVRyxNQUFWLEVBVkQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUNBVTZCTixlQUFnQkMsT0FBaEIsRUFBMEJDLEtBQUtDLElBQS9CLEVBQXNDQSxJQUF0QyxFQUE2Q0MsS0FBN0MsQ0FWN0I7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsU0FlQ0YsS0FBS0MsSUFBTCxDQUFVRyxNQUFWLEVBZkQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUNBZTZCTixlQUFnQkMsT0FBaEIsRUFBMEJDLEtBQUtDLElBQS9CLEVBQXNDQSxJQUF0QyxFQUE2Q0MsS0FBN0MsQ0FmN0I7O0FBQUE7QUFBQTtBQUFBLFlBZ0JDRixLQUFLRyxHQWhCTjs7QUFBQTtBQUFBLFNBaUJDSCxLQUFLRSxLQUFMLENBQVdFLE1BQVgsRUFqQkQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbUNBaUI4Qk4sZUFBZ0JDLE9BQWhCLEVBQTBCQyxLQUFLRSxLQUEvQixFQUF1Q0QsSUFBdkMsRUFBOENDLEtBQTlDLENBakI5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJyYW5nZXRyYXZlcnNhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogWWllbGRzIGFsbCB0aGUga2V5cyBpbiB0aGUgdHJlZSByb290ZWQgYXQgPGNvZGU+cm9vdDwvY29kZT4gdGhhdCBsaWUgaW4gdGhlXG4gKiBpbnRlcnZhbCA8Y29kZT5bbGVmdCwgcmlnaHRbPC9jb2RlPiwgaW4gb3JkZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyZSAtIFRoZSBjb21wYXJpc29uIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtOb2RlfSByb290IC0gVGhlIHJvb3Qgb2YgdGhlIHRyZWUuXG4gKiBAcGFyYW0ge0tleX0gbGVmdCAtIFRoZSBsb3dlciBib3VuZCBvZiB0aGUgaW50ZXJ2YWwuXG4gKiBAcGFyYW0ge0tleX0gcmlnaHQgLSBUaGUgdXBwZXIgYm91bmQgb2YgdGhlIGludGVydmFsLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHJhbmdldHJhdmVyc2FsICggY29tcGFyZSAsIHJvb3QgLCBsZWZ0ICwgcmlnaHQgKSB7XG5cblx0aWYgKCBjb21wYXJlKCByb290LmtleSAsIGxlZnQgKSA8IDAgKSB7XG5cdFx0Ly8gSWYgdGhlIHJvb3QgbGllcyB0byB0aGUgbGVmdCBvZiB0aGUgaW50ZXJ2YWwsIHdlIGNhbiBkaXNjYXJkIHRoZVxuXHRcdC8vIGVudGlyZSBsZWZ0IHN1YnRyZWUuXG5cdFx0aWYgKCAhcm9vdC5yaWdodC5pc2xlYWYoKSApIHlpZWxkICpyYW5nZXRyYXZlcnNhbCggY29tcGFyZSAsIHJvb3QucmlnaHQgLCBsZWZ0ICwgcmlnaHQgKTtcblx0fVxuXHRlbHNlIGlmICggY29tcGFyZSggcm9vdC5rZXkgLCByaWdodCApID49IDAgKSB7XG5cdFx0Ly8gSWYgdGhlIHJvb3QgbGllcyB0byB0aGUgcmlnaHQgb2YgdGhlIGludGVydmFsLCB3ZSBjYW4gZGlzY2FyZCB0aGVcblx0XHQvLyBlbnRpcmUgcmlnaHQgc3VidHJlZS5cblx0XHRpZiAoICFyb290LmxlZnQuaXNsZWFmKCkgKSB5aWVsZCAqcmFuZ2V0cmF2ZXJzYWwoIGNvbXBhcmUgLCByb290LmxlZnQgLCBsZWZ0ICwgcmlnaHQgKTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBPdGhlcndpc2UganVzdCByZWN1cnNlIG9uIGJvdGggc3VidHJlZXMgYW5kIHlpZWxkIHRoZSByb290IGluXG5cdFx0Ly8gYmV0d2Vlbi5cblx0XHRpZiAoICFyb290LmxlZnQuaXNsZWFmKCkgKSB5aWVsZCAqcmFuZ2V0cmF2ZXJzYWwoIGNvbXBhcmUgLCByb290LmxlZnQgLCBsZWZ0ICwgcmlnaHQgKTtcblx0XHR5aWVsZCByb290LmtleSA7XG5cdFx0aWYgKCAhcm9vdC5yaWdodC5pc2xlYWYoKSApIHlpZWxkICpyYW5nZXRyYXZlcnNhbCggY29tcGFyZSAsIHJvb3QucmlnaHQgLCBsZWZ0ICwgcmlnaHQgKTtcblx0fVxuXG59XG4iXX0=