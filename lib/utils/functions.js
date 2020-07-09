"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withinRange = exports.getConcreteBreakpointSize = exports.capitalize = exports.Story = exports.pick = exports.omit = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
var omit = function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
};
/**
 * Returns a filtered copy of an object with only the specified keys.
 */


exports.omit = omit;

var pick = function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
};
/**
 * Workaround for hooks in Storybook stories
 */


exports.pick = pick;

var Story = function Story(Component) {
  return function () {
    return _react["default"].createElement(Component, null);
  };
};
/**
 *  Returns Capitalized string
 */


exports.Story = Story;

var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
/**
 * Returns the breakpoint value for the given screen size
 */


exports.capitalize = capitalize;

var getConcreteBreakpointSize = function getConcreteBreakpointSize(props, size) {
  var _props$theme;

  return props === null || props === void 0 ? void 0 : (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.breakpoints[size];
};

exports.getConcreteBreakpointSize = getConcreteBreakpointSize;

var withinRange = function withinRange(first, last) {
  first = Number(first);
  last = Number(last);
  return function (props, propName, componentName) {
    componentName = componentName || 'ANONYMOUS';

    if (props[propName]) {
      var value = props[propName];

      if (typeof value === 'number') {
        return value >= first && value <= last ? null : new Error("".concat(propName, "   in  ").concat(componentName, "  is not within ").concat(first, " to ").concat(last));
      }
    }

    return null;
  };
};

exports.withinRange = withinRange;