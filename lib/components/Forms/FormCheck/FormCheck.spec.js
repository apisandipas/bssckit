"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _FormCheck = _interopRequireDefault(require("./FormCheck"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('FormInline Component', function () {
  it('matches normal FormCheck', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_FormCheck["default"], null)),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    expect(container.firstChild).toHaveStyleRule('display', 'block');
    expect(container.firstChild).toHaveStyleRule('box-sizing', 'border-box');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0', {
      modifier: '& > label'
    });
    expect(container.firstChild).toHaveStyleRule('position', 'static', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('margin-top', '0', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('margin-right', '0.3125rem', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
      modifier: '& > input'
    });
  });
  it('matches FormCheck inline', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_FormCheck["default"], {
      inline: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'inline-flex');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0');
    expect(container.firstChild).toHaveStyleRule('margin-right', '0.75rem');
  });
});