"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _FormCheckInput = _interopRequireDefault(require("./FormCheckInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('FormInline Component', function () {
  it('matches normal FormCheckInput', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_FormCheckInput["default"], null)),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches FormCheckInput disabled', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_FormCheckInput["default"], {
      disabled: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
});