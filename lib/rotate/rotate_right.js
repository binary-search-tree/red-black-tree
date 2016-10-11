"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotate_right = rotate_right;
/**
 * Rotate tree right. (see https://en.wikipedia.org/wiki/Tree_rotation)
 * /!\ This swaps the references to A and B.
 *
 *         B                A
 *        / \              / \
 *       A   c     ->     a   B
 *      / \                  / \
 *     a   b                b   c
 *
 *
 * @param {Node} B - The root of the tree.
 *
 */

function rotate_right(B) {

  var A = B.left;
  var a = A.left;
  var b = A.right;
  var c = B.right;

  var _ref = [B.key, A.key];
  A.key = _ref[0];
  B.key = _ref[1];
  var _ref2 = [B.color, A.color];
  A.color = _ref2[0];
  B.color = _ref2[1];


  B.left = a;
  B.right = A;

  A.left = b;
  A.right = c;

  a.parent = B;
  b.parent = A;
  c.parent = A;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3RhdGUvcm90YXRlX3JpZ2h0LmpzIl0sIm5hbWVzIjpbInJvdGF0ZV9yaWdodCIsIkIiLCJBIiwibGVmdCIsImEiLCJiIiwicmlnaHQiLCJjIiwia2V5IiwiY29sb3IiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZWdCQSxZLEdBQUFBLFk7QUFmaEI7Ozs7Ozs7Ozs7Ozs7OztBQWVPLFNBQVNBLFlBQVQsQ0FBd0JDLENBQXhCLEVBQTRCOztBQUVsQyxNQUFNQyxJQUFJRCxFQUFFRSxJQUFaO0FBQ0EsTUFBTUMsSUFBSUYsRUFBRUMsSUFBWjtBQUNBLE1BQU1FLElBQUlILEVBQUVJLEtBQVo7QUFDQSxNQUFNQyxJQUFJTixFQUFFSyxLQUFaOztBQUxrQyxhQU9oQixDQUFDTCxFQUFFTyxHQUFILEVBQVNOLEVBQUVNLEdBQVgsQ0FQZ0I7QUFPakNOLElBQUVNLEdBUCtCO0FBT3pCUCxJQUFFTyxHQVB1QjtBQUFBLGNBUVosQ0FBQ1AsRUFBRVEsS0FBSCxFQUFXUCxFQUFFTyxLQUFiLENBUlk7QUFRakNQLElBQUVPLEtBUitCO0FBUXZCUixJQUFFUSxLQVJxQjs7O0FBVWxDUixJQUFFRSxJQUFGLEdBQVNDLENBQVQ7QUFDQUgsSUFBRUssS0FBRixHQUFVSixDQUFWOztBQUVBQSxJQUFFQyxJQUFGLEdBQVNFLENBQVQ7QUFDQUgsSUFBRUksS0FBRixHQUFVQyxDQUFWOztBQUVBSCxJQUFFTSxNQUFGLEdBQVdULENBQVg7QUFDQUksSUFBRUssTUFBRixHQUFXUixDQUFYO0FBQ0FLLElBQUVHLE1BQUYsR0FBV1IsQ0FBWDtBQUVBIiwiZmlsZSI6InJvdGF0ZV9yaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUm90YXRlIHRyZWUgcmlnaHQuIChzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJlZV9yb3RhdGlvbilcbiAqIC8hXFwgVGhpcyBzd2FwcyB0aGUgcmVmZXJlbmNlcyB0byBBIGFuZCBCLlxuICpcbiAqICAgICAgICAgQiAgICAgICAgICAgICAgICBBXG4gKiAgICAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAgQSAgIGMgICAgIC0+ICAgICBhICAgQlxuICogICAgICAvIFxcICAgICAgICAgICAgICAgICAgLyBcXFxuICogICAgIGEgICBiICAgICAgICAgICAgICAgIGIgICBjXG4gKlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gQiAtIFRoZSByb290IG9mIHRoZSB0cmVlLlxuICpcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlX3JpZ2h0ICggQiApIHtcblxuXHRjb25zdCBBID0gQi5sZWZ0O1xuXHRjb25zdCBhID0gQS5sZWZ0IDtcblx0Y29uc3QgYiA9IEEucmlnaHQgO1xuXHRjb25zdCBjID0gQi5yaWdodCA7XG5cblx0W0Eua2V5ICwgQi5rZXldID0gW0Iua2V5ICwgQS5rZXldIDtcblx0W0EuY29sb3IgLCBCLmNvbG9yXSA9IFtCLmNvbG9yICwgQS5jb2xvcl0gO1xuXG5cdEIubGVmdCA9IGEgO1xuXHRCLnJpZ2h0ID0gQSA7XG5cblx0QS5sZWZ0ID0gYiA7XG5cdEEucmlnaHQgPSBjIDtcblxuXHRhLnBhcmVudCA9IEIgO1xuXHRiLnBhcmVudCA9IEEgO1xuXHRjLnBhcmVudCA9IEEgO1xuXG59XG4iXX0=