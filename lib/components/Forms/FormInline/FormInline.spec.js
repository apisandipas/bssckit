"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _FormInline = _interopRequireDefault(require("./FormInline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('FormInline Component', function () {
  it('matches normal FormInline', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_FormInline["default"], null)),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-flow', 'row wrap');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('box-sizing', 'border-box');
  });
});