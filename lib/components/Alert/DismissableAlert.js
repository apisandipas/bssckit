"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("./index");

var _consts = require("../../utils/consts");

var _Fade = _interopRequireDefault(require("../../utils/Fade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  appearance: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DismissButton = _styledComponents["default"].button(_templateObject());

var DismissableAlert = function DismissableAlert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      Tag = props.tag,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["className", "closeClassName", "closeAriaLabel", "tag", "isOpen", "toggle", "children", "transition", "fade", "innerRef"]);

  var alertTransition = _objectSpread({}, _Fade["default"].defaultProps, {}, transition, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return _react["default"].createElement(_Fade["default"], _extends({}, attributes, alertTransition, {
    tag: _index.Alert,
    "in": isOpen,
    role: "alert",
    innerRef: innerRef
  }), children, toggle ? _react["default"].createElement(DismissButton, {
    type: "button",
    "aria-label": closeAriaLabel,
    onClick: toggle
  }, _react["default"].createElement(_index.AlertDismissIcon, {
    "aria-hidden": "true",
    "aria-label": closeAriaLabel,
    onClick: toggle
  }, "\xD7")) : null);
};

DismissableAlert.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  closeClassName: _propTypes["default"].string,
  closeAriaLabel: _propTypes["default"].string,
  color: _propTypes["default"].string,
  fade: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool,
  toggle: _propTypes["default"].func,
  tag: _consts.tagPropType,
  transition: _propTypes["default"].shape(_Fade["default"].propTypes),
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string, _propTypes["default"].func])
};
DismissableAlert.defaultProps = {
  dismissible: true,
  isOpen: true,
  tag: _index.Alert,
  closeAriaLabel: 'Close',
  fade: true,
  transition: _objectSpread({}, _Fade["default"].defaultProps, {
    unmountOnExit: true
  })
};
var _default = DismissableAlert;
exports["default"] = _default;