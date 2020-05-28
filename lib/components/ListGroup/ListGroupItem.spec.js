"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _ListGroupItem = _interopRequireDefault(require("./ListGroupItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ListGroupItem component', function () {
  it('matches ListGroupItem', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], null)),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem action active', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      action: true,
      active: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '& > a'
    });
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '& > a:hover'
    });
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '& > a:focus'
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#007bff', {
      modifier: '&:hover'
    });
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer', {
      modifier: '&:hover'
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#007bff', {
      modifier: '&:focus'
    });
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer', {
      modifier: '&:focus'
    });
  });
  it('matches ListGroupItem action', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      action: true
    })),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem danger action', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      danger: true,
      action: true
    })),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem danger', function () {
    var _render5 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      danger: true
    })),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem danger active', function () {
    var _render6 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      danger: true,
      active: true
    })),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem dark action', function () {
    var _render7 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      dark: true,
      action: true
    })),
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem dark', function () {
    var _render8 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      dark: true
    })),
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem dark active', function () {
    var _render9 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      dark: true,
      active: true
    })),
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem disabled action', function () {
    var _render10 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      disabled: true,
      action: true
    })),
        container = _render10.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem disabled', function () {
    var _render11 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      disabled: true
    })),
        container = _render11.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem info action', function () {
    var _render12 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      info: true,
      action: true
    })),
        container = _render12.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem info', function () {
    var _render13 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      info: true
    })),
        container = _render13.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem info active', function () {
    var _render14 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      info: true,
      active: true
    })),
        container = _render14.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem light action', function () {
    var _render15 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      light: true,
      action: true
    })),
        container = _render15.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem light', function () {
    var _render16 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      light: true
    })),
        container = _render16.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem light active', function () {
    var _render17 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      light: true,
      active: true
    })),
        container = _render17.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem primary action', function () {
    var _render18 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      primary: true,
      action: true
    })),
        container = _render18.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem primary', function () {
    var _render19 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      primary: true
    })),
        container = _render19.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem primary active', function () {
    var _render20 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      primary: true,
      active: true
    })),
        container = _render20.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem secondary action', function () {
    var _render21 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      secondary: true,
      action: true
    })),
        container = _render21.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem secondary', function () {
    var _render22 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      secondary: true
    })),
        container = _render22.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem secondary active', function () {
    var _render23 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      secondary: true,
      active: true
    })),
        container = _render23.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem success action', function () {
    var _render24 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      success: true,
      action: true
    })),
        container = _render24.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem success', function () {
    var _render25 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      success: true
    })),
        container = _render25.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem success active', function () {
    var _render26 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      success: true,
      active: true
    })),
        container = _render26.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem warning action', function () {
    var _render27 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      warning: true,
      action: true
    })),
        container = _render27.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem warning', function () {
    var _render28 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      warning: true
    })),
        container = _render28.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches ListGroupItem warning active', function () {
    var _render29 = (0, _react2.render)(_react["default"].createElement(_ListGroupItem["default"], {
      warning: true,
      active: true
    })),
        container = _render29.container;

    expect(container.firstChild).toMatchSnapshot();
  });
});