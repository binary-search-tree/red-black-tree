'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debug = debug;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Recursively constructs a prettyprint string for the red-black tree rooted at
 * <code>root</code>.
 *
 * @param {Node} root - The root of the tree.
 * @returns {String}
 */
function debug(root) {

  if (root.isleaf()) return _chalk2.default.bgBlack('L');

  var repr = root.color === _.BLACK ? _chalk2.default.bgBlack(root.key) : _chalk2.default.bgRed(root.key);

  return '(' + debug(root.left) + ', ' + repr + ', ' + debug(root.right) + ')';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWJ1Zy9kZWJ1Zy5qcyJdLCJuYW1lcyI6WyJkZWJ1ZyIsInJvb3QiLCJpc2xlYWYiLCJiZ0JsYWNrIiwicmVwciIsImNvbG9yIiwia2V5IiwiYmdSZWQiLCJsZWZ0IiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBV2dCQSxLLEdBQUFBLEs7O0FBWGhCOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7OztBQU9PLFNBQVNBLEtBQVQsQ0FBaUJDLElBQWpCLEVBQXdCOztBQUU5QixNQUFLQSxLQUFLQyxNQUFMLEVBQUwsRUFBc0IsT0FBTyxnQkFBTUMsT0FBTixDQUFjLEdBQWQsQ0FBUDs7QUFFdEIsTUFBTUMsT0FBT0gsS0FBS0ksS0FBTCxlQUF1QixnQkFBTUYsT0FBTixDQUFjRixLQUFLSyxHQUFuQixDQUF2QixHQUFpRCxnQkFBTUMsS0FBTixDQUFhTixLQUFLSyxHQUFsQixDQUE5RDs7QUFFQSxlQUFXTixNQUFNQyxLQUFLTyxJQUFYLENBQVgsVUFBZ0NKLElBQWhDLFVBQXlDSixNQUFNQyxLQUFLUSxLQUFYLENBQXpDO0FBRUEiLCJmaWxlIjoiZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnIDtcblxuaW1wb3J0IHsgQkxBQ0sgfSBmcm9tICcuLicgO1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IGNvbnN0cnVjdHMgYSBwcmV0dHlwcmludCBzdHJpbmcgZm9yIHRoZSByZWQtYmxhY2sgdHJlZSByb290ZWQgYXRcbiAqIDxjb2RlPnJvb3Q8L2NvZGU+LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gcm9vdCAtIFRoZSByb290IG9mIHRoZSB0cmVlLlxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnICggcm9vdCApIHtcblxuXHRpZiAoIHJvb3QuaXNsZWFmKCApICkgcmV0dXJuIGNoYWxrLmJnQmxhY2soJ0wnKSA7XG5cblx0Y29uc3QgcmVwciA9IHJvb3QuY29sb3IgPT09IEJMQUNLID8gY2hhbGsuYmdCbGFjayhyb290LmtleSkgOiBjaGFsay5iZ1JlZCggcm9vdC5rZXkgKSA7XG5cblx0cmV0dXJuIGAoJHtkZWJ1Zyhyb290LmxlZnQpfSwgJHtyZXByfSwgJHtkZWJ1Zyhyb290LnJpZ2h0KX0pYCA7XG5cbn1cbiJdfQ==