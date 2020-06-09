"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledBreakpoints = require("styled-breakpoints");

var _theme = _interopRequireDefault(require("../../../theme"));

var _base = require("../../Utilities/base");

var _themeFunctions = require("../../../utils/themeFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  ", " {\n    max-width: ", ";\n  }\n\n  ", " {\n    max-width: ", ";\n  }\n\n  ", " {\n    max-width: ", ";\n  }\n\n  ", " {\n    max-width: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _styledComponents["default"])(_base.Div)(_templateObject(), function (props) {
  return (0, _themeFunctions.getWidth)(props, 'container', 'default');
}, (0, _styledBreakpoints.up)('sm'), function (props) {
  return props.fluid ? (0, _themeFunctions.getWidth)(props, 'container', 'default') : (0, _themeFunctions.getWidth)(props, 'container', 'fluid', 'sm');
}, (0, _styledBreakpoints.up)('md'), function (props) {
  return props.fluid ? (0, _themeFunctions.getWidth)(props, 'container', 'default') : (0, _themeFunctions.getWidth)(props, 'container', 'fluid', 'md');
}, (0, _styledBreakpoints.up)('lg'), function (props) {
  return props.fluid ? (0, _themeFunctions.getWidth)(props, 'container', 'default') : (0, _themeFunctions.getWidth)(props, 'container', 'fluid', 'lg');
}, (0, _styledBreakpoints.up)('xl'), function (props) {
  return props.fluid ? (0, _themeFunctions.getWidth)(props, 'container', 'default') : (0, _themeFunctions.getWidth)(props, 'container', 'fluid', 'xl');
});
Container.defaultProps = {
  theme: _theme["default"]
};
var _default = Container;
exports["default"] = _default;