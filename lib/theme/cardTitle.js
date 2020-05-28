"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("./palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cardTitle = {
  colors: {
    "default": {
      colorMuted: _palette["default"].darkLighter
    }
  },
  margin: {
    bottom: '0.5rem',
    subtitleTop: '-0.5rem',
    subtitleBottom: '0.5rem'
  }
};
var _default = cardTitle;
exports["default"] = _default;