"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = _interopRequireDefault(require("../../theme"));

var _themeFunctions = require("../../utils/themeFunctions");

var _base = require("../Utilities/base");

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  z-index: 1000;\n  float: left;\n  min-width: 10rem;\n  padding: ", ";\n  margin: ", ";\n  font-size: ", ";\n  color: ", ";\n  text-align: left;\n  list-style: none;\n  background-color: ", ";\n  background-clip: padding-box;\n  border: ", " ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    border-radius: ", ";\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        min-width: 100%;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        display: block;\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        display: none;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        left: 0;\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        right: 0;\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var isLeftOrRight = function isLeftOrRight(props) {
  return props.right ? (0, _styledComponents.css)(_templateObject()) : (0, _styledComponents.css)(_templateObject2());
};

var dropdownMenuHidden = function dropdownMenuHidden(props) {
  return props.hidden ? (0, _styledComponents.css)(_templateObject3()) : (0, _styledComponents.css)(_templateObject4());
};

var isFullWidth = function isFullWidth(props) {
  return props.fullWidth ? (0, _styledComponents.css)(_templateObject5()) : null;
};

var borderRadius = function borderRadius(props) {
  if (props.noRadius) {
    return (0, _styledComponents.css)(_templateObject6(), (0, _themeFunctions.getBorderRadius)(props, 'dropdownMenu', 'noRadius'));
  }

  return (0, _styledComponents.css)(_templateObject7(), (0, _themeFunctions.getBorderRadius)(props, 'dropdownMenu', 'default'));
};

var StyledDiv = (0, _styledComponents["default"])(_base.Div)(_templateObject8(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'dropdownMenu', 'default');
}, function (props) {
  return (0, _themeFunctions.getMargin)(props, 'dropdownMenu', 'default');
}, function (props) {
  return (0, _themeFunctions.getFontSize)(props, 'dropdownMenu', 'default');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'dropdownMenu', 'color');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'dropdownMenu', 'backgroundColor');
}, function (props) {
  return (0, _themeFunctions.getBorder)(props, 'dropdownMenu', 'default');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'dropdownMenu', 'borderColor');
}, function (props) {
  return borderRadius(props);
}, function (props) {
  return dropdownMenuHidden(props);
}, function (props) {
  return isLeftOrRight(props);
}, function (props) {
  return isFullWidth(props);
});
StyledDiv.defaultProps = {
  hidden: false,
  fullWidth: false
};

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    var _this;

    _classCallCheck(this, DropdownMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).call(this, props));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.container = _react["default"].createRef();
    return _this;
  }

  _createClass(DropdownMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addEvents();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      document.addEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(e) {
      var container = this.container.current;

      if (this.props.hidden || container === null) {
        return;
      }

      var containerParent = container.parentNode;

      if ((containerParent === e.target || !containerParent.contains(e.target)) && container !== e.target && !container.contains(e.target)) {
        this.props.toggle();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          alwaysVisible = _this$props.alwaysVisible,
          hidden = _this$props.hidden,
          rest = _objectWithoutProperties(_this$props, ["children", "alwaysVisible", "hidden"]);

      return _react["default"].createElement(StyledDiv, _extends({
        ref: this.container,
        hidden: !alwaysVisible && hidden
      }, rest), children);
    }
  }]);

  return DropdownMenu;
}(_react["default"].Component);

DropdownMenu.propTypes = {
  children: _propTypes["default"].element,
  alwaysVisible: _propTypes["default"].bool,
  hidden: _propTypes["default"].bool.isRequired,
  toggle: _propTypes["default"].func
};
DropdownMenu.defaultProps = {
  alwaysVisible: false,
  hidden: false,
  toggle: function toggle() {},
  theme: _theme["default"]
};
var _default = DropdownMenu;
exports["default"] = _default;