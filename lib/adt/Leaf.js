'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Leaf = Leaf;

var _ = require('..');

/**
 * A black leaf node.
 *
 * @constructor
 * @param {Node} parent - The parent node in the tree.
 * @returns {Leaf}
 */
function Leaf(parent) {
  this.color = _.BLACK;
  this.parent = parent;
}

/**
 * Returns <code>true</code> if the <code>Leaf</code> object is a leaf. This
 * always returns <code>true</code>.
 *
 * @returns {Boolean}
 */
Leaf.prototype.isleaf = function () {
  return true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZHQvTGVhZi5qcyJdLCJuYW1lcyI6WyJMZWFmIiwicGFyZW50IiwiY29sb3IiLCJwcm90b3R5cGUiLCJpc2xlYWYiXSwibWFwcGluZ3MiOiI7Ozs7O1FBU2dCQSxJLEdBQUFBLEk7O0FBVGhCOztBQUVBOzs7Ozs7O0FBT08sU0FBU0EsSUFBVCxDQUFnQkMsTUFBaEIsRUFBeUI7QUFDL0IsT0FBS0MsS0FBTDtBQUNBLE9BQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBOztBQUVEOzs7Ozs7QUFNQUQsS0FBS0csU0FBTCxDQUFlQyxNQUFmLEdBQXdCLFlBQWE7QUFBRSxTQUFPLElBQVA7QUFBZSxDQUF0RCIsImZpbGUiOiJMZWFmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkxBQ0sgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIEEgYmxhY2sgbGVhZiBub2RlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQgLSBUaGUgcGFyZW50IG5vZGUgaW4gdGhlIHRyZWUuXG4gKiBAcmV0dXJucyB7TGVhZn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExlYWYgKCBwYXJlbnQgKSB7XG5cdHRoaXMuY29sb3IgPSBCTEFDSyA7XG5cdHRoaXMucGFyZW50ID0gcGFyZW50IDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSA8Y29kZT5MZWFmPC9jb2RlPiBvYmplY3QgaXMgYSBsZWFmLiBUaGlzXG4gKiBhbHdheXMgcmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPi5cbiAqXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuTGVhZi5wcm90b3R5cGUuaXNsZWFmID0gZnVuY3Rpb24gKCApIHsgcmV0dXJuIHRydWUgOyB9IDtcbiJdfQ==