"use strict";

var _react = _interopRequireDefault(require("react"));

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _CardTitle = _interopRequireDefault(require("./CardTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('CardTitle Component', function () {
  it('matches CardTitle h1', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_CardTitle["default"], {
      h1: true
    })),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches CardTitle h1', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_CardTitle["default"], {
      h1: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches CardTitle h2', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_CardTitle["default"], {
      h2: true
    })),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches CardTitle h3', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_CardTitle["default"], {
      h3: true
    })),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches CardTitle h4', function () {
    var _render5 = (0, _react2.render)(_react["default"].createElement(_CardTitle["default"], {
      h4: true
    })),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches CardTitle h5', function () {
    var _render6 = (0, _react2.render)(_react["default"].createElement(_CardTitle["default"], {
      h5: true
    })),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches CardTitle h6', function () {
    var _render7 = (0, _react2.render)(_react["default"].createElement(_CardTitle["default"], {
      h6: true
    })),
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches CardTitle muted', function () {
    var _render8 = (0, _react2.render)(_react["default"].createElement(_CardTitle["default"], {
      h6: true,
      muted: true
    })),
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches CardTitle subtitle', function () {
    var _render9 = (0, _react2.render)(_react["default"].createElement(_CardTitle["default"], {
      subtitle: true
    })),
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();
  });
});