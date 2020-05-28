"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("../theme/palette"));

var _globals = _interopRequireDefault(require("../theme/globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var breadcrumb = {
  colors: {
    "default": {
      backgroundColor: _palette["default"].lightDarker
    }
  },
  padding: {
    "default": '0.75rem 1rem'
  },
  margin: {
    bottom: '1rem'
  },
  borderRadius: _globals["default"].borderRadius
};
var _default = breadcrumb;
exports["default"] = _default;