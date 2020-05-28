"use strict";

var _react = _interopRequireDefault(require("react"));

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _Alert = _interopRequireDefault(require("./Alert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Alert Component', function () {
  it('matches plain',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)(_react["default"].createElement(_Alert["default"], null, "Hello World")), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('position', 'relative');
            expect(container.firstChild).toHaveStyleRule('padding', '0.75rem 1.25rem');
            expect(container.firstChild).toHaveStyleRule('border', '1px solid transparent');
            expect(container.firstChild).toHaveStyleRule('border-radius', '0.25rem');
            expect(container.firstChild).toHaveStyleRule('font-weight', '700', {
              modifier: '& > a'
            });
            expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
              modifier: '& > h1'
            });
            expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
              modifier: '& > h2'
            });
            expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
              modifier: '& > h3'
            });
            expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
              modifier: '& > h4'
            });
            expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
              modifier: '& > h5'
            });
            expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
              modifier: '& > h6'
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('matches primary',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var _render2, container, results;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = (0, _react2.render)(_react["default"].createElement(_Alert["default"], {
              primary: true
            })), container = _render2.container;
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
  it('matches secondary',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var _render3, container, results;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render3 = (0, _react2.render)(_react["default"].createElement(_Alert["default"], {
              secondary: true
            })), container = _render3.container;
            _context3.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context3.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('matches success',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var _render4, container, results;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _render4 = (0, _react2.render)(_react["default"].createElement(_Alert["default"], {
              success: true
            })), container = _render4.container;
            _context4.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context4.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('matches danger',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var _render5, container, results;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _render5 = (0, _react2.render)(_react["default"].createElement(_Alert["default"], {
              danger: true
            })), container = _render5.container;
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
  it('matches warning',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var _render6, container, results;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _render6 = (0, _react2.render)(_react["default"].createElement(_Alert["default"], {
              warning: true
            })), container = _render6.container;
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
  it('matches info',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7() {
    var _render7, container, results;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _render7 = (0, _react2.render)(_react["default"].createElement(_Alert["default"], {
              info: true
            })), container = _render7.container;
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
  it('matches light',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    var _render8, container, results;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _render8 = (0, _react2.render)(_react["default"].createElement(_Alert["default"], {
              light: true
            })), container = _render8.container;
            _context8.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context8.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  it('matches dark',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9() {
    var _render9, container, results;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _render9 = (0, _react2.render)(_react["default"].createElement(_Alert["default"], {
              dark: true
            })), container = _render9.container;
            _context9.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context9.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
  it('matches noRadius',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10() {
    var _render10, container, results;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _render10 = (0, _react2.render)(_react["default"].createElement(_Alert["default"], {
              noRadius: true
            })), container = _render10.container;
            _context10.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context10.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('border-radius', '0');

          case 7:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })));
  it('matches pill',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11() {
    var _render11, container, results;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _render11 = (0, _react2.render)(_react["default"].createElement(_Alert["default"], {
              pill: true
            })), container = _render11.container;
            _context11.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context11.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('border-radius', '10rem');

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })));
});