"use strict";

var _react = _interopRequireDefault(require("react"));

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('ButtonGroup Component', function () {
  it('matches ButtonGroup',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)(_react["default"].createElement(_ButtonGroup["default"], null)), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('position', 'relative');
            expect(container.firstChild).toHaveStyleRule('display', 'inline-flex');
            expect(container.firstChild).toHaveStyleRule('vertical-align', 'middle');
            expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
              modifier: '& > button'
            });
            expect(container.firstChild).toHaveStyleRule('position', 'relative', {
              modifier: '& > button'
            });
            expect(container.firstChild).toHaveStyleRule('flex', '0 1 auto', {
              modifier: '& > button'
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('matches ButtonGroup lg',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var _render2, container, results;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _render2 = (0, _react2.render)(_react["default"].createElement(_ButtonGroup["default"], {
              lg: true
            })), container = _render2.container;
            _context2.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context2.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem', {
              modifier: '& > button'
            });
            expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem', {
              modifier: '& > button'
            });
            expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
              modifier: '& > button'
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('matches ButtonGroup sm',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var _render3, container, results;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _render3 = (0, _react2.render)(_react["default"].createElement(_ButtonGroup["default"], {
              sm: true
            })), container = _render3.container;
            _context3.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context3.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem', {
              modifier: '& > button'
            });
            expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem', {
              modifier: '& > button'
            });
            expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
              modifier: '& > button'
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('matches ButtonGroup vertical',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var _render4, container, results;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _render4 = (0, _react2.render)(_react["default"].createElement(_ButtonGroup["default"], {
              vertical: true
            })), container = _render4.container;
            _context4.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context4.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
            expect(container.firstChild).toHaveStyleRule('align-items', 'flex-start');
            expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
            expect(container.firstChild).toHaveStyleRule('width', '100%', {
              modifier: '& > button'
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});