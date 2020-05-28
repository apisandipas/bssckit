"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _theme = _interopRequireDefault(require("../../theme"));

var _base = require("../Utilities/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding-left: ", ";\n  margin-bottom: ", ";\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    & > a,\n    & > li {\n      border-right: ", ";\n      border-left: ", ";\n      border-radius: ", ";\n      &:first-child {\n        border-top: ", ";\n      }\n      &:last-child {\n        border-bottom: ", ";\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getBorder = function getBorder(props) {
  return props.flush && (0, _styledComponents.css)(_templateObject(), (0, _styledTools.theme)('listGroup.border.aLiFlushRight'), (0, _styledTools.theme)('listGroup.border.aLiFlushLeft'), (0, _styledTools.theme)('listGroup.borderRadius.noRadius'), (0, _styledTools.theme)('listGroup.border.aLiFlushFirstChildTop'), (0, _styledTools.theme)('listGroup.border.aLiFlushLastChildBottom'));
};

var ListGroup = (0, _styledComponents["default"])(_base.Ul)(_templateObject2(), (0, _styledTools.theme)('listGroup.padding.left'), (0, _styledTools.theme)('listGroup.margin.bottom'), function (props) {
  return getBorder(props);
});
ListGroup.defaultProps = {
  theme: _theme["default"]
};
var _default = ListGroup;
exports["default"] = _default;