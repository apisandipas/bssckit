import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button, LinkButton } from './index';

test('Styles matches Button', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'inline-block');
  expect(tree).toHaveStyleRule('font-weight', '400');
  expect(tree).toHaveStyleRule('text-align', 'center');
  expect(tree).toHaveStyleRule('white-space', 'nowrap');
  expect(tree).toHaveStyleRule('vertical-align', 'middle');
  expect(tree).toHaveStyleRule('user-select', 'none');
  expect(tree).toHaveStyleRule('border', '1px solid #6c757d');
  expect(tree).toHaveStyleRule('padding', '0.375rem 0.75rem');
  expect(tree).toHaveStyleRule('font-size', '1rem');
  expect(tree).toHaveStyleRule('line-height', '1.5');
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
  expect(tree).toHaveStyleRule(
    'transition',
    'color 0.15s ease-in-out,background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out'
  );
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('text-decoration', 'none', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('outline', '0', {
    modifier: '&:focus',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles match LinkButton', () => {
  const tree = renderer.create(<LinkButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles match Button active', () => {
  const tree = renderer.create(<Button active />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-image', 'none');
});

test('Styles match Button block', () => {
  const tree = renderer.create(<Button block />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'block');
  expect(tree).toHaveStyleRule('width', '100%');
});

test('Styles match Button disabled', () => {
  const tree = renderer.create(<Button disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('opacity', '0.65');
});

test('Styles matches Button primary disabled', () => {
  const tree = renderer.create(<Button primary disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background-color', '#007bff');
  expect(tree).toHaveStyleRule('border', '1px solid #007bff');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#007bff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #007bff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles match Button primary', () => {
  const tree = renderer.create(<Button primary />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles match Button primary active', () => {
  const tree = renderer.create(<Button primary active />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles match Button primary outline disabled', () => {
  const tree = renderer.create(<Button primary outline disabled />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#007bff');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('border', '1px solid #007bff');
  expect(tree).toHaveStyleRule('color', '#007bff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', 'transparent', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-image', 'none', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #007bff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles match Button primary outline', () => {
  const tree = renderer.create(<Button primary outline />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#007bff');
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('background-image', 'none');
  expect(tree).toHaveStyleRule('border', '1px solid #007bff');
  expect(tree).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('background-color', '#007bff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('border', '1px solid #007bff', {
    modifier: '&:hover',
  });
  expect(tree).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
    modifier: '&:focus',
  });
});
