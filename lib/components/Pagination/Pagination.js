"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = _interopRequireDefault(require("../../theme"));

var _themeFunctions = require("../../utils/themeFunctions");

var _base = require("../Utilities/base");

var _PageItem = _interopRequireDefault(require("./PageItem"));

var _PageLink = _interopRequireDefault(require("./PageLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-left: 0;\n  list-style: none;\n\n  ", "\n  ", "\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      ", ":first-child {\n        a {\n          border-top-left-radius: ", ";\n          border-bottom-left-radius: ", ";\n        }\n      }\n\n      ", ":last-child {\n        a {\n          border-top-right-radius: ", ";\n          border-bottom-right-radius: ", ";\n        }\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      ", ":first-child {\n        a {\n          border-top-left-radius: ", ";\n          border-bottom-left-radius: ", ";\n        }\n      }\n\n      ", ":last-child {\n        a {\n          border-top-right-radius: ", ";\n          border-bottom-right-radius: ", ";\n        }\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", ":first-child {\n        a {\n          border-top-left-radius-left: ", ";\n          border-bottom-left-radius: ", ";\n        }\n      }\n\n      ", ":last-child {\n        a {\n          border-top-right-radius: ", ";\n          border-bottom-right-radius: ", ";\n        }\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      a {\n        padding: ", ";\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      a {\n        padding: ", ";\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      a {\n        padding: ", ";\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var padding = function padding(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getPadding)(props, 'paginationLink', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getPadding)(props, 'paginationLink', 'sm'));
  } else {
    return (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getPadding)(props, 'paginationLink', 'default'));
  }
};

var borderRadius = function borderRadius(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject4(), _PageItem["default"], (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'lg'), (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'lg'), _PageItem["default"], (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'lg'), (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject5(), _PageItem["default"], (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'sm'), (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'sm'), _PageItem["default"], (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'sm'), (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'sm'));
  } else {
    return (0, _styledComponents.css)(_templateObject6(), _PageItem["default"], (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'default'), (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'default'), _PageItem["default"], (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'default'), (0, _themeFunctions.getBorderRadius)(props, 'paginationLink', 'default'));
  }
};

var Pagination = (0, _styledComponents["default"])(_base.Ul)(_templateObject7(), function (props) {
  return padding(props);
}, function (props) {
  return borderRadius(props);
});
Pagination.defaultProps = {
  theme: _theme["default"]
};
var _default = Pagination;
exports["default"] = _default;