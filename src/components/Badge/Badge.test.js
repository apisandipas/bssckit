import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Badge from './index';

test('Styles match plain', () => {
  const tree = renderer.create(<Badge />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-block');
  expect(tree).toHaveStyleRule('padding', '0.25rem 0.4rem');
  expect(tree).toHaveStyleRule('font-size', '75%');
  expect(tree).toHaveStyleRule('font-weight', '700');
  expect(tree).toHaveStyleRule('line-height', '1');
  expect(tree).toHaveStyleRule('text-align', 'center');
  expect(tree).toHaveStyleRule('white-space', 'nowrap');
  expect(tree).toHaveStyleRule('vertical-align', 'baseline');
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
  expect(tree).toHaveStyleRule('display', 'none', {
    modifier: '&:empty',
  });
});

test('Styles matches primary', () => {
  const tree = renderer.create(<Badge primary />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#007bff');
});

test('Styles matches secondary', () => {
  const tree = renderer.create(<Badge secondary />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#6c757d');
});

test('Styles matches success', () => {
  const tree = renderer.create(<Badge success />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#28a745');
});

test('Styles matches danger', () => {
  const tree = renderer.create(<Badge danger />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#dc3545');
});

test('Styles matches warning', () => {
  const tree = renderer.create(<Badge warning />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#ffc107');
});

test('Styles matches info', () => {
  const tree = renderer.create(<Badge info />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#17a2b8');
});

test('Styles matches light', () => {
  const tree = renderer.create(<Badge light />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'rgb(45,47,49)');
  expect(tree).toHaveStyleRule('background-color', '#f8f9fa');
});

test('Styles matches dark', () => {
  const tree = renderer.create(<Badge dark />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#343a40');
});
