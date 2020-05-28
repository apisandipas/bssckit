"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _FormGroup = _interopRequireDefault(require("./FormGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('FormGroup Component', function () {
  it('matches normal FormGroup', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_FormGroup["default"], null)),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '1rem');
    expect(container.firstChild).toHaveStyleRule('box-sizing', 'border-box');
  });
  it('matches FormGroup formInline', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_FormGroup["default"], {
      formInline: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot(); // Todo figure out testing with media queries for styled-components
    // expect(container.firstChild).toHaveStyleRule('display', 'flex', {
    //   media: '(min-width: 576px)',
    // });
    // expect(container.firstChild).toHaveStyleRule('flex', '0 0 auto', {
    //   media: '(min-width: 576px)',
    // });
    // expect(container.firstChild).toHaveStyleRule('flex-flow', 'row wrap', {
    //   media: '(min-width: 576px)',
    // });
    // expect(container.firstChild).toHaveStyleRule('align-items', 'center', {
    //   media: '(min-width: 576px)',
    // });
    // expect(container.firstChild).toHaveStyleRule('margin-bottom', '0', {
    //   media: '(min-width: 576px)',
    // });
  });
  it('matches FormGroup justify', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_FormGroup["default"], {
      justify: true
    })),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
  });
  it('matches FormGroup large', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_FormGroup["default"], {
      lg: true
    })),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding-top', 'calc(0.5rem + 1px)', {
      modifier: '& > label'
    });
    expect(container.firstChild).toHaveStyleRule('padding-bottom', 'calc(0.5rem + 1px)', {
      modifier: '& > label'
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem', {
      modifier: '& > label'
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > label'
    });
    expect(container.firstChild).toHaveStyleRule('padding-top', 'calc(0.5rem + 1px)', {
      modifier: '& > div > label'
    });
    expect(container.firstChild).toHaveStyleRule('padding-bottom', 'calc(0.5rem + 1px)', {
      modifier: '& > div > label'
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem', {
      modifier: '& > div > label'
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > div > label'
    });
    expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem', {
      modifier: '& > div > input'
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem', {
      modifier: '& > div > input'
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > div > input'
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem', {
      modifier: '& > div > input'
    });
  });
  it('matches FormGroup small', function () {
    var _render5 = (0, _react2.render)(_react["default"].createElement(_FormGroup["default"], {
      sm: true
    })),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding-top', 'calc(0.25rem + 1px)', {
      modifier: '& > label'
    });
    expect(container.firstChild).toHaveStyleRule('padding-bottom', 'calc(0.25rem + 1px)', {
      modifier: '& > label'
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem', {
      modifier: '& > label'
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > label'
    });
    expect(container.firstChild).toHaveStyleRule('padding-top', 'calc(0.25rem + 1px)', {
      modifier: '& > div > label'
    });
    expect(container.firstChild).toHaveStyleRule('padding-bottom', 'calc(0.25rem + 1px)', {
      modifier: '& > div > label'
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem', {
      modifier: '& > div > label'
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > div > label'
    });
    expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.2rem', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem', {
      modifier: '& > div > input'
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem', {
      modifier: '& > div > input'
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > div > input'
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.2rem', {
      modifier: '& > div > input'
    });
  });
  it('matches FormGroup noRadius', function () {
    var _render6 = (0, _react2.render)(_react["default"].createElement(_FormGroup["default"], {
      noRadius: true
    })),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
      modifier: '& > input'
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
      modifier: '& > div > input'
    }); // expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
    //   modifier: '& > :not(input[type=file])',
    // });
    // expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
    //   modifier: '& > div > :not(input[type=file])',
    // });
  });
  it('matches FormGroup nomb', function () {
    var _render7 = (0, _react2.render)(_react["default"].createElement(_FormGroup["default"], {
      nomb: true
    })),
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0');
  });
  it('matches FormGroup nomb row', function () {
    var _render8 = (0, _react2.render)(_react["default"].createElement(_FormGroup["default"], {
      nomb: true,
      row: true
    })),
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('margin-right', '-5px');
    expect(container.firstChild).toHaveStyleRule('margin-left', '-5px');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0', {
      modifier: '& > div > label'
    });
  });
  test('matches FormGroup row', function () {
    var _render9 = (0, _react2.render)(_react["default"].createElement(_FormGroup["default"], {
      row: true
    })),
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();
  });
});