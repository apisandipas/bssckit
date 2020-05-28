"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _theme = _interopRequireDefault(require("../../../theme"));

var _base = require("../../Utilities/base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-top: ", ";\n    margin-bottom: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getMargin = function getMargin(props) {
  return props.subtitle && (0, _styledComponents.css)(_templateObject(), (0, _styledTools.theme)('cardTitle.margin.subtitleTop'), (0, _styledTools.theme)('cardTitle.margin.subtitleBottom'));
};

var getColor = function getColor(props) {
  return props.muted && (0, _styledComponents.css)(_templateObject2(), (0, _styledTools.theme)('cardTitle.colors.default.colorMuted'));
};

var cardTitleStyle = function cardTitleStyle() {
  return (0, _styledComponents.css)(_templateObject3(), (0, _styledTools.theme)('cardTitle.margin.bottom'), function (props) {
    return getMargin(props);
  }, function (props) {
    return getColor(props);
  });
};

var CardTitleH1 = (0, _styledComponents["default"])(_base.H1)(_templateObject4(), cardTitleStyle);
var CardTitleH2 = (0, _styledComponents["default"])(_base.H2)(_templateObject5(), cardTitleStyle);
var CardTitleH3 = (0, _styledComponents["default"])(_base.H3)(_templateObject6(), cardTitleStyle);
var CardTitleH4 = (0, _styledComponents["default"])(_base.H4)(_templateObject7(), cardTitleStyle);
var CardTitleH5 = (0, _styledComponents["default"])(_base.H5)(_templateObject8(), cardTitleStyle);
var CardTitleH6 = (0, _styledComponents["default"])(_base.H6)(_templateObject9(), cardTitleStyle);

var CardTitle = function CardTitle(props) {
  if (props.h1) {
    return _react["default"].createElement(CardTitleH1, props);
  } else if (props.h2) {
    return _react["default"].createElement(CardTitleH2, props);
  } else if (props.h3) {
    return _react["default"].createElement(CardTitleH3, props);
  } else if (props.h4) {
    return _react["default"].createElement(CardTitleH4, props);
  } else if (props.h5) {
    return _react["default"].createElement(CardTitleH5, props);
  } else if (props.h6) {
    return _react["default"].createElement(CardTitleH6, props);
  }

  return _react["default"].createElement(CardTitleH4, props);
};

CardTitle.defaultProps = {
  theme: _theme["default"]
};
var _default = CardTitle;
exports["default"] = _default;