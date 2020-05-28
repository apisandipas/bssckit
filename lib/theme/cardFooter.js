"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("./palette"));

var _globals = _interopRequireDefault(require("./globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cardFooter = {
  colors: {
    "default": {
      background: _palette["default"].weakBackground,
      borderTop: _palette["default"].weakBorder
    }
  },
  padding: {
    "default": '0.75rem 1.25rem'
  },
  borderRadius: {
    noRadius: _globals["default"].borderRadius.noRadius,
    "default": '0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)'
  },
  border: _globals["default"].border
};
var _default = cardFooter;
exports["default"] = _default;