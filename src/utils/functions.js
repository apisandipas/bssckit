import React from 'react';

/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
export const omit = (obj, omitKeys) => {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
};

/**
 * Returns a filtered copy of an object with only the specified keys.
 */
export const pick = (obj, keys) => {
  const pickKeys = Array.isArray(keys) ? keys : [keys];
  let length = pickKeys.length;
  let key;
  const result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
};

/**
 * Workaround for hooks in Storybook stories
 */
export const Story = Component => () => <Component />;

/**
 *  Returns Capitalized string
 */
export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Returns the breakpoint value for the given screen size
 */
export const getConcreteBreakpointSize = (props, size) => {
  return props?.theme?.screenSize[size];
};
