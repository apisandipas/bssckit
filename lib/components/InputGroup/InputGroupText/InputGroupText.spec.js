"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('InputGroupText', function () {
  it('matches InputGroupText', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_["default"], null)),
        container = _render.container;

    expect(container.first).toMatchSnapshot();
  });
});