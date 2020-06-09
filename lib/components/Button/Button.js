"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkButton = exports.Button = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = require("../Utilities/base");

var _themeFunctions = require("../../utils/themeFunctions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  ", "\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;\n  &:focus {\n    outline: 0;\n    ", ";\n  }\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n  "]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      &:hover {\n        color: ", ";\n      }\n    "]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n      "]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n      display: none;\n      @media (max-width: ", ") {\n        display: block;\n        font-size: ", ";\n        ", ";\n      }\n    "]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    border-color: ", ";\n    &:hover,\n    &:focus {\n      color: ", ";\n      border-color: ", ";\n    }\n  "]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n    border-radius: ", ";\n  "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    &:focus,\n    &:hover {\n      background-color: ", ";\n    }\n  "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n      background-image: none;\n      background-color: ", ";\n    "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n      background-image: none;\n      background-color: transparent;\n      &:hover {\n        background-color: ", ";\n      }\n    "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n      background-image: none;\n      background-color: ", ";\n    "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n        &:focus,\n        &:hover {\n          border: 1px solid ", ";\n        }\n      "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n    ", "\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n      border: ", " ", ";\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n      border: ", " ", ";\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    opacity: 0.65;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    &::after {\n      display: inline-block;\n      width: 0;\n      height: 0;\n      margin-left: ", ";\n      vertical-align: 0.255em;\n      content: '';\n      border-top: 0.3em solid;\n      border-right: 0.3em solid transparent;\n      border-bottom: 0;\n      border-left: 0.3em solid transparent;\n    }\n    &:empty::after {\n      margin-left: 0;\n    }\n    &::after {\n      margin-left: 0.255em;\n    }\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      font-size: ", ";\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n      font-size: ", ";\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      display: block;\n      width: 100%;\n      & + & {\n        margin-top: ", ";\n      }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    padding: ", ";\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      padding: ", ";\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      padding: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      padding: 0;\n      padding-right: ", ";\n      padding-left: ", ";\n      &::after {\n        margin-left: 0;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        padding: 0;\n        padding-right: ", ";\n        padding-left: ", ";\n        &::after {\n          margin-left: 0;\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        padding: 0;\n        padding-right: ", ";\n        padding-left: ", ";\n        &::after {\n          margin-left: 0;\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: 0 0 0 0.2rem ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var boxShadow = function boxShadow(props) {
  return (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getColor)(props, 'button', 'boxShadow'));
};

var padding = function padding(props) {
  if (props.split) {
    if (props.sm) {
      return (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getPadding)(props, 'button', 'splitSmRight'), (0, _themeFunctions.getPadding)(props, 'button', 'splitSmLeft'));
    } else if (props.lg) {
      return (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getPadding)(props, 'button', 'splitLgRight'), (0, _themeFunctions.getPadding)(props, 'button', 'splitLgLeft'));
    }

    return (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getPadding)(props, 'button', 'splitDefaultRight'), (0, _themeFunctions.getPadding)(props, 'button', 'splitDefaultLeft'));
  } else if (props.lg) {
    return (0, _styledComponents.css)(_templateObject5(), (0, _themeFunctions.getPadding)(props, 'button', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject6(), (0, _themeFunctions.getPadding)(props, 'button', 'sm'));
  }

  return (0, _styledComponents.css)(_templateObject7(), (0, _themeFunctions.getPadding)(props, 'button', 'default'));
};

var block = function block(props) {
  if (props.block) {
    return (0, _styledComponents.css)(_templateObject8(), (0, _themeFunctions.getMargin)(props, 'button', 'blockTop'));
  }

  return (0, _styledComponents.css)(_templateObject9());
};

var fontSize = function fontSize(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject10(), (0, _themeFunctions.getFontSize)(props, 'button', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject11(), (0, _themeFunctions.getFontSize)(props, 'button', 'sm'));
  }

  return (0, _styledComponents.css)(_templateObject12(), (0, _themeFunctions.getFontSize)(props, 'button', 'default'));
};

var dropdownToggle = function dropdownToggle(props) {
  return props.dropdownToggle && (0, _styledComponents.css)(_templateObject13(), (0, _themeFunctions.getMargin)(props, 'button', 'dropdownToggleLeft'));
};

var disabled = function disabled(props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject14());
};

var border = function border(props) {
  if (props.active) {
    return (0, _styledComponents.css)(_templateObject15(), (0, _themeFunctions.getBorder)(props, 'button', 'default'), (0, _themeFunctions.getColor)(props, 'button', 'borderColorActive'));
  } else if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject16(), (0, _themeFunctions.getBorder)(props, 'button', 'default'), (0, _themeFunctions.getColor)(props, 'button', 'borderColorDisabled'));
  }

  return (0, _styledComponents.css)(_templateObject17(), (0, _themeFunctions.getColor)(props, 'button', 'borderColor'), !props.outline && (0, _styledComponents.css)(_templateObject18(), (0, _themeFunctions.getColor)(props, 'button', 'borderColorHoverFocus')));
};

var backgroundColor = function backgroundColor(props) {
  if (props.active) {
    return (0, _styledComponents.css)(_templateObject19(), (0, _themeFunctions.getColor)(props, 'button', 'backgroundColorActive'));
  } else if (props.outline) {
    return (0, _styledComponents.css)(_templateObject20(), props.disabled ? 'transparent' : (0, _themeFunctions.getColor)(props, 'button', 'backgroundColor'));
  } else if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject21(), (0, _themeFunctions.getColor)(props, 'button', 'backgroundColorDisabled'));
  }

  return (0, _styledComponents.css)(_templateObject22(), (0, _themeFunctions.getColor)(props, 'button', 'backgroundColor'), (0, _themeFunctions.getColor)(props, 'button', 'backgroundColorHoverFocus'));
};

var borderRadius = function borderRadius(props) {
  if (props.pill) {
    return (0, _styledComponents.css)(_templateObject23(), (0, _themeFunctions.getBorderRadius)(props, 'button', 'pill'));
  } else if (props.noRadius) {
    return (0, _styledComponents.css)(_templateObject24(), (0, _themeFunctions.getBorderRadius)(props, 'button', 'noRadius'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject25(), (0, _themeFunctions.getBorderRadius)(props, 'button', 'sm'));
  } else if (props.lg) {
    return (0, _styledComponents.css)(_templateObject26(), (0, _themeFunctions.getBorderRadius)(props, 'button', 'lg'));
  }

  return (0, _styledComponents.css)(_templateObject27(), (0, _themeFunctions.getBorderRadius)(props, 'button', 'default'));
};

var buttonToggler = function buttonToggler(props) {
  return (0, _styledComponents.css)(_templateObject28(), (0, _themeFunctions.getColor)(props, 'button', 'toggle', 'color'), (0, _themeFunctions.getColor)(props, 'button', 'toggle', 'borderColor'), (0, _themeFunctions.getColor)(props, 'button', 'toggle', 'color'), (0, _themeFunctions.getColor)(props, 'button', 'toggle', 'borderColor'));
};

var buttonToggleCollapse = function buttonToggleCollapse(props) {
  if ((props.expandSm || props.expandMd || props.expandLg || props.expandXl) && props.toggleCollapse) {
    return (0, _styledComponents.css)(_templateObject29(), (0, _themeFunctions.getBreakpointSize)(props), fontSize(props).toggle, buttonToggler);
  }

  return '';
};

var color = function color(props) {
  if (props.outline) {
    if (props.disabled) {
      return (0, _styledComponents.css)(_templateObject30(), (0, _themeFunctions.getColor)(props, 'button', 'colorOutline'));
    }

    return (0, _styledComponents.css)(_templateObject31(), (0, _themeFunctions.getColor)(props, 'button', 'colorOutline'), (0, _themeFunctions.getColor)(props, 'button', 'colorOutlineHover'));
  }

  return (0, _styledComponents.css)(_templateObject32(), (0, _themeFunctions.getColor)(props, 'button', 'color'));
};

var cursor = function cursor(props) {
  return !props.disabled && (0, _styledComponents.css)(_templateObject33());
};

var buttonStyles = function buttonStyles(props) {
  return (0, _styledComponents.css)(_templateObject34(), boxShadow, border(props), backgroundColor(props), color(props), cursor(props), border(props), backgroundColor(props), borderRadius(props), block(props), dropdownToggle(props), buttonToggleCollapse(props), disabled(props), fontSize(props), color(props), padding(props));
};

var Button = (0, _styledComponents["default"])(_base.Button)(_templateObject35(), function (props) {
  return buttonStyles(props);
});
exports.Button = Button;
var LinkButton = (0, _styledComponents["default"])(_base.A)(_templateObject36(), function (props) {
  return buttonStyles(props);
});
exports.LinkButton = LinkButton;