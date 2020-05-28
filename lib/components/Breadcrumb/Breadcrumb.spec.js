"use strict";

var _react = _interopRequireDefault(require("react"));

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _Breadcrumb = _interopRequireDefault(require("./Breadcrumb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Breadcrumb componen', function () {
  it('matches Breadcrumb', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Breadcrumb["default"], null)),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Breadcrumb noRadius', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Breadcrumb["default"], {
      noRadius: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });
  it('matches Breadcrumb pill', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_Breadcrumb["default"], {
      pill: true
    })),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '10rem');
  });
});