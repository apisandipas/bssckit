"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _ListGroup = _interopRequireDefault(require("./ListGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ListGroup Component', function () {
  it('matches normal ListGroup', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_ListGroup["default"], null)),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0');
  });
  it('matches ListGroup flush', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_ListGroup["default"], {
      flush: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-right', '0', {
      modifier: '& > a'
    });
    expect(container.firstChild).toHaveStyleRule('border-left', '0', {
      modifier: '& > a'
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
      modifier: '& > a'
    });
    expect(container.firstChild).toHaveStyleRule('border-right', '0', {
      modifier: '& > li'
    });
    expect(container.firstChild).toHaveStyleRule('border-left', '0', {
      modifier: '& > li'
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
      modifier: '& > li'
    });
  });
});