"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _base = require("./base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('Utility Props API', function () {
  it('matches Div', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_base.Div, null)),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with colored text and background', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textLight: true,
      bgDark: true
    })),
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with padding and margin', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      m1: true,
      p1: true
    })),
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with margin and size', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      m0: true,
      mMd2: true
    })),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with auto margin', function () {
    var _render5 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      mlAuto: true
    })),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with paddings', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      p1: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      pl1: true,
      pr1: true,
      pt1: true,
      pb1: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      px1: true,
      py1: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with rounded', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      rounded: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      roundedLeft: true,
      roundedRight: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      roundedTop: true,
      roundedBottom: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with roundedCircle', function () {
    var _render6 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      roundedCircle: true
    })),
        container = _render6.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with roundedPill', function () {
    var _render7 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      roundedPill: true
    })),
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with colored border', function () {
    var _render8 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      border: true,
      borderPrimary: true
    })),
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with 0 border', function () {
    var _render9 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      border0: true
    })),
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with hidden text', function () {
    var _render10 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textHide: true
    }, "text")),
        container = _render10.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with truncated text', function () {
    var _render11 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textTruncate: true
    }, "text")),
        container = _render11.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with word break', function () {
    var _render12 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textWordBreak: true
    }, "text")),
        container = _render12.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with monospace', function () {
    var _render13 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textMonospace: true
    })),
        container = _render13.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with italic', function () {
    var _render14 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textItalic: true
    })),
        container = _render14.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with clearfix', function () {
    var _render15 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      clearfix: true
    })),
        container = _render15.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with text decoration', function () {
    var _render16 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textDecorationNone: true
    })),
        container = _render16.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with text reset', function () {
    var _render17 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textReset: true
    })),
        container = _render17.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with float', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      floatRight: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      floatLeft: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      floatNone: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with transform', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textLowercase: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textUppercase: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textCapitalize: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with text wrap', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textWrap: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textNoWrap: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with text align', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textCenter: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textLeft: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textRight: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textJustify: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with vertical align', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textBaseline: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textTop: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textBottom: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textTextTop: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textTextBottom: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with width/height', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      w100: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      h50: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      mw75: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      mh25: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      wAuto: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with overflow', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      overflowAuto: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      overflowHidden: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with text weight', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textWeightBold: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textWeightBolder: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textWeightNormal: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textWeightLight: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      textWeightLighter: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with position', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      positionStatic: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      positionRelative: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      positionAbsolute: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      positionFixed: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      positionSticky: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with shadow', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      shadowNone: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      shadowSmall: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      shadow: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      shadowLarge: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with order', function () {
    var _render18 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      order1: true
    })),
        container = _render18.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with flex direction', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      flexRow: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      flexRowReverse: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      flexColumn: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      flexColumnReverse: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with justify content', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      justifyContentStart: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      justifyContentEnd: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      justifyContentCenter: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      justifyContentSpaceBetween: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      justifyContentSpaceAround: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      justifyContentSpaceEvenly: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with align', function () {
    ['Start', 'End', 'Center', 'Baseline', 'Stretch'].forEach(function (v) {
      var _props;

      var props = (_props = {}, _defineProperty(_props, "alignSelf".concat(v), true), _defineProperty(_props, "alignItems".concat(v), true), _defineProperty(_props, "alignContent".concat(v), true), _props);

      var _render19 = (0, _react2.render)(_react["default"].createElement(_base.Div, props)),
          container = _render19.container;

      expect(container.firstChild).toMatchSnapshot();
    });
  });
  it('matches Div with flex grow', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      flexGrow0: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      flexGrow: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with flex shrink', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      flexShrink0: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      flexShrink: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with flex wrap', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      flexWrap: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      flexNoWrap: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      flexWrapReverse: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with visibilities', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      visible: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      invisible: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Div with resize', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      resizeNone: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      resizeBoth: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      resizeHorizontal: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      resizeVertical: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Divs with displays', function () {
    var container;
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      dNone: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      dInline: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      dInlineBlock: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      dBlock: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      dTable: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      dTableCell: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      dTableRow: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      dFlex: true
    }));
    expect(container.firstChild).toMatchSnapshot();
    container = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      dInlineFlex: true
    }));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches hidden Div', function () {
    var _render20 = (0, _react2.render)(_react["default"].createElement(_base.Div, {
      hidden: true
    })),
        container = _render20.container;

    expect(container.firstChild).toMatchSnapshot();
  });
});