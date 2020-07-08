"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactPortal = require("react-portal");

var _Transition = require("../Utilities/Transition");

var _theme = _interopRequireDefault(require("../../theme"));

var _ModalContent = _interopRequireDefault(require("./ModalContent"));

var _ModalDialog = _interopRequireDefault(require("./ModalDialog"));

var _ModalBackdrop = _interopRequireDefault(require("./ModalBackdrop"));

var _ModalWrapper = _interopRequireDefault(require("./ModalWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Modal = function Modal(props) {
  var _useState = (0, _react.useState)(props.hidden || false),
      _useState2 = _slicedToArray(_useState, 2),
      isHidden = _useState2[0],
      setIsHidden = _useState2[1];

  var elementMouseDown = (0, _react.useRef)(null);
  var elementTriggerOpen = (0, _react.useRef)(null);
  var refModal = (0, _react.useRef)();
  var refTransition = (0, _react.useRef)();

  if (!props.hidden) {
    elementTriggerOpen.current = document.activeElement;
  }

  (0, _react.useEffect)(function () {
    if (!isHidden) {
      open();
    }

    return function () {
      !isHidden && close();
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (props.hidden !== isHidden) {
      if (!props.hidden) {
        elementTriggerOpen.current = document.activeElement;
      }

      setIsHidden(props.hidden);
      return;
    }

    if (isHidden) {
      close();
    } else if (!isHidden) {
      open();
    }
  }, [props.hidden]);

  function open() {
    refModal.current.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    setTimeout(function () {
      document.body.style.overflow = '';

      if (props.returnFocusAfterClose && elementTriggerOpen.current !== null) {
        elementTriggerOpen.current.focus();
        elementTriggerOpen.current = null;
      }
    }, 500);
  }

  function canToggle() {
    if (props.backdrop === 'static' || props.backdrop === false) {
      return false;
    }

    var _window$getComputedSt = window.getComputedStyle(refTransition.current),
        opacity = _window$getComputedSt.opacity;

    return opacity <= 0.1 || opacity >= 0.9;
  }

  function handleBackdropClick(event) {
    if (event.target !== elementMouseDown.current) {
      return;
    }

    event.stopPropagation();

    if (canToggle() && event.target === refModal.current) {
      props.toggle();
    }
  }

  function handleBackdropMouseDown(event) {
    elementMouseDown.current = event.target;
  }

  var TransitionComponent = props.TransitionComponent,
      ModalWrapperComponent = props.ModalWrapperComponent,
      ModalDialogComponent = props.ModalDialogComponent,
      ModalBackdropComponent = props.ModalBackdropComponent,
      ModalContentComponent = props.ModalContentComponent,
      transitionProps = props.transitionProps,
      wrapperProps = props.wrapperProps,
      dialogProps = props.dialogProps,
      contentProps = props.contentProps,
      backdropProps = props.backdropProps,
      centered = props.centered,
      noRadius = props.noRadius,
      children = props.children,
      backdrop = props.backdrop,
      sm = props.sm,
      lg = props.lg,
      hidden = props.hidden,
      rest = _objectWithoutProperties(props, ["TransitionComponent", "ModalWrapperComponent", "ModalDialogComponent", "ModalBackdropComponent", "ModalContentComponent", "transitionProps", "wrapperProps", "dialogProps", "contentProps", "backdropProps", "centered", "noRadius", "children", "backdrop", "sm", "lg", "hidden"]);

  return _react["default"].createElement(_reactPortal.Portal, null, _react["default"].createElement(TransitionComponent, _extends({
    "data-testid": "ModalTransition",
    hidden: isHidden,
    ref: refTransition
  }, rest, transitionProps), _react["default"].createElement(ModalWrapperComponent, _extends({
    theme: props.theme,
    onMouseDown: handleBackdropMouseDown,
    onClick: handleBackdropClick,
    ref: refModal
  }, wrapperProps), _react["default"].createElement(ModalDialogComponent, _extends({
    theme: props.theme,
    tabIndex: "-1",
    role: "dialog",
    lg: lg,
    sm: sm,
    centered: centered,
    noRadius: noRadius
  }, dialogProps), _react["default"].createElement(ModalContentComponent, _extends({
    theme: props.theme
  }, contentProps), children))), !!backdrop && _react["default"].createElement(ModalBackdropComponent, _extends({
    theme: props.theme,
    backdrop: backdrop
  }, backdropProps))));
};

Modal.defaultProps = {
  theme: _theme["default"],
  TransitionComponent: _Transition.Transition,
  ModalWrapperComponent: _ModalWrapper["default"],
  ModalDialogComponent: _ModalDialog["default"],
  ModalBackdropComponent: _ModalBackdrop["default"],
  ModalContentComponent: _ModalContent["default"],
  backdrop: true,
  returnFocusAfterClose: true,
  toggle: function toggle() {}
};
var _default = Modal;
exports["default"] = _default;