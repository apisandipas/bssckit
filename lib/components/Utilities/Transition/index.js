"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transition = exports.TransitionWithoutForwardingRef = exports.EXITED = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.UNMOUNTED = exports.TransitionFade = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n          visibility: hidden;\n          opacity: 0;\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          visibility: visible;\n          opacity: 1;\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          transition: visibility ", "ms ", " ", "ms,\n            opacity ", "ms ", " ", "ms;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          display: none;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getDelay = function getDelay(_ref) {
  var delay = _ref.delay;
  return delay || 0;
};

var getDuration = function getDuration(_ref2) {
  var duration = _ref2.duration;
  return duration || 500;
};

var getTimingFunction = function getTimingFunction(_ref3) {
  var timingFunc = _ref3.timingFunc;
  return timingFunc || 'ease-out';
};

var getStatusChangeDelay = function getStatusChangeDelay(props) {
  return getDelay(props) + getDuration(props);
}; // TransitionFade is default transition component using
// opacity and visibility.


var TransitionFade = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.hidden ? (0, _styledComponents.css)(_templateObject2()) : null;
}, function (props) {
  return props.transition ? (0, _styledComponents.css)(_templateObject3(), getDuration, getTimingFunction, getDelay, getDuration, getTimingFunction, getDelay) : '';
}, function (props) {
  return props.visible ? (0, _styledComponents.css)(_templateObject4()) : (0, _styledComponents.css)(_templateObject5());
});

exports.TransitionFade = TransitionFade;
var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
exports.EXITING = EXITING;
var EXITED = 'exited';
exports.EXITED = EXITED;

var TransitionWithoutForwardingRef =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TransitionWithoutForwardingRef, _React$Component);

  function TransitionWithoutForwardingRef(props) {
    var _this;

    _classCallCheck(this, TransitionWithoutForwardingRef);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TransitionWithoutForwardingRef).call(this, props));
    _this.state = {
      status: UNMOUNTED,
      initiallyVisible: !props.hidden
    };
    _this.refTransition = _this.props.innerRef || _react["default"].createRef();
    _this.nextCallback = null;
    return _this;
  }

  _createClass(TransitionWithoutForwardingRef, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var initiallyVisible = this.state.initiallyVisible;
      var noInitialEnter = this.props.noInitialEnter;

      if (initiallyVisible) {
        if (noInitialEnter) {
          // eslint-disable-next-line react/no-did-mount-set-state
          this.setState({
            status: ENTERED
          });
        } else {
          this.forceUpdate(); // eslint-disable-next-line react/no-did-mount-set-state

          this.setState({
            status: ENTERING
          }, function () {
            _this2.setNextCallback(function () {
              return _this2.setState({
                status: ENTERED
              });
            }, getStatusChangeDelay(_this2.props));
          });
        }
      } else {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
          status: EXITED
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      var _this$props = this.props,
          noEnter = _this$props.noEnter,
          noExit = _this$props.noExit,
          hideOnExit = _this$props.hideOnExit;
      var nextStatus = null;
      var nextStatusCallback = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.hidden) {
          if (status === ENTERING || status === ENTERED) {
            if (noExit) {
              nextStatus = EXITED;
            } else {
              nextStatus = EXITING;

              nextStatusCallback = function nextStatusCallback() {
                return _this3.setState({
                  status: EXITED
                });
              };
            }
          }
        } else if (status === EXITING || status === EXITED) {
          if (noEnter) {
            nextStatus = ENTERED;
          } else if (hideOnExit) {
            // If we were hidden (display: none), then we should first render
            // component with normal display.
            // This special case renders components without hidden, then renders
            // it with as visible, and after transition it will update status
            // to ENTERED.
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
              status: UNMOUNTED
            }, function () {
              _this3.setNextCallback(function () {
                return _this3.setState({
                  status: ENTERING
                }, function () {
                  _this3.setNextCallback(function () {
                    return _this3.setState({
                      status: ENTERED
                    });
                  }, getStatusChangeDelay(_this3.props));
                });
              }, 0);
            });
            return;
          } else {
            nextStatus = ENTERING;

            nextStatusCallback = function nextStatusCallback() {
              return _this3.setState({
                status: ENTERED
              });
            };
          }
        }
      }

      if (nextStatus != null) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          status: nextStatus
        }, function () {
          _this3.setNextCallback(nextStatusCallback, getStatusChangeDelay(_this3.props));
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.nextCallback != null) {
        this.nextCallback.cancel();
      }
    }
  }, {
    key: "setNextCallback",
    value: function setNextCallback(callback, delay) {
      var _this4 = this;

      // This method helps to avoid multiple simultaneous callbacks. It clears
      // alreadu set callbacks and schedules new one.
      if (this.nextCallback != null) {
        this.nextCallback.cancel();
      }

      var active = true;

      this.nextCallback = function () {
        if (!active) {
          return;
        }

        active = false;
        _this4.nextCallback = null;

        if (callback != null) {
          callback();
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      setTimeout(this.nextCallback, delay);
      return this.nextCallback;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      // Force repaint for transitions to work
      // eslint-disable-next-line no-unused-expressions
      this.refTransition.current && this.refTransition.current.scrollTop;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          TransitionComponent = _this$props2.TransitionComponent,
          children = _this$props2.children,
          noExit = _this$props2.noExit,
          noEnter = _this$props2.noEnter,
          noInitialEnter = _this$props2.noInitialEnter,
          hideOnExit = _this$props2.hideOnExit,
          transitionProps = _objectWithoutProperties(_this$props2, ["innerRef", "TransitionComponent", "children", "noExit", "noEnter", "noInitialEnter", "hideOnExit"]);

      var status = this.state.status;
      delete transitionProps.hidden;
      /* We can't use `hidden` as it just hides element */

      transitionProps.hidden = status === EXITED && hideOnExit;
      transitionProps.visible = status === ENTERING || status === ENTERED ? 1 : 0;
      transitionProps.transition = (status === ENTERING || status === ENTERED) && !noEnter || (status === EXITING || status === EXITED) && !noExit ? 1 : 0;
      return _react["default"].createElement(TransitionComponent, _extends({
        ref: this.refTransition
      }, transitionProps), children);
    }
  }]);

  return TransitionWithoutForwardingRef;
}(_react["default"].Component);

exports.TransitionWithoutForwardingRef = TransitionWithoutForwardingRef;
TransitionWithoutForwardingRef.defaultProps = {
  TransitionComponent: TransitionFade
};

var Transition = _react["default"].forwardRef(function (props, ref) {
  return _react["default"].createElement(TransitionWithoutForwardingRef, _extends({
    innerRef: ref
  }, props));
});

exports.Transition = Transition;