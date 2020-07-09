"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = require("../Utilities/base");

var _theme = _interopRequireDefault(require("../../theme"));

var _themeFunctions = require("../../utils/themeFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: ", ";\n  margin-bottom: ", ";\n  list-style: none;\n  & > a {\n    text-decoration: none;\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n  &:last-child {\n   flex: 1;\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      @media (max-width: ", ") {\n        display: none;\n        flex-basis: auto;\n        flex-direction: column;\n      }\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      @media (max-width: ", ") {\n        display: flex;\n        flex-basis: auto;\n        flex-direction: column;\n        & > a {\n          padding-right: ", ";\n          padding-left: ", ";\n          flex: 1;\n          text-align: left;\n        }\n      }\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    & > a {\n      margin-bottom: -1px;\n    }\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: ", " ", ";\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    flex: 1 1 auto;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      text-align: center;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    flex-grow: 1;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    flex-basis: 0;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column !important;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      justify-content: flex-start !important;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      justify-content: flex-end !important;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      justify-content: center !important;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var justifyContent = function justifyContent(props) {
  if (props.center) {
    return (0, _styledComponents.css)(_templateObject());
  } else if (props.end) {
    return (0, _styledComponents.css)(_templateObject2());
  } else if (props.start) {
    return (0, _styledComponents.css)(_templateObject3());
  }

  return '';
};

var flexDirection = function flexDirection(props) {
  return props.vertical && (0, _styledComponents.css)(_templateObject4());
};

var flexBasis = function flexBasis(props) {
  return props.justified && (0, _styledComponents.css)(_templateObject5());
};

var flexGrow = function flexGrow(props) {
  return props.justified && (0, _styledComponents.css)(_templateObject6());
};

var textAlign = function textAlign(props) {
  if (props.justified || props.fill) {
    return (0, _styledComponents.css)(_templateObject7());
  }

  return '';
};

var flex = function flex(props) {
  return props.fill && (0, _styledComponents.css)(_templateObject8());
};

var border = function border(props) {
  return props.tabs && (0, _styledComponents.css)(_templateObject9(), (0, _themeFunctions.getBorder)(props, 'nav', 'default'), (0, _themeFunctions.getColor)(props, 'nav', 'borderColorTabs'));
};

var margin = function margin(props) {
  return props.tabs && (0, _styledComponents.css)(_templateObject10());
};

var navCollapse = function navCollapse(props) {
  if ((props.expandSm || props.expandMd || props.expandLg || props.expandXl) && props.collapse && !props.hidden) {
    return (0, _styledComponents.css)(_templateObject11(), (0, _themeFunctions.getBreakpointSize)(props), (0, _themeFunctions.getPadding)(props, 'nav', 'collapsNoteHiddenARight'), (0, _themeFunctions.getPadding)(props, 'nav', 'collapsNoteHiddenALeft'));
  } else if ((props.expandSm || props.expandMd || props.expandLg || props.expandXl) && props.collapse && props.hidden) {
    return (0, _styledComponents.css)(_templateObject12(), (0, _themeFunctions.getBreakpointSize)(props));
  }

  return '';
};

var Nav = (0, _styledComponents["default"])(_base.Nav)(_templateObject13(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'nav', 'left');
}, function (props) {
  return (0, _themeFunctions.getMargin)(props, 'nav', 'bottom');
}, function (props) {
  return flex(props);
}, function (props) {
  return flexBasis(props);
}, function (props) {
  return flexGrow(props);
}, function (props) {
  return textAlign(props);
}, function (props) {
  return justifyContent(props);
}, function (props) {
  return flexDirection(props);
}, function (props) {
  return border(props);
}, function (props) {
  return margin(props);
}, function (props) {
  return navCollapse(props);
});
Nav.defaultProps = {
  theme: _theme["default"]
};
var _default = Nav;
exports["default"] = _default;