"use strict";

var _functions = require("./functions");

describe('Util functions', function () {
  describe('omit function', function () {
    it('returns all but the specified key', function () {
      var startingObject = {
        testing: 'foo'
      };
      var endingObject = (0, _functions.omit)(startingObject, 'testing');
      expect(endingObject).toEqual({});
    });
  });
  describe('pick function', function () {
    it('returns only the specified keys', function () {
      var startingObject = {
        testing: 'foo',
        testing2: 'bar'
      };
      var endingObject = (0, _functions.pick)(startingObject, 'testing');
      expect(endingObject).toEqual({
        testing: 'foo'
      });
    });
  });
  describe('capitalize function', function () {
    it('capitalizes the first letter of a string', function () {
      var startingString = 'razzamatazz';
      var endingString = (0, _functions.capitalize)(startingString);
      expect(endingString).toEqual('Razzamatazz');
    });
  });
  describe('getConcreteBreakpointSize function', function () {
    it('Returns the specified key from the screenSize theme object', function () {
      var props = {
        theme: {
          breakpoints: {
            sm: '576px'
          }
        }
      };
      var returnValue = (0, _functions.getConcreteBreakpointSize)(props, 'sm');
      expect(returnValue).toEqual('576px');
    });
  });
});