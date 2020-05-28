"use strict";

var _react = _interopRequireDefault(require("react"));

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

afterEach(_react2.cleanup);
describe('Badge Component', function () {
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
            _render = (0, _react2.render)(_react["default"].createElement(_index.Badge, null)), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('display', 'inline-block');
            expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.4rem');
            expect(container.firstChild).toHaveStyleRule('font-size', '75%');
            expect(container.firstChild).toHaveStyleRule('font-weight', '700');
            expect(container.firstChild).toHaveStyleRule('line-height', '1');
            expect(container.firstChild).toHaveStyleRule('text-align', 'center');
            expect(container.firstChild).toHaveStyleRule('white-space', 'nowrap');
            expect(container.firstChild).toHaveStyleRule('vertical-align', 'baseline');
            expect(container.firstChild).toHaveStyleRule('border-radius', '0.25rem');
            expect(container.firstChild).toHaveStyleRule('display', 'none', {
              modifier: '&:empty'
            });

          case 16:
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
            _render2 = (0, _react2.render)(_react["default"].createElement(_index.Badge, {
              primary: true
            })), container = _render2.container;
            _context2.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context2.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#fff');
            expect(container.firstChild).toHaveStyleRule('background-color', '#007bff');

          case 8:
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
            _render3 = (0, _react2.render)(_react["default"].createElement(_index.Badge, {
              secondary: true
            })), container = _render3.container;
            _context3.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context3.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#fff');
            expect(container.firstChild).toHaveStyleRule('background-color', '#6c757d');

          case 8:
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
            _render4 = (0, _react2.render)(_react["default"].createElement(_index.Badge, {
              success: true
            })), container = _render4.container;
            _context4.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context4.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#fff');
            expect(container.firstChild).toHaveStyleRule('background-color', '#28a745');

          case 8:
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
            _render5 = (0, _react2.render)(_react["default"].createElement(_index.Badge, {
              danger: true
            })), container = _render5.container;
            _context5.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context5.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#fff');
            expect(container.firstChild).toHaveStyleRule('background-color', '#dc3545');

          case 8:
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
            _render6 = (0, _react2.render)(_react["default"].createElement(_index.Badge, {
              warning: true
            })), container = _render6.container;
            _context6.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context6.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#2d2f31');
            expect(container.firstChild).toHaveStyleRule('background-color', '#ffc107');

          case 8:
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
            _render7 = (0, _react2.render)(_react["default"].createElement(_index.Badge, {
              info: true
            })), container = _render7.container;
            _context7.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context7.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#fff');
            expect(container.firstChild).toHaveStyleRule('background-color', '#17a2b8');

          case 8:
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
            _render8 = (0, _react2.render)(_react["default"].createElement(_index.Badge, {
              light: true
            })), container = _render8.container;
            _context8.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context8.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#2d2f31');
            expect(container.firstChild).toHaveStyleRule('background-color', '#f0f0f0');

          case 8:
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
            _render9 = (0, _react2.render)(_react["default"].createElement(_index.Badge, {
              dark: true
            })), container = _render9.container;
            _context9.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context9.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('color', '#fff');
            expect(container.firstChild).toHaveStyleRule('background-color', '#343a40');

          case 8:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
});