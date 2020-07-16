"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColor = exports.getBreakpointSize = exports.getConcreteBreakpointSize = exports.getHeight = exports.getWidth = exports.getFontFamily = exports.getFontSize = exports.getFontWeight = exports.getBorderRadius = exports.getBorder = exports.getPadding = exports.getMargin = exports.getBoxShadow = exports.makeGetter = exports.getConfigProperty = void 0;

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * After much head scratcing on my own, this code was partially lifted (gifted?) from styled-bootstrap-components with the idea of later refactoring
 */
var getConfigProperty = function getConfigProperty(theme) {
  var getterFunction = function getterFunction() {
    for (var _len2 = arguments.length, path = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      path[_key2] = arguments[_key2];
    }

    return getConfigProperty.apply(void 0, [theme].concat(path));
  };

  var receiveValueSafe = function receiveValueSafe(initialValue) {
    var value = initialValue;

    for (var _len3 = arguments.length, path = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      path[_key3 - 1] = arguments[_key3];
    }

    for (var i = 0; value !== undefined && i < path.length; i += 1) {
      var tempValue = value[path[i]];

      while (typeof tempValue === 'function') {
        tempValue = tempValue(getterFunction);
      }

      value = tempValue;
    }

    return value;
  };

  for (var _len = arguments.length, propertyPath = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    propertyPath[_key - 1] = arguments[_key];
  }

  var value = receiveValueSafe.apply(void 0, [theme].concat(propertyPath)); // Use default theme if property is not found in current theme

  if (value === undefined) {
    return receiveValueSafe.apply(void 0, [_theme["default"]].concat(propertyPath));
  }

  return value;
}; // Helper for creating basic getter function for acessor's config properies


exports.getConfigProperty = getConfigProperty;

var makeGetter = function makeGetter(property) {
  return function (props, accessor) {
    for (var _len4 = arguments.length, path = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      path[_key4 - 2] = arguments[_key4];
    }

    return getConfigProperty.apply(void 0, [props.theme, accessor, property].concat(path));
  };
}; // ---------------------------------------------------------------------------


exports.makeGetter = makeGetter;
var getBoxShadow = makeGetter('boxShadow');
exports.getBoxShadow = getBoxShadow;
var getMargin = makeGetter('margin');
exports.getMargin = getMargin;
var getPadding = makeGetter('padding');
exports.getPadding = getPadding;
var getBorder = makeGetter('border');
exports.getBorder = getBorder;
var getBorderRadius = makeGetter('borderRadius');
exports.getBorderRadius = getBorderRadius;
var getFontWeight = makeGetter('fontWeight');
exports.getFontWeight = getFontWeight;
var getFontSize = makeGetter('fontSize');
exports.getFontSize = getFontSize;
var getFontFamily = makeGetter('fontFamily');
exports.getFontFamily = getFontFamily;
var getWidth = makeGetter('width');
exports.getWidth = getWidth;
var getHeight = makeGetter('height');
exports.getHeight = getHeight;

var getConcreteBreakpointSize = function getConcreteBreakpointSize(props, size) {
  return getConfigProperty(props.theme, 'breakpoints', size);
};

exports.getConcreteBreakpointSize = getConcreteBreakpointSize;

var getBreakpointSize = function getBreakpointSize(props) {
  if (props.sm || props.expandSm) {
    return getConcreteBreakpointSize(props.theme, 'sm');
  } else if (props.md || props.expandMd) {
    return getConcreteBreakpointSize(props.theme, 'md');
  } else if (props.lg || props.expandLg) {
    return getConcreteBreakpointSize(props.theme, 'lg');
  } else if (props.xl || props.expandXl) {
    return getConcreteBreakpointSize(props.theme, 'xl');
  }

  return '';
};

exports.getBreakpointSize = getBreakpointSize;

var getColor = function getColor(props, accessor) {
  var availableColors = Object.keys(_theme["default"].palette);

  for (var _len5 = arguments.length, path = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    path[_key5 - 2] = arguments[_key5];
  }

  for (var i = 0; i < availableColors.length; i += 1) {
    var color = availableColors[i];

    if (props[color]) {
      return getConfigProperty.apply(void 0, [props.theme, accessor, 'colors', color].concat(path));
    }
  } // Default


  return getConfigProperty.apply(void 0, [props.theme, accessor, 'colors', 'default'].concat(path));
};

exports.getColor = getColor;