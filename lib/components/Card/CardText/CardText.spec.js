"use strict";

var _react = _interopRequireDefault(require("react"));

var _jestAxe = require("jest-axe");

var _react2 = require("@testing-library/react");

require("jest-styled-components");

var _CardText = _interopRequireDefault(require("./CardText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('CardText Component', function () {
  it('matches CardText',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _render, container, results;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)(_react["default"].createElement(_CardText["default"], null)), container = _render.container;
            _context.next = 3;
            return (0, _jestAxe.axe)(container);

          case 3:
            results = _context.sent;
            expect(results).toHaveNoViolations();
            expect(container.firstChild).toMatchSnapshot();
            expect(container.firstChild).toHaveStyleRule('margin-top', '0');
            expect(container.firstChild).toHaveStyleRule('margin-bottom', '1rem');
            expect(container.firstChild).toHaveStyleRule('margin-bottom', '0', {
              modifier: '&:last-child'
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});