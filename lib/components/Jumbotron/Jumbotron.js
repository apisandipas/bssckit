"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledBreakpoints = require("styled-breakpoints");

var _theme = _interopRequireDefault(require("../../theme"));

var _themeFunctions = require("../../utils/themeFunctions");

var _base = require("../Utilities/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 2rem;\n  background-color: ", ";\n\n  ", " {\n    padding: ", ";\n  }\n\n  ", " {\n    padding: ", ";\n  }\n\n  ", ";\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    border-radius: ", ";\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      padding: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      padding-right: ", ";\n      padding-left: ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var padding = function padding(props) {
  if (props.fluid) {
    return (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getPadding)(props, 'jumbotron', 'fluidRight'), (0, _themeFunctions.getPadding)(props, 'jumbotron', 'fluidLeft'));
  } else if (props.pill) {
    return (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getPadding)(props, 'jumbotron', 'pill'));
  }

  return (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getPadding)(props, 'jumbotron', 'default'));
};

var borderRadius = function borderRadius(props) {
  if (props.fluid || props.noRadius) {
    return (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getBorderRadius)(props, 'jumbotron', 'noRadius'));
  } else if (props.pill) {
    return (0, _styledComponents.css)(_templateObject5(), (0, _themeFunctions.getBorderRadius)(props, 'jumbotron', 'pill'));
  }

  return (0, _styledComponents.css)(_templateObject6(), (0, _themeFunctions.getBorderRadius)(props, 'jumbotron', 'lg'));
};

var Jumbotron = (0, _styledComponents["default"])(_base.Div)(_templateObject7(), function (props) {
  return (0, _themeFunctions.getColor)(props, 'jumbotron', 'backgroundColor');
}, (0, _styledBreakpoints.up)('sm'), function (props) {
  if (props.pill) {
    return (0, _themeFunctions.getPadding)(props, 'jumbotron', 'lgPill');
  }

  return (0, _themeFunctions.getPadding)(props, 'jumbotron', 'sm');
}, (0, _styledBreakpoints.down)('md'), function (props) {
  if (props.pill) {
    return (0, _themeFunctions.getPadding)(props, 'jumbotron', 'smPill');
  }

  return (0, _themeFunctions.getPadding)(props, 'jumbotron', 'sm');
}, function (props) {
  return padding(props);
}, function (props) {
  return borderRadius(props);
});
Jumbotron.defaultProps = {
  theme: _theme["default"]
};
var _default = Jumbotron;
exports["default"] = _default;