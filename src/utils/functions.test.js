import { omit, pick, capitalize, getConcreteBreakpointSize } from './functions';

describe('Util functions', () => {
  describe('omit function', () => {
    it('returns all but the specified key', () => {
      const startingObject = {
        testing: 'foo',
      };
      const endingObject = omit(startingObject, 'testing');
      expect(endingObject).toEqual({});
    });
  });
  describe('pick function', () => {
    it('returns only the specified keys', () => {
      const startingObject = {
        testing: 'foo',
        testing2: 'bar',
      };
      const endingObject = pick(startingObject, 'testing');
      expect(endingObject).toEqual({ testing: 'foo' });
    });
  });
  describe('capitalize function', () => {
    it('capitalizes the first letter of a string', () => {
      const startingString = 'razzamatazz';
      const endingString = capitalize(startingString);
      expect(endingString).toEqual('Razzamatazz');
    });
  });
  describe('getConcreteBreakpointSize function', () => {
    it('Returns the specified key from the screenSize theme object', () => {
      const props = {
        theme: {
          screenSize: {
            sm: '576px',
          },
        },
      };
      const returnValue = getConcreteBreakpointSize(props, 'sm');
      expect(returnValue).toEqual('576px');
    });
  });
});
