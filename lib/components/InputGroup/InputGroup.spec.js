"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _InputGroup = _interopRequireDefault(require("./InputGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('InputGroup Component', function () {
  it('matches normal InputGroup', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_InputGroup["default"], null, _react["default"].createElement("input", null))),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap');
    expect(container.firstChild).toHaveStyleRule('align-items', 'stretch');
    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('position', 'relative', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('flex', '1 1 auto', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('width', '1%', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('position', 'relative', {
      modifier: '& > textarea'
    });
    expect(container.firstChild).toHaveStyleRule('flex', '1 1 auto', {
      modifier: '& > textarea'
    });
    expect(container.firstChild).toHaveStyleRule('width', '1%', {
      modifier: '& > textarea'
    });
    expect(container.firstChild).toHaveStyleRule('position', 'relative', {
      modifier: '& > select'
    });
    expect(container.firstChild).toHaveStyleRule('flex', '1 1 auto', {
      modifier: '& > select'
    });
    expect(container.firstChild).toHaveStyleRule('width', '1%', {
      modifier: '& > select'
    });
  });
  it(' matches InputGroup lg', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_InputGroup["default"], {
      lg: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it(' matches InputGroup lg', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_InputGroup["default"], {
      sm: true
    })),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
  });
});