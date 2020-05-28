"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('InputGroupAppend component', function () {
  it('matches InputGroupAppend', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_["default"], null)),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('margin-left', '-1px');
    expect(container.firstChild).toHaveStyleRule('position', 'relative', {
      modifier: '& > button'
    });
    expect(container.firstChild).toHaveStyleRule('z-index', '2', {
      modifier: '& > button'
    });
    expect(container.firstChild).toHaveStyleRule('border-top-left-radius', '0', {
      modifier: '& > span'
    });
    expect(container.firstChild).toHaveStyleRule('border-bottom-left-radius', '0', {
      modifier: '& > span'
    });
    expect(container.firstChild).toHaveStyleRule('border-top-left-radius', '0', {
      modifier: '& > button'
    });
    expect(container.firstChild).toHaveStyleRule('border-bottom-left-radius', '0', {
      modifier: '& > button'
    });
  });
});