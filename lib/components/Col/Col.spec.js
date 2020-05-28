"use strict";

var _react = _interopRequireDefault(require("react"));

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _Col = _interopRequireDefault(require("./Col"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

afterEach(_react2.cleanup);
describe('Col component', function () {
  it('matches Col styles',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)(_react["default"].createElement(_Col["default"], null)), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding-right', 'calc(30px / 2)');
            expect(container.firstChild).toHaveStyleRule('padding-left', 'calc(30px / 2)');
            expect(container.firstChild).toHaveStyleRule('width', '100%');

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('matches Col with specified xs size',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var _render2, container;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = (0, _react2.render)(_react["default"].createElement(_Col["default"], {
              xs: 6
            })), container = _render2.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('matches Col with specified sm size',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var _render3, container;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render3 = (0, _react2.render)(_react["default"].createElement(_Col["default"], {
              sm: 6
            })), container = _render3.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('matches Col with specified md size',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var _render4, container;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _render4 = (0, _react2.render)(_react["default"].createElement(_Col["default"], {
              md: 6
            })), container = _render4.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('matches Col with specified lg size',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var _render5, container;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _render5 = (0, _react2.render)(_react["default"].createElement(_Col["default"], {
              lg: 6
            })), container = _render5.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('matches Col with specified xl size',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var _render6, container;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _render6 = (0, _react2.render)(_react["default"].createElement(_Col["default"], {
              xl: 6
            })), container = _render6.container;
            expect(container.firstChild).toMatchSnapshot();

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('matches Col with specified xs offset', function () {
    var _render7 = (0, _react2.render)(_react["default"].createElement(_Col["default"], {
      xsOffset: 6
    })),
        container = _render7.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Col with specified sm offset', function () {
    var _render8 = (0, _react2.render)(_react["default"].createElement(_Col["default"], {
      smOffset: 6
    })),
        container = _render8.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Col with specified md offset', function () {
    var _render9 = (0, _react2.render)(_react["default"].createElement(_Col["default"], {
      mdOffset: 6
    })),
        container = _render9.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Col with specified lg offset', function () {
    var _render10 = (0, _react2.render)(_react["default"].createElement(_Col["default"], {
      lgOffset: 6
    })),
        container = _render10.container;

    expect(container.firstChild).toMatchSnapshot();
  });
  it('matches Col with specified xl offset', function () {
    var _render11 = (0, _react2.render)(_react["default"].createElement(_Col["default"], {
      xlOffset: 6
    })),
        container = _render11.container;

    expect(container.firstChild).toMatchSnapshot();
  });
});