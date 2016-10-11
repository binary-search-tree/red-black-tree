"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotate_left = rotate_left;
/**
 * Rotate tree left. (see https://en.wikipedia.org/wiki/Tree_rotation)
 * /!\ This swaps the references to A and B.
 *
 *         A                B
 *        / \              / \
 *       a   B     ->     A   c
 *          / \          / \
 *         b   c        a   b
 *
 *
 * @param {Node} A - The root of the tree.
 *
 */

function rotate_left(A) {

  var B = A.right;
  var a = A.left;
  var b = B.left;
  var c = B.right;

  var _ref = [B.key, A.key];
  A.key = _ref[0];
  B.key = _ref[1];
  var _ref2 = [B.color, A.color];
  A.color = _ref2[0];
  B.color = _ref2[1];


  A.left = B;
  A.right = c;

  B.left = a;
  B.right = b;

  a.parent = B;
  b.parent = B;
  c.parent = A;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3RhdGUvcm90YXRlX2xlZnQuanMiXSwibmFtZXMiOlsicm90YXRlX2xlZnQiLCJBIiwiQiIsInJpZ2h0IiwiYSIsImxlZnQiLCJiIiwiYyIsImtleSIsImNvbG9yIiwicGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7OztRQWVnQkEsVyxHQUFBQSxXO0FBZmhCOzs7Ozs7Ozs7Ozs7Ozs7QUFlTyxTQUFTQSxXQUFULENBQXVCQyxDQUF2QixFQUEyQjs7QUFFakMsTUFBTUMsSUFBSUQsRUFBRUUsS0FBWjtBQUNBLE1BQU1DLElBQUlILEVBQUVJLElBQVo7QUFDQSxNQUFNQyxJQUFJSixFQUFFRyxJQUFaO0FBQ0EsTUFBTUUsSUFBSUwsRUFBRUMsS0FBWjs7QUFMaUMsYUFPZixDQUFDRCxFQUFFTSxHQUFILEVBQVNQLEVBQUVPLEdBQVgsQ0FQZTtBQU9oQ1AsSUFBRU8sR0FQOEI7QUFPeEJOLElBQUVNLEdBUHNCO0FBQUEsY0FRWCxDQUFDTixFQUFFTyxLQUFILEVBQVdSLEVBQUVRLEtBQWIsQ0FSVztBQVFoQ1IsSUFBRVEsS0FSOEI7QUFRdEJQLElBQUVPLEtBUm9COzs7QUFVakNSLElBQUVJLElBQUYsR0FBU0gsQ0FBVDtBQUNBRCxJQUFFRSxLQUFGLEdBQVVJLENBQVY7O0FBRUFMLElBQUVHLElBQUYsR0FBU0QsQ0FBVDtBQUNBRixJQUFFQyxLQUFGLEdBQVVHLENBQVY7O0FBRUFGLElBQUVNLE1BQUYsR0FBV1IsQ0FBWDtBQUNBSSxJQUFFSSxNQUFGLEdBQVdSLENBQVg7QUFDQUssSUFBRUcsTUFBRixHQUFXVCxDQUFYO0FBQ0EiLCJmaWxlIjoicm90YXRlX2xlZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJvdGF0ZSB0cmVlIGxlZnQuIChzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVHJlZV9yb3RhdGlvbilcbiAqIC8hXFwgVGhpcyBzd2FwcyB0aGUgcmVmZXJlbmNlcyB0byBBIGFuZCBCLlxuICpcbiAqICAgICAgICAgQSAgICAgICAgICAgICAgICBCXG4gKiAgICAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAgYSAgIEIgICAgIC0+ICAgICBBICAgY1xuICogICAgICAgICAgLyBcXCAgICAgICAgICAvIFxcXG4gKiAgICAgICAgIGIgICBjICAgICAgICBhICAgYlxuICpcbiAqXG4gKiBAcGFyYW0ge05vZGV9IEEgLSBUaGUgcm9vdCBvZiB0aGUgdHJlZS5cbiAqXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZV9sZWZ0ICggQSApIHtcblxuXHRjb25zdCBCID0gQS5yaWdodCA7XG5cdGNvbnN0IGEgPSBBLmxlZnQgO1xuXHRjb25zdCBiID0gQi5sZWZ0IDtcblx0Y29uc3QgYyA9IEIucmlnaHQgO1xuXG5cdFtBLmtleSAsIEIua2V5XSA9IFtCLmtleSAsIEEua2V5XSA7XG5cdFtBLmNvbG9yICwgQi5jb2xvcl0gPSBbQi5jb2xvciAsIEEuY29sb3JdIDtcblxuXHRBLmxlZnQgPSBCIDtcblx0QS5yaWdodCA9IGMgO1xuXG5cdEIubGVmdCA9IGEgO1xuXHRCLnJpZ2h0ID0gYiA7XG5cblx0YS5wYXJlbnQgPSBCIDtcblx0Yi5wYXJlbnQgPSBCIDtcblx0Yy5wYXJlbnQgPSBBIDtcbn1cbiJdfQ==