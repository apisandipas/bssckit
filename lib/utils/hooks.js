"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTooltip = useTooltip;

var _react = require("react");

var _reactPopper = require("react-popper");

var _deepmerge = _interopRequireDefault(require("deepmerge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useTooltip() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      referenceElement = _useState2[0],
      setReferenceElement = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      popperElement = _useState4[0],
      setPopperElement = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      arrowElement = _useState6[0],
      setArrowElement = _useState6[1];

  var finalOptions = (0, _deepmerge["default"])(options, {
    placement: 'auto'
  });

  if (!finalOptions.modifiers) {
    finalOptions.modifiers = [];
  }

  finalOptions.modifiers.push({
    name: 'arrow',
    options: {
      element: arrowElement
    }
  });

  var _usePopper = (0, _reactPopper.usePopper)(referenceElement, popperElement, finalOptions),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes;

  return {
    setReferenceElement: setReferenceElement,
    setPopperElement: setPopperElement,
    setArrowElement: setArrowElement,
    styles: styles,
    attributes: attributes,
    placement: attributes && attributes.popper && attributes.popper['data-popper-placement']
  };
}