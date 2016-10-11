'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = Node;

var _Leaf = require('./Leaf');

/**
 * An internal node. This node can be red or black.
 *
 * @constructor
 * @param {Number} color - The color of the node.
 * @param {Key} key - The key of the node.
 * @returns {Node}
 */
function Node(color, key) {
  this.color = color;
  this.left = new _Leaf.Leaf(this);
  this.right = new _Leaf.Leaf(this);
  this.parent = null;
  this.key = key;
}

/**
 * Returns <code>true</code> if the <code>Node</code> object is a leaf. This
 * always returns <code>false</code>.
 *
 * @returns {Boolean}
 */
Node.prototype.isleaf = function () {
  return false;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZHQvTm9kZS5qcyJdLCJuYW1lcyI6WyJOb2RlIiwiY29sb3IiLCJrZXkiLCJsZWZ0IiwicmlnaHQiLCJwYXJlbnQiLCJwcm90b3R5cGUiLCJpc2xlYWYiXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCQSxJLEdBQUFBLEk7O0FBVmhCOztBQUVBOzs7Ozs7OztBQVFPLFNBQVNBLElBQVQsQ0FBZ0JDLEtBQWhCLEVBQXdCQyxHQUF4QixFQUE4QjtBQUNwQyxPQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLRSxJQUFMLEdBQVksZUFBVSxJQUFWLENBQVo7QUFDQSxPQUFLQyxLQUFMLEdBQWEsZUFBVSxJQUFWLENBQWI7QUFDQSxPQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBLE9BQUtILEdBQUwsR0FBV0EsR0FBWDtBQUNBOztBQUVEOzs7Ozs7QUFNQUYsS0FBS00sU0FBTCxDQUFlQyxNQUFmLEdBQXdCLFlBQWE7QUFBRSxTQUFPLEtBQVA7QUFBZ0IsQ0FBdkQiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExlYWYgfSBmcm9tICcuL0xlYWYnIDtcblxuLyoqXG4gKiBBbiBpbnRlcm5hbCBub2RlLiBUaGlzIG5vZGUgY2FuIGJlIHJlZCBvciBibGFjay5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2xvciAtIFRoZSBjb2xvciBvZiB0aGUgbm9kZS5cbiAqIEBwYXJhbSB7S2V5fSBrZXkgLSBUaGUga2V5IG9mIHRoZSBub2RlLlxuICogQHJldHVybnMge05vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBOb2RlICggY29sb3IgLCBrZXkgKSB7XG5cdHRoaXMuY29sb3IgPSBjb2xvciA7XG5cdHRoaXMubGVmdCA9IG5ldyBMZWFmKCB0aGlzICkgO1xuXHR0aGlzLnJpZ2h0ID0gbmV3IExlYWYoIHRoaXMgKSA7XG5cdHRoaXMucGFyZW50ID0gbnVsbCA7XG5cdHRoaXMua2V5ID0ga2V5IDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSA8Y29kZT5Ob2RlPC9jb2RlPiBvYmplY3QgaXMgYSBsZWFmLiBUaGlzXG4gKiBhbHdheXMgcmV0dXJucyA8Y29kZT5mYWxzZTwvY29kZT4uXG4gKlxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbk5vZGUucHJvdG90eXBlLmlzbGVhZiA9IGZ1bmN0aW9uICggKSB7IHJldHVybiBmYWxzZSA7IH0gO1xuIl19