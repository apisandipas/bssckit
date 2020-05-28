"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _BreadcrumbItem = _interopRequireDefault(require("./BreadcrumbItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Breadcrumb component', function () {
  it('matches BreadcrumbItem', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_BreadcrumbItem["default"], null)),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'inline-block', {
      modifier: '&:not(:first-child)::before'
    });
    expect(container.firstChild).toHaveStyleRule('padding-right', '0.5rem', {
      modifier: '&:not(:first-child)::before'
    });
    expect(container.firstChild).toHaveStyleRule('padding-left', '0.5rem', {
      modifier: '&:not(:first-child)::before'
    });
    expect(container.firstChild).toHaveStyleRule('color', '#6c757d', {
      modifier: '&:not(:first-child)::before'
    });
    expect(container.firstChild).toHaveStyleRule('content', "'/'", {
      modifier: '&:not(:first-child)::before'
    });
  });
  it('matches BreadcrumbItem active', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_BreadcrumbItem["default"], {
      active: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#6c757d');
  });
});