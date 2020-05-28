"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _Container = require("../Container");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Container Component', function () {
  it('matches normal container', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Container.Container, null)),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('margin-right', 'auto');
    expect(container.firstChild).toHaveStyleRule('margin-left', 'auto');
    expect(container.firstChild).toHaveStyleRule('padding-left', '15px');
    expect(container.firstChild).toHaveStyleRule('padding-right', '15px'); // TODO Troubleshoot testing a media query
    // expect(container.firstChild).toHaveStyleRule('max-width', '540px', {
    //   media: '(min-width: 36em)',
    // });
    // expect(container.firstChild).toHaveStyleRule('max-width', '720px', {
    //   media: '(min-width: 48em)',
    // });
    // expect(container.firstChild).toHaveStyleRule('max-width', '960px', {
    //   media: '(min-width: 62em)',
    // });2
    // expect(container.firstChild).toHaveStyleRule('max-width', '1140px', {
    //   media: '(min-width: 75rem)',
    // });
  });
  it('matches fluid container', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Container.Container, {
      fluid: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('margin-right', 'auto');
    expect(container.firstChild).toHaveStyleRule('margin-left', 'auto');
    expect(container.firstChild).toHaveStyleRule('padding-left', '15px');
    expect(container.firstChild).toHaveStyleRule('padding-right', '15px');
  });
});