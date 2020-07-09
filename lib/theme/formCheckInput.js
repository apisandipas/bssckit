"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("./palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formCheckInput = {
  colors: {
    "default": {
      colorDisabled: _palette["default"].darkLighter,
      colorDisabledLabel: _palette["default"].darkLighter
    }
  },
  margin: {
    top: '0.3rem',
    left: '0rem'
  }
};
var _default = formCheckInput;
exports["default"] = _default;