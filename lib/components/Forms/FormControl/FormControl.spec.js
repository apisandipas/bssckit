"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _FormControl = _interopRequireDefault(require("./FormControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

afterEach(_react2.cleanup);
describe('FormControl component', function () {
  it('matches FormControl',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _render, container;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], null)), container = _render.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('matches FormControl',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var _render2, container;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              disabled: true
            })), container = _render2.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('matches FormControl formInline',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var _render3, container;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render3 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              formInline: true
            })), container = _render3.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('matches FormControl valid',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var _render4, container;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _render4 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              valid: true
            })), container = _render4.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('matches FormControl invalid',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var _render5, container;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _render5 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              invalid: true
            })), container = _render5.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('matches FormControl large',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var _render6, container;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _render6 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              lg: true
            })), container = _render6.container;
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem');
            expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem');
            expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
            expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem');

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('matches FormControl large select',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7() {
    var _render7, container;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _render7 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              lg: true,
              select: true
            })), container = _render7.container;
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem');
            expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem');
            expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
            expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem');
            expect(container.firstChild).toHaveStyleRule('height', 'calc(2.875rem + 2px)');

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
  it('matches FormControl small',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    var _render8, container;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _render8 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              sm: true
            })), container = _render8.container;
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem');
            expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem');
            expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
            expect(container.firstChild).toHaveStyleRule('border-radius', '0.2rem');

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  it('matches FormControl small select',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9() {
    var _render9, container;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _render9 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              sm: true,
              select: true
            })), container = _render9.container;
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem');
            expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem');
            expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
            expect(container.firstChild).toHaveStyleRule('border-radius', '0.2rem');
            expect(container.firstChild).toHaveStyleRule('height', 'calc(1.8125rem + 2px)');

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
  it('matches FormControl noRadius',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10() {
    var _render10, container;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _render10 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              noRadius: true
            })), container = _render10.container;
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('border-radius', '0');

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })));
  it('matches FormControl pill',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11() {
    var _render11, container;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _render11 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              pill: true
            })), container = _render11.container;
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('border-radius', '10rem');

          case 3:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })));
  it('matches FormControl select',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12() {
    var _render12, container;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _render12 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              select: true
            })), container = _render12.container;
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('height', 'calc(2.25rem + 2px)');

          case 3:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  })));
  it('matches FormControl textarea',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13() {
    var _render13, container;

    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _render13 = (0, _react2.render)(_react["default"].createElement(_FormControl["default"], {
              textarea: true
            })), container = _render13.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  })));
});