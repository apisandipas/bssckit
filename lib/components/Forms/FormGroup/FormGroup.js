"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _styledBreakpoints = require("styled-breakpoints");

var _theme = _interopRequireDefault(require("../../../theme"));

var _base = require("../../Utilities/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  > label {\n    width: 100%;\n  }\n\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: ", ";\n    }\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n      & > label,\n      & > div > label {\n        padding-top: ", ";\n        padding-bottom: ", ";\n      }\n      & > input,\n      & > div > input {\n        padding: ", ";\n      }\n    "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n      & > label,\n      & > div > label {\n        padding-top: ", ";\n        padding-bottom: ", ";\n      }\n      & > input,\n      & > div > input {\n        padding: ", ";\n      }\n    "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    & > input,\n    & > div > input,\n    & > label,\n    & > div > label {\n      font-size: ", ";\n    }\n  "]);

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
  var data = _taggedTemplateLiteral(["\n      & > input,\n      & > div > input,\n      & > label,\n      & > div > label {\n        font-size: ", ";\n      }\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    & > input,\n    & > div > input,\n    & > label,\n    & > div > label {\n      line-height: 1.5;\n    }\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    & > input,\n    & > div > input,\n    & > :not(input[type='file']),\n    & > div > :not(input[type='file']) {\n      border-radius: ", ";\n    }\n  "]);

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
  var data = _taggedTemplateLiteral(["\n      & > input,\n      & > div > input,\n      & > :not(input[type='file']),\n      & > div > :not(input[type='file']) {\n        border-radius: ", ";\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    justify-content: center;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: ", ";\n  "]);

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
  var data = _taggedTemplateLiteral(["\n      margin-right: ", ";\n      margin-left: ", ";\n      & > div > label {\n        margin-bottom: ", ";\n      }\n      margin-bottom: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      margin-bottom: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getDisplay = function getDisplay(props) {
  return props.row && (0, _styledComponents.css)(_templateObject());
};

var getFlexWrap = function getFlexWrap(props) {
  return props.row && (0, _styledComponents.css)(_templateObject2());
};

var getMargin = function getMargin(props) {
  if (props.nomb && !props.row) {
    return (0, _styledComponents.css)(_templateObject3(), (0, _styledTools.theme)('formGroup.margin.nombNoRow'));
  }

  if (props.nomb && props.row) {
    return (0, _styledComponents.css)(_templateObject4(), (0, _styledTools.theme)('formGroup.margin.nombRowRight'), (0, _styledTools.theme)('formGroup.margin.nombRowLeft'), (0, _styledTools.theme)('formGroup.margin.nombRowDivLabelBottom'), (0, _styledTools.theme)('formGroup.margin.nombRowBottom'));
  } else if (props.row) {
    return (0, _styledComponents.css)(_templateObject5(), (0, _styledTools.theme)('formGroup.margin.rowRight'), (0, _styledTools.theme)('formGroup.margin.rowLeft'), (0, _styledTools.theme)('formGroup.margin.rowDivLabel'), (0, _styledTools.theme)('formGroup.margin.bottom'));
  }

  return (0, _styledComponents.css)(_templateObject6(), (0, _styledTools.theme)('formGroup.margin.bottom'));
};

var getJustifyContent = function getJustifyContent(props) {
  return props.justify && (0, _styledComponents.css)(_templateObject7());
};

var getAlignItems = function getAlignItems(props) {
  return props.justify && (0, _styledComponents.css)(_templateObject8());
};

var getBorderRadius = function getBorderRadius(props) {
  if (props.noRadius) {
    return (0, _styledComponents.css)(_templateObject9(), (0, _styledTools.theme)('formGroup.borderRadius.noRadius'));
  }

  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject10(), (0, _styledTools.theme)('formGroup.borderRadius.lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject11(), (0, _styledTools.theme)('formGroup.borderRadius.sm'));
  }

  return (0, _styledComponents.css)(_templateObject12(), (0, _styledTools.theme)('formGroup.borderRadius.default'));
};

var getLineHeight = function getLineHeight() {
  return (0, _styledComponents.css)(_templateObject13());
};

var getFontSize = function getFontSize(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject14(), (0, _styledTools.theme)('formGroup.fontSize.lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject15(), (0, _styledTools.theme)('formGroup.fontSize.sm'));
  }

  return (0, _styledComponents.css)(_templateObject16(), (0, _styledTools.theme)('formGroup.fontSize.default'));
};

var getPadding = function getPadding(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject17(), (0, _styledTools.theme)('formGroup.padding.labelTopLg'), (0, _styledTools.theme)('formGroup.padding.labelBottomLg'), (0, _styledTools.theme)('formGroup.padding.inputLg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject18(), (0, _styledTools.theme)('formGroup.padding.labelTopSm'), (0, _styledTools.theme)('formGroup.padding.labelBottomSm'), (0, _styledTools.theme)('formGroup.padding.inputSm'));
  }

  return '';
};

var formGroupFormInline = function formGroupFormInline(props) {
  return props.formInline && (0, _styledComponents.css)(_templateObject19(), (0, _styledBreakpoints.up)('sm'), (0, _styledTools.theme)('formGroup.margin.inlineBottom'));
};

var FormGroup = (0, _styledComponents["default"])(_base.Div)(_templateObject20(), function (props) {
  return getDisplay(props);
}, function (props) {
  return getFlexWrap(props);
}, function (props) {
  return getMargin(props);
}, function (props) {
  return getJustifyContent(props);
}, function (props) {
  return getAlignItems(props);
}, function (props) {
  return getBorderRadius(props);
}, function (props) {
  return getLineHeight(props);
}, function (props) {
  return getFontSize(props);
}, function (props) {
  return getPadding(props);
}, function (props) {
  return formGroupFormInline(props);
});
FormGroup.defaultProps = {
  theme: _theme["default"]
};
var _default = FormGroup;
exports["default"] = _default;