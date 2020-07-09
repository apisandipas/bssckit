"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tagPropType = exports.TransitionTimeouts = exports.TransitionPropTypeKeys = exports.themeContexts = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var themeContexts = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
exports.themeContexts = themeContexts;
var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
exports.TransitionPropTypeKeys = TransitionPropTypeKeys;
var TransitionTimeouts = {
  Fade: 150,
  // transition fade
  Collapse: 350,
  // transition collapse
  Modal: 300,
  // modal transition
  Carousel: 600 // carousel transition

};
exports.TransitionTimeouts = TransitionTimeouts;

var tagPropType = _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string, _propTypes["default"].shape({
  $$typeof: _propTypes["default"].symbol,
  render: _propTypes["default"].func
}), _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string, _propTypes["default"].shape({
  $$typeof: _propTypes["default"].symbol,
  render: _propTypes["default"].func
})]))]);

exports.tagPropType = tagPropType;