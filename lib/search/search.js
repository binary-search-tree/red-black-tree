"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.search = search;
/**
 * Search for the first node whose key equals <code>key</code>.
 *
 * @param {Function} compare - The comparison function.
 * @param {Node} root - The root of the tree to scan.
 * @param {Key} key - The key to search for.
 * @returns {Node}
 */
function search(compare, root, key) {

	while (true) {

		var d = compare(key, root.key);

		if (d === 0) {
			return root;
		} else if (d < 0) {
			root = root.left;
		} else {
			root = root.right;
		}

		if (root.isleaf()) {
			return null;
		}
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2gvc2VhcmNoLmpzIl0sIm5hbWVzIjpbInNlYXJjaCIsImNvbXBhcmUiLCJyb290Iiwia2V5IiwiZCIsImxlZnQiLCJyaWdodCIsImlzbGVhZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFRZ0JBLE0sR0FBQUEsTTtBQVJoQjs7Ozs7Ozs7QUFRTyxTQUFTQSxNQUFULENBQWtCQyxPQUFsQixFQUEyQkMsSUFBM0IsRUFBaUNDLEdBQWpDLEVBQXVDOztBQUU3QyxRQUFRLElBQVIsRUFBZTs7QUFFZCxNQUFNQyxJQUFJSCxRQUFTRSxHQUFULEVBQWNELEtBQUtDLEdBQW5CLENBQVY7O0FBRUEsTUFBS0MsTUFBTSxDQUFYLEVBQWU7QUFDZCxVQUFPRixJQUFQO0FBQ0EsR0FGRCxNQUlLLElBQUtFLElBQUksQ0FBVCxFQUFhO0FBQ2pCRixVQUFPQSxLQUFLRyxJQUFaO0FBQ0EsR0FGSSxNQUlBO0FBQ0pILFVBQU9BLEtBQUtJLEtBQVo7QUFDQTs7QUFFRCxNQUFLSixLQUFLSyxNQUFMLEVBQUwsRUFBcUI7QUFDcEIsVUFBTyxJQUFQO0FBQ0E7QUFFRDtBQUVEIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2VhcmNoIGZvciB0aGUgZmlyc3Qgbm9kZSB3aG9zZSBrZXkgZXF1YWxzIDxjb2RlPmtleTwvY29kZT4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyZSAtIFRoZSBjb21wYXJpc29uIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtOb2RlfSByb290IC0gVGhlIHJvb3Qgb2YgdGhlIHRyZWUgdG8gc2Nhbi5cbiAqIEBwYXJhbSB7S2V5fSBrZXkgLSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaCAoIGNvbXBhcmUsIHJvb3QsIGtleSApIHtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCBkID0gY29tcGFyZSgga2V5LCByb290LmtleSApO1xuXG5cdFx0aWYgKCBkID09PSAwICkge1xuXHRcdFx0cmV0dXJuIHJvb3Q7XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoIGQgPCAwICkge1xuXHRcdFx0cm9vdCA9IHJvb3QubGVmdDtcblx0XHR9XG5cblx0XHRlbHNlIHtcblx0XHRcdHJvb3QgPSByb290LnJpZ2h0O1xuXHRcdH1cblxuXHRcdGlmICggcm9vdC5pc2xlYWYoKSApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==