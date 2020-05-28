"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("./palette"));

var _globals = _interopRequireDefault(require("./globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var card = {
  colors: {
    "default": {
      backgroundColor: _palette["default"].white,
      borderColor: _palette["default"].weakBorder
    }
  },
  borderRadius: _globals["default"].borderRadius,
  border: _globals["default"].border
};
var _default = card;
exports["default"] = _default;