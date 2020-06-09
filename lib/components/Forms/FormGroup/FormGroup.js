"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledBreakpoints = require("styled-breakpoints");

var _themeFunctions = require("../../../utils/themeFunctions");

var _base = require("../../Utilities/base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n      & > label,\n      & > div > label {\n        padding-top: ", ";\n        padding-bottom: ", ";\n      }\n      & > input,\n      & > div > input {\n        padding-right: ", ";\n        padding-left: ", ";\n        padding: ", ";\n      }\n    "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n      & > label,\n      & > div > label {\n        padding-top: ", ";\n        padding-bottom: ", ";\n      }\n      & > input,\n      & > div > input {\n        padding-right: ", ";\n        padding-left: ", ";\n        padding: ", ";\n      }\n    "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    & > input,\n    & > div > input,\n    & > label,\n    & > div > label {\n      font-size: ", ";\n    }\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n      & > input,\n      & > div > input,\n      & > label,\n      & > div > label {\n        font-size: ", ";\n      }\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n      & > input,\n      & > div > input,\n      & > label,\n      & > div > label {\n        font-size: ", ";\n      }\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    & > input,\n    & > div > input,\n    & > label,\n    & > div > label {\n      line-height: 1.5;\n    }\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    & > input,\n    & > div > input,\n    & > :not(input[type='file']),\n    & > div > :not(input[type='file']) {\n      border-radius: ", ";\n    }\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      & > input,\n      & > div > input,\n      & > :not(input[type='file']),\n      & > div > :not(input[type='file']) {\n        border-radius: ", ";\n      }\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      & > input,\n      & > div > input,\n      & > :not(input[type='file']),\n      & > div > :not(input[type='file']) {\n        border-radius: ", ";\n      }\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n      & > input,\n      & > div > input,\n      & > :not(input[type='file']),\n      & > div > :not(input[type='file']) {\n        border-radius: ", ";\n      }\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    justify-content: center;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: ", ";\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      margin-right: ", ";\n      margin-left: ", ";\n      & > div > label {\n        margin-bottom: ", ";\n      }\n      margin-bottom: ", ";\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      margin-right: ", ";\n      margin-left: ", ";\n      & > div > label {\n        margin-bottom: ", ";\n      }\n      margin-bottom: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      margin-bottom: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var formGroupFormInline = function formGroupFormInline(props) {
  return props.formInline && (0, _styledComponents.css)(_templateObject(), (0, _styledBreakpoints.up)('sm'), (0, _themeFunctions.getMargin)(props, 'formGroup', 'inlineBottom'));
};

var display = function display(props) {
  return props.row && (0, _styledComponents.css)(_templateObject2());
};

var flexWrap = function flexWrap(props) {
  return props.row && (0, _styledComponents.css)(_templateObject3());
};

var margin = function margin(props) {
  if (props.nomb && !props.row) {
    return (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getMargin)(props, 'formGroup', 'nombNoRow'));
  }

  if (props.nomb && props.row) {
    return (0, _styledComponents.css)(_templateObject5(), (0, _themeFunctions.getMargin)(props, 'formGroup', 'nombRowRight'), (0, _themeFunctions.getMargin)(props, 'formGroup', 'nombRowLeft'), (0, _themeFunctions.getMargin)(props, 'formGroup', 'nombRowDivLabelBottom'), (0, _themeFunctions.getMargin)(props, 'formGroup', 'nombRowBottom'));
  } else if (props.row) {
    return (0, _styledComponents.css)(_templateObject6(), (0, _themeFunctions.getMargin)(props, 'formGroup', 'rowRight'), (0, _themeFunctions.getMargin)(props, 'formGroup', 'rowLeft'), (0, _themeFunctions.getMargin)(props, 'formGroup', 'rowDivLabel'), (0, _themeFunctions.getMargin)(props, 'formGroup', 'bottom'));
  }

  return (0, _styledComponents.css)(_templateObject7(), (0, _themeFunctions.getMargin)(props, 'formGroup', 'bottom'));
};

var justifyContent = function justifyContent(props) {
  return props.justify && (0, _styledComponents.css)(_templateObject8());
};

var alignItems = function alignItems(props) {
  return props.justify && (0, _styledComponents.css)(_templateObject9());
};

var borderRadius = function borderRadius(props) {
  if (props.noRadius) {
    return (0, _styledComponents.css)(_templateObject10(), (0, _themeFunctions.getBorderRadius)(props, 'formGroup', 'noRadius'));
  }

  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject11(), (0, _themeFunctions.getBorderRadius)(props, 'formGroup', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject12(), (0, _themeFunctions.getBorderRadius)(props, 'formGroup', 'sm'));
  }

  return (0, _styledComponents.css)(_templateObject13(), (0, _themeFunctions.getBorderRadius)(props, 'formGroup', 'default'));
};

var lineHeight = function lineHeight() {
  return (0, _styledComponents.css)(_templateObject14());
};

var fontSize = function fontSize(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject15(), (0, _themeFunctions.getFontSize)(props, 'formGroup', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject16(), (0, _themeFunctions.getFontSize)(props, 'formGroup', 'sm'));
  }

  return (0, _styledComponents.css)(_templateObject17(), (0, _themeFunctions.getFontSize)(props, 'formGroup', 'default'));
};

var padding = function padding(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject18(), (0, _themeFunctions.getPadding)(props, 'formGroup', 'labelTopLg'), (0, _themeFunctions.getPadding)(props, 'formGroup', 'labelBottomLg'), (0, _themeFunctions.getPadding)(props, 'formGroup', 'inputRightLg'), (0, _themeFunctions.getPadding)(props, 'formGroup', 'inputLeftLg'), (0, _themeFunctions.getPadding)(props, 'formGroup', 'inputLg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject19(), (0, _themeFunctions.getPadding)(props, 'formGroup', 'labelTopSm'), (0, _themeFunctions.getPadding)(props, 'formGroup', 'labelBottomSm'), (0, _themeFunctions.getPadding)(props, 'formGroup', 'inputRightSm'), (0, _themeFunctions.getPadding)(props, 'formGroup', 'inputLeftSm'), (0, _themeFunctions.getPadding)(props, 'formGroup', 'inputSm'));
  }

  return '';
};

var FormGroup = (0, _styledComponents["default"])(_base.Div)(_templateObject20(), function (props) {
  return display(props);
}, function (props) {
  return flexWrap(props);
}, function (props) {
  return margin(props);
}, function (props) {
  return justifyContent(props);
}, function (props) {
  return alignItems(props);
}, function (props) {
  return borderRadius(props);
}, function (props) {
  return lineHeight(props);
}, function (props) {
  return fontSize(props);
}, function (props) {
  return padding(props);
}, function (props) {
  return formGroupFormInline(props);
});
var _default = FormGroup;
exports["default"] = _default;