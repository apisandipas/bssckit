"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledBreakpoints = require("styled-breakpoints");

var _theme = _interopRequireDefault(require("../../../theme"));

var _themeFunctions = require("../../../utils/themeFunctions");

var _base = require("../../Utilities/base");

var _FormControlPlainText = _interopRequireDefault(require("./FormControlPlainText"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  &:focus::-ms-value {\n    color: ", ";\n    background-color: ", ";\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    width: 100%;\n    line-height: 1.5;\n    color: ", ";\n    background-clip: padding-box;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    box-sizing: border-box;\n    &::-ms-expand {\n      background-color: transparent;\n      border: 0;\n    };\n    &:focus {\n      color: ", ";\n      outline: 0;\n      box-shadow: 0 0 0 0.2rem ", ";\n    };\n    &::placeholder {\n      color: ", ";\n      opacity: 1;\n    };\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n      height: ", ";\n    "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n      height: ", ";\n    "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n      height: ", ";\n    "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    border-radius: ", ";\n  "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n      font-size: ", ";\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n      font-size: ", ";\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    padding: ", ";\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      padding-right: ", ";\n      padding-left: ", ";\n      padding: ", ";\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      padding-right: ", ";\n      padding-left: ", ";\n      padding: ", ";\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle;\n    }\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      opacity: 1;\n      &:focus {\n        opacity: 1;\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    &:focus {\n      box-shadow: 0;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      &:focus {\n        box-shadow: ", "\n          ", ";\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      &:focus {\n        box-shadow: ", "\n          ", ";\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    border: ", " ", ";\n    &:focus {\n      border-color: ", ";\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      border-color: ", ";\n      &:focus {\n        border-color: ", ";\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      border-color: ", ";\n      &:focus {\n        border-color: ", ";\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    &:focus {\n      background-color: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n      &:focus {\n        background-color: ", ";\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var backgroundColor = function backgroundColor(props) {
  if (props.disabled || props.readonly) {
    return (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getColor)(props, 'formControl', 'backgroundColorDisabledReadonly'), (0, _themeFunctions.getColor)(props, 'formControl', 'backgroundColorDisabledReadonly'));
  }

  return (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getColor)(props, 'formControl', 'background'), (0, _themeFunctions.getColor)(props, 'formControl', 'background'));
};

var border = function border(props) {
  if (props.valid) {
    return (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getColor)(props, 'formControl', 'borderValid'), (0, _themeFunctions.getColor)(props, 'formControl', 'borderValid'));
  } else if (props.invalid) {
    return (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getColor)(props, 'formControl', 'borderInvalid'), (0, _themeFunctions.getColor)(props, 'formControl', 'borderInvalid'));
  }

  return (0, _styledComponents.css)(_templateObject5(), (0, _themeFunctions.getBorder)(props, 'formControl', 'default'), (0, _themeFunctions.getColor)(props, 'formControl', 'border'), (0, _themeFunctions.getColor)(props, 'formControl', 'border'));
};

var boxShadow = function boxShadow(props) {
  if (props.valid) {
    return (0, _styledComponents.css)(_templateObject6(), (0, _themeFunctions.getBoxShadow)(props, 'formControl', 'default'), (0, _themeFunctions.getColor)(props, 'formControl', 'formControlBoxShadowValid'));
  } else if (props.invalid) {
    return (0, _styledComponents.css)(_templateObject7(), (0, _themeFunctions.getBoxShadow)(props, 'formControl', 'default'), (0, _themeFunctions.getColor)(props, 'formControl', 'formControlBoxShadowInvalid'));
  }

  return (0, _styledComponents.css)(_templateObject8());
};

var opacity = function opacity(props) {
  if (props.disabled || props.readonly) {
    return (0, _styledComponents.css)(_templateObject9());
  }

  return '';
};

var formControlFormInline = function formControlFormInline(props) {
  return props.formInline && (0, _styledComponents.css)(_templateObject10(), (0, _styledBreakpoints.up)('sm'));
};

var padding = function padding(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject11(), (0, _themeFunctions.getPadding)(props, 'formControl', 'lgRight'), (0, _themeFunctions.getPadding)(props, 'formControl', 'lgLeft'), (0, _themeFunctions.getPadding)(props, 'formControl', 'lgPadding'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject12(), (0, _themeFunctions.getPadding)(props, 'formControl', 'smRight'), (0, _themeFunctions.getPadding)(props, 'formControl', 'smLeft'), (0, _themeFunctions.getPadding)(props, 'formControl', 'smPadding'));
  }

  return (0, _styledComponents.css)(_templateObject13(), (0, _themeFunctions.getPadding)(props, 'formControl', 'defaultPadding'));
};

var fontSize = function fontSize(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject14(), (0, _themeFunctions.getFontSize)(props, 'formControl', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject15(), (0, _themeFunctions.getFontSize)(props, 'formControl', 'sm'));
  }

  return (0, _styledComponents.css)(_templateObject16(), (0, _themeFunctions.getFontSize)(props, 'formControl', 'default'));
};

var borderRadius = function borderRadius(props) {
  if (props.noRadius) {
    return (0, _styledComponents.css)(_templateObject17(), (0, _themeFunctions.getBorderRadius)(props, 'formControl', 'noRadius'));
  } else if (props.pill) {
    return (0, _styledComponents.css)(_templateObject18(), (0, _themeFunctions.getBorderRadius)(props, 'formControl', 'pill'));
  } else if (props.lg) {
    return (0, _styledComponents.css)(_templateObject19(), (0, _themeFunctions.getBorderRadius)(props, 'formControl', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject20(), (0, _themeFunctions.getBorderRadius)(props, 'formControl', 'sm'));
  }

  return (0, _styledComponents.css)(_templateObject21(), (0, _themeFunctions.getBorderRadius)(props, 'formControl', 'default'));
};

var height = function height(props) {
  if (props.lg && !props.multiple && props.select) {
    return (0, _styledComponents.css)(_templateObject22(), (0, _themeFunctions.getHeight)(props, 'formControl', 'selectLg'));
  } else if (props.sm && !props.multiple && props.select) {
    return (0, _styledComponents.css)(_templateObject23(), (0, _themeFunctions.getHeight)(props, 'formControl', 'selectSm'));
  } else if (!props.multiple && props.select) {
    return (0, _styledComponents.css)(_templateObject24(), (0, _themeFunctions.getHeight)(props, 'formControl', 'select'));
  }

  return '';
};

var formControlStyle = function formControlStyle() {
  return (0, _styledComponents.css)(_templateObject25(), function (props) {
    return (0, _themeFunctions.getColor)(props, 'formControl', 'color');
  }, function (props) {
    return (0, _themeFunctions.getColor)(props, 'formControl', 'color');
  }, function (props) {
    return (0, _themeFunctions.getColor)(props, 'formControl', 'boxShadowFocus');
  }, function (props) {
    return (0, _themeFunctions.getColor)(props, 'formControl', 'placeholder');
  }, function (props) {
    return backgroundColor(props);
  }, function (props) {
    return border(props);
  }, function (props) {
    return boxShadow(props);
  }, function (props) {
    return opacity(props);
  }, function (props) {
    return formControlFormInline(props);
  }, function (props) {
    return padding(props);
  }, function (props) {
    return fontSize(props);
  }, function (props) {
    return borderRadius(props);
  }, function (props) {
    return height(props);
  });
};

var FormControlInput = (0, _styledComponents["default"])(_base.Input)(_templateObject26(), formControlStyle);
var FormControlTextarea = (0, _styledComponents["default"])(_base.Textarea)(_templateObject27(), formControlStyle);
var FormControlSelect = (0, _styledComponents["default"])(_base.Select)(_templateObject28(), formControlStyle, function (props) {
  return (0, _themeFunctions.getColor)(props, 'formControl', 'color');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'formControl', 'background');
});
var FormControlFile = (0, _styledComponents["default"])(_base.Input).attrs({
  type: 'file'
})(_templateObject29());

var FormControl = function FormControl(props) {
  if (props.textarea) {
    return _react["default"].createElement(FormControlTextarea, props);
  } else if (props.select) {
    return _react["default"].createElement(FormControlSelect, props);
  } else if (props.file) {
    return _react["default"].createElement(FormControlFile, props);
  } else if (props.plainText) {
    return _react["default"].createElement(_FormControlPlainText["default"], props);
  }

  return _react["default"].createElement(FormControlInput, props);
};

FormControl.defaultProps = {
  theme: _theme["default"]
};
var _default = FormControl;
exports["default"] = _default;