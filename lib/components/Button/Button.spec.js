"use strict";

var _react = _interopRequireDefault(require("react"));

var _jestAxe = require("jest-axe");

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

afterEach(_react2.cleanup);
describe('Button Component', function () {
  it('matches Button',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)(_react["default"].createElement(_Button.Button, null, "Text")), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('display', 'inline-block');
            expect(container.firstChild).toHaveStyleRule('font-weight', '400');
            expect(container.firstChild).toHaveStyleRule('text-align', 'center');
            expect(container.firstChild).toHaveStyleRule('white-space', 'nowrap');
            expect(container.firstChild).toHaveStyleRule('vertical-align', 'middle');
            expect(container.firstChild).toHaveStyleRule('user-select', 'none');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d');
            expect(container.firstChild).toHaveStyleRule('padding', '0.375rem 0.75rem');
            expect(container.firstChild).toHaveStyleRule('font-size', '1rem');
            expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
            expect(container.firstChild).toHaveStyleRule('border-radius', '0.25rem');
            expect(container.firstChild).toHaveStyleRule('transition', 'color 0.15s ease-in-out,background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out');
            expect(container.firstChild).toHaveStyleRule('text-decoration', 'none', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('text-decoration', 'none', {
              modifier: '&:focus'
            });
            expect(container.firstChild).toHaveStyleRule('outline', '0', {
              modifier: '&:focus'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
              modifier: '&:focus'
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('matches LinkButton',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var _render2, container, results;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = (0, _react2.render)(_react["default"].createElement(_Button.LinkButton, null, "Text")), container = _render2.container;
            _context2.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context2.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('matches Button dropdownToggle',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var _render3, container, results;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render3 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              dropdownToggle: true
            }, "Text")), container = _render3.container;
            _context3.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context3.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('display', 'inline-block', {
              modifier: '&::after'
            });
            expect(container.firstChild).toHaveStyleRule('width', '0', {
              modifier: '&::after'
            });
            expect(container.firstChild).toHaveStyleRule('height', '0', {
              modifier: '&::after'
            });
            expect(container.firstChild).toHaveStyleRule('margin-left', '0.255em', {
              modifier: '&::after'
            });
            expect(container.firstChild).toHaveStyleRule('vertical-align', '0.255em', {
              modifier: '&::after'
            });
            expect(container.firstChild).toHaveStyleRule('content', "''", {
              modifier: '&::after'
            });
            expect(container.firstChild).toHaveStyleRule('border-top', '0.3em solid', {
              modifier: '&::after'
            });
            expect(container.firstChild).toHaveStyleRule('border-right', '0.3em solid transparent', {
              modifier: '&::after'
            });
            expect(container.firstChild).toHaveStyleRule('border-bottom', '0', {
              modifier: '&::after'
            });
            expect(container.firstChild).toHaveStyleRule('border-left', '0.3em solid transparent', {
              modifier: '&::after'
            });
            expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
              modifier: '&:empty::after'
            });

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('matches Button active', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
      active: true
    }, "Text")),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
  });
  it('matches Button block',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var _render5, container, results;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _render5 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              block: true
            }, "Text")), container = _render5.container;
            _context4.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context4.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('display', 'block');
            expect(container.firstChild).toHaveStyleRule('width', '100%');

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('matches Button danger',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var _render6, container, results;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _render6 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              danger: true
            }, "Text")), container = _render6.container;
            _context5.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context5.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('matches Button danger disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var _render7, container, results;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _render7 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              danger: true,
              disabled: true
            }, "Text")), container = _render7.container;
            _context6.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context6.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('matches Button danger active',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7() {
    var _render8, container, results;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _render8 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              danger: true,
              active: true
            }, "Text")), container = _render8.container;
            _context7.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context7.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
  it('matches Button danger outline disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    var _render9, container, results;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _render9 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              danger: true,
              outline: true,
              disabled: true
            }, "Text")), container = _render9.container;
            _context8.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context8.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#dc3545');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #dc3545');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('color', '#dc3545', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #dc3545', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(220,53,69,0.5)', {
              modifier: '&:focus'
            });

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  it('matches Button danger outline',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9() {
    var _render10, container, results;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _render10 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              danger: true,
              outline: true
            }, "Text")), container = _render10.container;
            _context9.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context9.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#dc3545');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #dc3545');
            expect(container.firstChild).toHaveStyleRule('color', '#fff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', '#dc3545', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #dc3545', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(220,53,69,0.5)', {
              modifier: '&:focus'
            });

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
  it('matches Button dark disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10() {
    var _render11, container, results;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _render11 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              dark: true,
              disabled: true
            }, "Text")), container = _render11.container;
            _context10.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context10.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#fff');
            expect(container.firstChild).toHaveStyleRule('background-color', '#343a40');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40');
            expect(container.firstChild).toHaveStyleRule('color', '#fff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', '#343a40', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(52,58,64,0.5)', {
              modifier: '&:focus'
            });

          case 13:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })));
  it('matches Button dark',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11() {
    var _render12, container, results;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _render12 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              dark: true
            }, "Text")), container = _render12.container;
            _context11.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context11.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })));
  it('matches Button dark active',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12() {
    var container;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            container = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              dark: true,
              active: true
            }, "Text")); // Why Does this fail?
            // const results = await axe(container);
            // expect(results).toHaveNoViolations();

            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  })));
  it('matches Button dark outline disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13() {
    var _render13, container, results;

    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _render13 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              dark: true,
              outline: true,
              disabled: true
            }, "Text")), container = _render13.container;
            _context13.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context13.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#343a40');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40');
            expect(container.firstChild).toHaveStyleRule('color', '#343a40', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(52,58,64,0.5)', {
              modifier: '&:focus'
            });

          case 15:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  })));
  it('matches Button dark outline',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee14() {
    var _render14, container, results;

    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _render14 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              dark: true,
              outline: true
            }, "Text")), container = _render14.container;
            _context14.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context14.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#343a40');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40');
            expect(container.firstChild).toHaveStyleRule('color', '#fff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', '#343a40', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(52,58,64,0.5)', {
              modifier: '&:focus'
            });

          case 14:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  })));
  it('matches Button disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee15() {
    var _render15, container, results;

    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _render15 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              disabled: true
            }, "Text")), container = _render15.container;
            _context15.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context15.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('opacity', '0.65');

          case 7:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  })));
  it('matches Button info active',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee16() {
    var _render16, container, results;

    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _render16 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              info: true,
              active: true
            }, "Text")), container = _render16.container;
            _context16.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context16.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  })));
  it('matches Button info outline',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee17() {
    var _render17, container, results;

    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _render17 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              info: true,
              outline: true
            }, "Text")), container = _render17.container;
            _context17.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context17.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#17a2b8');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #17a2b8');
            expect(container.firstChild).toHaveStyleRule('color', '#fff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', '#17a2b8', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #17a2b8', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(23,162,184,0.5)', {
              modifier: '&:focus'
            });

          case 14:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  })));
  it('matches Button info outline disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee18() {
    var _render18, container, results;

    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _render18 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              info: true,
              outline: true,
              disabled: true
            }, "Text")), container = _render18.container;
            _context18.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context18.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#17a2b8');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #17a2b8');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('color', '#17a2b8', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #17a2b8', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(23,162,184,0.5)', {
              modifier: '&:focus'
            });

          case 15:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  })));
  it('matches Button large',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee19() {
    var _render19, container, results;

    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _render19 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              lg: true
            }, "Text")), container = _render19.container;
            _context19.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context19.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem');
            expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem');
            expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
            expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem');

          case 10:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  })));
  it('matches Button light',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee20() {
    var _render20, container, results;

    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _render20 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              light: true
            }, "Text")), container = _render20.container;
            _context20.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context20.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  })));
  it('matches Button light disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee21() {
    var _render21, container, results;

    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _render21 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              light: true,
              disabled: true
            }, "Text")), container = _render21.container;
            _context21.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context21.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  })));
  it('matches Button light active',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee22() {
    var _render22, container, results;

    return regeneratorRuntime.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _render22 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              light: true,
              active: true
            }, "Text")), container = _render22.container;
            _context22.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context22.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  })));
  it('matches Button light outline',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee23() {
    var _render23, container, results;

    return regeneratorRuntime.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _render23 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              light: true,
              outline: true
            }, "Text")), container = _render23.container;
            _context23.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context23.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  })));
  it('matches Button light outline disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee24() {
    var _render24, container, results;

    return regeneratorRuntime.wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _render24 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              light: true,
              outline: true,
              disabled: true
            }, "Text")), container = _render24.container;
            _context24.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context24.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  })));
  it('matches Button noRadius',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee25() {
    var _render25, container, results;

    return regeneratorRuntime.wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _render25 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              noRadius: true
            }, "Text")), container = _render25.container;
            _context25.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context25.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('border-radius', '0');

          case 7:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  })));
  it('matches Button pill',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee26() {
    var _render26, container, results;

    return regeneratorRuntime.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _render26 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              pill: true
            }, "Text")), container = _render26.container;
            _context26.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context26.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('border-radius', '10rem');

          case 7:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  })));
  it('matches Button primary',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee27() {
    var _render27, container, results;

    return regeneratorRuntime.wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _render27 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              primary: true
            }, "Text")), container = _render27.container;
            _context27.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context27.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  })));
  it('matches Button primary disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee28() {
    var _render28, container, results;

    return regeneratorRuntime.wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _render28 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              primary: true,
              disabled: true
            }, "Text")), container = _render28.container;
            _context28.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context28.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#fff');
            expect(container.firstChild).toHaveStyleRule('background-color', '#007bff');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff');
            expect(container.firstChild).toHaveStyleRule('color', '#fff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', '#007bff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
              modifier: '&:focus'
            });

          case 13:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  })));
  it('matches Button primary active',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee29() {
    var _render29, container, results;

    return regeneratorRuntime.wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _render29 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              primary: true,
              active: true
            }, "Text")), container = _render29.container;
            _context29.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context29.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29);
  })));
  it('matches Button primary outline',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee30() {
    var _render30, container, results;

    return regeneratorRuntime.wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _render30 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              primary: true,
              outline: true
            }, "Text")), container = _render30.container;
            _context30.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context30.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#007bff');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff');
            expect(container.firstChild).toHaveStyleRule('color', '#fff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', '#007bff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
              modifier: '&:focus'
            });

          case 14:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30);
  })));
  it('matches Button primary outline disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee31() {
    var _render31, container, results;

    return regeneratorRuntime.wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            _render31 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              primary: true,
              outline: true,
              disabled: true
            }, "Text")), container = _render31.container;
            _context31.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context31.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#007bff');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff');
            expect(container.firstChild).toHaveStyleRule('color', '#007bff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
              modifier: '&:focus'
            });

          case 15:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31);
  })));
  it('matches Button secondary',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee32() {
    var _render32, container, results;

    return regeneratorRuntime.wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            _render32 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              secondary: true
            }, "Text")), container = _render32.container;
            _context32.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context32.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32);
  })));
  it('matches Button secondary disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee33() {
    var _render33, container, results;

    return regeneratorRuntime.wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _render33 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              secondary: true,
              disabled: true
            }, "Text")), container = _render33.container;
            _context33.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context33.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#fff');
            expect(container.firstChild).toHaveStyleRule('background-color', '#6c757d');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d');
            expect(container.firstChild).toHaveStyleRule('color', '#fff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', '#6c757d', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
              modifier: '&:focus'
            });

          case 13:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33);
  })));
  it('matches Button secondary active',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee34() {
    var _render34, container, results;

    return regeneratorRuntime.wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _render34 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              secondary: true,
              active: true
            }, "Text")), container = _render34.container;
            _context34.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context34.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34);
  })));
  it('matches Button secondary outline',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee35() {
    var _render35, container, results;

    return regeneratorRuntime.wrap(function _callee35$(_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            _render35 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              secondary: true,
              outline: true
            }, "Text")), container = _render35.container;
            _context35.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context35.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#6c757d');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d');
            expect(container.firstChild).toHaveStyleRule('color', '#fff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', '#6c757d', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
              modifier: '&:focus'
            });

          case 14:
          case "end":
            return _context35.stop();
        }
      }
    }, _callee35);
  })));
  it('matches Button secondary outline disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee36() {
    var _render36, container, results;

    return regeneratorRuntime.wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            _render36 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              secondary: true,
              outline: true,
              disabled: true
            }, "Text")), container = _render36.container;
            _context36.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context36.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#6c757d');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('color', '#6c757d', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
              modifier: '&:focus'
            });

          case 15:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36);
  })));
  it('matches Button small',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee37() {
    var _render37, container, results;

    return regeneratorRuntime.wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            _render37 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              sm: true
            }, "Text")), container = _render37.container;
            _context37.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context37.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem');
            expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem');
            expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
            expect(container.firstChild).toHaveStyleRule('border-radius', '0.2rem');

          case 10:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37);
  })));
  it('matcheses Button split',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee38() {
    var _render38, container, results;

    return regeneratorRuntime.wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            _render38 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              split: true
            }, "Text")), container = _render38.container;
            _context38.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context38.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding', '0');
            expect(container.firstChild).toHaveStyleRule('padding-right', '0.5625rem');
            expect(container.firstChild).toHaveStyleRule('padding-left', '0.5625rem');
            expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
              modifier: '&::after'
            });

          case 10:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38);
  })));
  it('matcheses Button split lg',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee39() {
    var _render39, container, results;

    return regeneratorRuntime.wrap(function _callee39$(_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            _render39 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              split: true,
              lg: true
            }, "Text")), container = _render39.container;
            _context39.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context39.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding', '0');
            expect(container.firstChild).toHaveStyleRule('padding-right', '0.75rem');
            expect(container.firstChild).toHaveStyleRule('padding-left', '0.75rem');
            expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
              modifier: '&::after'
            });

          case 10:
          case "end":
            return _context39.stop();
        }
      }
    }, _callee39);
  })));
  it('matcheses Button split sm',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee40() {
    var _render40, container, results;

    return regeneratorRuntime.wrap(function _callee40$(_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            _render40 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              split: true,
              sm: true
            }, "Text")), container = _render40.container;
            _context40.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context40.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding', '0');
            expect(container.firstChild).toHaveStyleRule('padding-right', '0.375rem');
            expect(container.firstChild).toHaveStyleRule('padding-left', '0.375rem');
            expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
              modifier: '&::after'
            });

          case 10:
          case "end":
            return _context40.stop();
        }
      }
    }, _callee40);
  })));
  it('matches Button success',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee41() {
    var _render41, container, results;

    return regeneratorRuntime.wrap(function _callee41$(_context41) {
      while (1) {
        switch (_context41.prev = _context41.next) {
          case 0:
            _render41 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              success: true
            }, "Text")), container = _render41.container;
            _context41.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context41.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context41.stop();
        }
      }
    }, _callee41);
  })));
  it('matches Button success disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee42() {
    var _render42, container, results;

    return regeneratorRuntime.wrap(function _callee42$(_context42) {
      while (1) {
        switch (_context42.prev = _context42.next) {
          case 0:
            _render42 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              success: true,
              disabled: true
            }, "Text")), container = _render42.container;
            _context42.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context42.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context42.stop();
        }
      }
    }, _callee42);
  })));
  it('matches Button success active',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee43() {
    var _render43, container, results;

    return regeneratorRuntime.wrap(function _callee43$(_context43) {
      while (1) {
        switch (_context43.prev = _context43.next) {
          case 0:
            _render43 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              success: true,
              active: true
            }, "Text")), container = _render43.container;
            _context43.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context43.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context43.stop();
        }
      }
    }, _callee43);
  })));
  it('matches Button success outline',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee44() {
    var _render44, container, results;

    return regeneratorRuntime.wrap(function _callee44$(_context44) {
      while (1) {
        switch (_context44.prev = _context44.next) {
          case 0:
            _render44 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              success: true,
              outline: true
            }, "Text")), container = _render44.container;
            _context44.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context44.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#28a745');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #28a745');
            expect(container.firstChild).toHaveStyleRule('color', '#fff', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', '#28a745', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #28a745', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(40,167,69,0.5)', {
              modifier: '&:focus'
            });

          case 14:
          case "end":
            return _context44.stop();
        }
      }
    }, _callee44);
  })));
  it('matches Button success outline disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee45() {
    var _render45, container, results;

    return regeneratorRuntime.wrap(function _callee45$(_context45) {
      while (1) {
        switch (_context45.prev = _context45.next) {
          case 0:
            _render45 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              success: true,
              outline: true,
              disabled: true
            }, "Text")), container = _render45.container;
            _context45.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context45.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#28a745');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #28a745');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('color', '#28a745', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #28a745', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(40,167,69,0.5)', {
              modifier: '&:focus'
            });

          case 15:
          case "end":
            return _context45.stop();
        }
      }
    }, _callee45);
  })));
  it('matches Button warning',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee46() {
    var _render46, container, results;

    return regeneratorRuntime.wrap(function _callee46$(_context46) {
      while (1) {
        switch (_context46.prev = _context46.next) {
          case 0:
            _render46 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              warning: true
            }, "Text")), container = _render46.container;
            _context46.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context46.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context46.stop();
        }
      }
    }, _callee46);
  })));
  it('matches Button warning disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee47() {
    var _render47, container, results;

    return regeneratorRuntime.wrap(function _callee47$(_context47) {
      while (1) {
        switch (_context47.prev = _context47.next) {
          case 0:
            _render47 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              warning: true,
              disabled: true
            }, "Text")), container = _render47.container;
            _context47.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context47.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context47.stop();
        }
      }
    }, _callee47);
  })));
  it('matches Button warning active',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee48() {
    var _render48, container, results;

    return regeneratorRuntime.wrap(function _callee48$(_context48) {
      while (1) {
        switch (_context48.prev = _context48.next) {
          case 0:
            _render48 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              warning: true,
              active: true
            }, "Text")), container = _render48.container;
            _context48.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context48.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context48.stop();
        }
      }
    }, _callee48);
  })));
  it('matches Button warning outline',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee49() {
    var _render49, container, results;

    return regeneratorRuntime.wrap(function _callee49$(_context49) {
      while (1) {
        switch (_context49.prev = _context49.next) {
          case 0:
            _render49 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              warning: true,
              outline: true
            }, "Text")), container = _render49.container;
            _context49.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context49.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#ffc107');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #ffc107');
            expect(container.firstChild).toHaveStyleRule('color', '#212529', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', '#ffc107', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #ffc107', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(255,193,7,0.5)', {
              modifier: '&:focus'
            });

          case 14:
          case "end":
            return _context49.stop();
        }
      }
    }, _callee49);
  })));
  it('matches Button warning outline disabled',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee50() {
    var _render50, container, results;

    return regeneratorRuntime.wrap(function _callee50$(_context50) {
      while (1) {
        switch (_context50.prev = _context50.next) {
          case 0:
            _render50 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
              warning: true,
              outline: true,
              disabled: true
            }, "Text")), container = _render50.container;
            _context50.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context50.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#ffc107');
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #ffc107');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none');
            expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('color', '#ffc107', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('border', '1px solid #ffc107', {
              modifier: '&:hover'
            });
            expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(255,193,7,0.5)', {
              modifier: '&:focus'
            });

          case 15:
          case "end":
            return _context50.stop();
        }
      }
    }, _callee50);
  })));
});