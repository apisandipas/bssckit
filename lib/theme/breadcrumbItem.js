"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("../theme/palette"));

var _globals = _interopRequireDefault(require("../theme/globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var breadcrumbItem = {
  colors: {
    "default": {
      color: _palette["default"].secondary
    }
  },
  padding: {
    right: '0.5rem',
    left: '0.5rem'
  },
  margin: {
    bottom: '1rem'
  },
  borderRadius: _globals["default"].borderRadius
};
var _default = breadcrumbItem;
exports["default"] = _default;