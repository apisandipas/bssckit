"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _globals = _interopRequireDefault(require("./globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formGroup = {
  margin: {
    inlineBottom: '0',
    nombNoRow: '0',
    nombRowRight: '-5px',
    nombRowLeft: '-5px',
    nombRowDivLabelBottom: '0',
    nombRowBottom: '0',
    rowRight: '-5px',
    rowLeft: '-5px',
    rowDivLabel: '0',
    bottom: '1rem'
  },
  padding: {
    labelTopLg: 'calc(0.5rem + 1px)',
    labelBottomLg: 'calc(0.5rem + 1px)',
    inputLg: '0.5rem 1rem',
    labelTopSm: 'calc(0.25rem + 1px)',
    labelBottomSm: 'calc(0.25rem + 1px)',
    inputSm: '0.25rem 0.5rem'
  },
  borderRadius: _globals["default"].borderRadius,
  fontSize: _globals["default"].fontSize
};
var _default = formGroup;
exports["default"] = _default;