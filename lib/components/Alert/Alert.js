"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AlertDismissIcon = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = require("../Utilities/base");

var _themeFunctions = require("../../utils/themeFunctions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: ", ";\n  border: ", ";\n  & > a {\n    font-weight: ", ";\n  };\n  & > h1,\n  & > h2,\n  & > h3,\n  & > h4,\n  & > h5,\n  & > h6 {\n    color: inherit;\n  };\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2rem;\n  cursor: pointer;\n  line-height: 1rem;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  color: inherit;\n  opacity: 0.5;\n\n  &:hover,\n  &:focus {\n    opacity: 0.75;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    border-radius: ", ";\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    & > a,\n    & > a:hover {\n      color: ", ";\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    & > hr {\n      border-top-color: ", ";\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    border-color: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "]);

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
  var data = _taggedTemplateLiteral(["\n    padding-right: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var alertDismissible = function alertDismissible(props) {
  return props.dismissible && (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getPadding)(props, 'alert', 'dismissibleRight'));
};

var color = function color(props) {
  return (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getColor)(props, 'alert', 'text'));
};

var backgroundColor = function backgroundColor(props) {
  return (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getColor)(props, 'alert', 'background'));
};

var borderColor = function borderColor(props) {
  return (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getColor)(props, 'alert', 'border'));
};

var borderTopColor = function borderTopColor(props) {
  return (0, _styledComponents.css)(_templateObject5(), (0, _themeFunctions.getColor)(props, 'alert', 'borderTop'));
};

var linkHoverColor = function linkHoverColor(props) {
  return (0, _styledComponents.css)(_templateObject6(), (0, _themeFunctions.getColor)(props, 'alert', 'hover'));
};

var borderRadius = function borderRadius(props) {
  if (props.noRadius) {
    return (0, _styledComponents.css)(_templateObject7(), (0, _themeFunctions.getBorderRadius)(props, 'alert', 'noRadius'));
  } else if (props.pill) {
    return (0, _styledComponents.css)(_templateObject8(), (0, _themeFunctions.getBorderRadius)(props, 'alert', 'pill'));
  }

  return (0, _styledComponents.css)(_templateObject9(), (0, _themeFunctions.getBorderRadius)(props, 'alert', 'default'));
};

var AlertDismissIcon = _styledComponents["default"].span.attrs({
  ariaHidden: 'true'
})(_templateObject10());

exports.AlertDismissIcon = AlertDismissIcon;
var Alert = (0, _styledComponents["default"])(_base.Div).attrs({
  role: 'alert'
})(_templateObject11(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'alert', 'default');
}, function (props) {
  return (0, _themeFunctions.getBorder)(props, 'alert', 'default');
}, function (props) {
  return (0, _themeFunctions.getFontWeight)(props, 'alert', 'default');
}, function (props) {
  return borderRadius(props);
}, function (props) {
  return alertDismissible(props);
}, function (props) {
  return color(props);
}, function (props) {
  return backgroundColor(props);
}, function (props) {
  return borderColor(props);
}, function (props) {
  return borderTopColor(props);
}, function (props) {
  return linkHoverColor(props);
});
var _default = Alert;
exports["default"] = _default;