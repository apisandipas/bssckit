"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = require("../../components/Utilities/base");

var _theme = _interopRequireDefault(require("../../theme"));

var _themeFunctions = require("../../utils/themeFunctions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  border-collapse: collapse;\n  background-color: transparent;\n  & th {\n    text-align: inherit;\n  }\n  & th,\n  & td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: ", "\n      ", ";\n  }\n  & thead th {\n    vertical-align: bottom;\n    border-bottom: ", "\n      ", ";\n  }\n  & tbody + tbody {\n    border-top: ", "\n      ", ";\n  }\n  & + & {\n    background-color: ", ";\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    ", ";\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 1199.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ", ";\n    }\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 991.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ", ";\n    }\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 767.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ", ";\n    }\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 575.98px) {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      ", ";\n    }\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    border: 0;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    background-color: ", ";\n    & th,\n    & td,\n    & thead th {\n      border-color: ", ";\n    }\n    ", ";\n    ", ";\n    ", ";\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    .hover & tbody tr:hover {\n      background-color: ", ";\n    }\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    & tbody tr:nth-of-type(odd) {\n      background-color: ", ";\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    border: 0;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    & thead th {\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    & thead th {\n      color: ", ";\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    & tbody tr:hover {\n      background-color: ", ";\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    & tbody tr:nth-of-type(odd) {\n      background-color: ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: ", " ", ";\n    & th,\n    & td {\n      border: ", " ", ";\n    }\n    & thead th,\n    & thead td {\n      border-bottom-width: 2px;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    & th,\n    & td {\n      padding: 0.3rem;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var tableSmall = function tableSmall(props) {
  return props.sm && (0, _styledComponents.css)(_templateObject());
};

var tableBordered = function tableBordered(props) {
  return props.bordered && (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getBorder)(props, 'table', 'default'), (0, _themeFunctions.getColor)(props, 'table', 'borderedBorderColor'), (0, _themeFunctions.getBorder)(props, 'table', 'default'), (0, _themeFunctions.getColor)(props, 'table', 'borderedBorderColor'));
};

var tableStriped = function tableStriped(props) {
  return props.striped && (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getColor)(props, 'table', 'stripedBackgroundColor'));
};

var tableHover = function tableHover(props) {
  return props.hover && (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getColor)(props, 'table', 'backgroundColorHoverFocus'));
};

var tableHeadDark = function tableHeadDark(props) {
  return props.theadDark && (0, _styledComponents.css)(_templateObject5(), (0, _themeFunctions.getColor)(props, 'table', 'theadDarkColor'), (0, _themeFunctions.getColor)(props, 'table', 'theadDarkBackgroundColor'), (0, _themeFunctions.getColor)(props, 'table', 'theadDarkBorderColor'));
};

var tableHeadLight = function tableHeadLight(props) {
  return props.theadLight && (0, _styledComponents.css)(_templateObject6(), (0, _themeFunctions.getColor)(props, 'table', 'theadLightColor'), (0, _themeFunctions.getColor)(props, 'table', 'theadLightBackgroundColor'), (0, _themeFunctions.getColor)(props, 'table', 'theadLightBorderColor'));
};

var tableDarkBordered = function tableDarkBordered(props) {
  return props.bordered && (0, _styledComponents.css)(_templateObject7());
};

var tableDarkStriped = function tableDarkStriped(props) {
  return props.striped && (0, _styledComponents.css)(_templateObject8(), (0, _themeFunctions.getColor)(props, 'table', 'stripedDarkBackgroundColor'));
};

var tableDarkHover = function tableDarkHover(props) {
  return (0, _styledComponents.css)(_templateObject9(), (0, _themeFunctions.getColor)(props, 'table', 'darkBackgroundColorHoverFocus'));
};

var tableDark = function tableDark(props) {
  return (props.tableDark || props.dark) && (0, _styledComponents.css)(_templateObject10(), (0, _themeFunctions.getColor)(props, 'table', 'darkColor'), (0, _themeFunctions.getColor)(props, 'table', 'darkBackgroundColor'), (0, _themeFunctions.getColor)(props, 'table', 'darkBorderColor'), tableDarkBordered, tableDarkStriped, tableDarkHover);
};

var tableResponsiveBordered = function tableResponsiveBordered(props) {
  return props.bordered && (0, _styledComponents.css)(_templateObject11());
}; // TODO: refactor to get getBreakpoint util function


var tableResponsiveSmall = function tableResponsiveSmall(props) {
  return props.responsiveSm && (0, _styledComponents.css)(_templateObject12(), tableResponsiveBordered);
};

var tableResponsiveMedium = function tableResponsiveMedium(props) {
  return props.responsiveMd && (0, _styledComponents.css)(_templateObject13(), tableResponsiveBordered);
};

var tableResponsiveLarge = function tableResponsiveLarge(props) {
  return props.responsiveLg && (0, _styledComponents.css)(_templateObject14(), tableResponsiveBordered);
};

var tableResponsiveXLarge = function tableResponsiveXLarge(props) {
  return props.responsiveXl && (0, _styledComponents.css)(_templateObject15(), tableResponsiveBordered);
};

var tableResponsive = function tableResponsive(props) {
  return props.responsive && (0, _styledComponents.css)(_templateObject16(), tableResponsiveBordered);
};

var TableWoClass = (0, _styledComponents["default"])(_base.Table)(_templateObject17(), function (props) {
  return (0, _themeFunctions.getBorder)(props, 'table', 'default');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'table', 'borderColor');
}, function (props) {
  return (0, _themeFunctions.getBorder)(props, 'table', 'bottomTop');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'table', 'borderColor');
}, function (props) {
  return (0, _themeFunctions.getBorder)(props, 'table', 'bottomTop');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'table', 'borderColor');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'table', 'backgroundColor');
}, tableSmall, tableBordered, tableStriped, tableHover, tableDark, tableHeadDark, tableHeadLight, tableResponsiveSmall, tableResponsiveMedium, tableResponsiveLarge, tableResponsiveXLarge, tableResponsive);
TableWoClass.defaultProps = {
  theme: _theme["default"]
};

var Table = _react["default"].forwardRef(function (_ref, ref) {
  var hover = _ref.hover,
      className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["hover", "className", "children"]);

  return _react["default"].createElement(TableWoClass, _extends({
    ref: ref,
    className: "".concat(hover ? 'hover' : '', " ").concat(className || '').trim(),
    hover: hover
  }, rest), children);
});

var _default = Table;
exports["default"] = _default;