"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _globals = _interopRequireDefault(require("./globals"));

var _palette = _interopRequireDefault(require("./palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var inputGroupText = {
  colors: {
    "default": {
      color: _palette["default"].dark,
      backgroundColor: _palette["default"].lightDarker,
      borderColor: _palette["default"].lightDark
    }
  },
  margin: {
    bottom: '0',
    radioCheckboxTop: '0',
    radioCheckboxRight: '0',
    radioCheckboxBottom: '0'
  },
  padding: {
    "default": '0.375rem 0.75rem'
  },
  fontWeight: {
    "default": '400'
  },
  fontSize: _globals["default"].fontSize,
  borderRadius: _globals["default"].borderRadius,
  border: _globals["default"].border
};
var _default = inputGroupText;
exports["default"] = _default;