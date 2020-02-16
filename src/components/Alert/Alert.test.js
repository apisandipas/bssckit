import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Alert from './index';

test('Styles match plain', () => {
  const tree = renderer.create(<Alert>Hello World</Alert>).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('position', 'relative');
  expect(tree).toHaveStyleRule('padding', '0.75rem 1.25rem');
  expect(tree).toHaveStyleRule('border', '1px solid transparent');
  expect(tree).toHaveStyleRule('border-radius', '0.25rem');
  expect(tree).toHaveStyleRule('font-weight', '700', {
    modifier: '& > a',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h1',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h2',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h3',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h4',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h5',
  });
  expect(tree).toHaveStyleRule('color', 'inherit', {
    modifier: '& > h6',
  });
});

test('Styles match primary', () => {
  const tree = renderer.create(<Alert primary />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles match secondary', () => {
  const tree = renderer.create(<Alert secondary />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles match success', () => {
  const tree = renderer.create(<Alert success />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles match danger', () => {
  const tree = renderer.create(<Alert danger />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles match warning', () => {
  const tree = renderer.create(<Alert warning />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles match info', () => {
  const tree = renderer.create(<Alert info />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles match light', () => {
  const tree = renderer.create(<Alert light />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles match dark', () => {
  const tree = renderer.create(<Alert dark />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Styles match noRadius', () => {
  const tree = renderer.create(<Alert noRadius />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '0');
});

test('Styles match pill', () => {
  const tree = renderer.create(<Alert pill />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('border-radius', '10rem');
});
