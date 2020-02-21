import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { Button, LinkButton } from './index';

test('Styles matches Button', () => {
  const { container } = render(<Button />);

  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule('display', 'inline-block');
  expect(container.firstChild).toHaveStyleRule('font-weight', '400');
  expect(container.firstChild).toHaveStyleRule('text-align', 'center');
  expect(container.firstChild).toHaveStyleRule('white-space', 'nowrap');
  expect(container.firstChild).toHaveStyleRule('vertical-align', 'middle');
  expect(container.firstChild).toHaveStyleRule('user-select', 'none');
  expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d');
  expect(container.firstChild).toHaveStyleRule('padding', '0.375rem 0.75rem');
  expect(container.firstChild).toHaveStyleRule('font-size', '1rem');
  expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
  expect(container.firstChild).toHaveStyleRule('border-radius', '0.25rem');
  expect(container.firstChild).toHaveStyleRule(
    'transition',
    'color 0.15s ease-in-out,background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out'
  );
  expect(container.firstChild).toHaveStyleRule('text-decoration', 'none', {
    modifier: '&:hover',
  });
  expect(container.firstChild).toHaveStyleRule('text-decoration', 'none', {
    modifier: '&:focus',
  });
  expect(container.firstChild).toHaveStyleRule('outline', '0', {
    modifier: '&:focus',
  });
  expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles match LinkButton', () => {
  const { container } = render(<LinkButton />);
  expect(container.firstChild).toMatchSnapshot();
});

test('Styles match Button active', () => {
  const { container } = render(<Button active />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule('background-image', 'none');
});

test('Styles match Button block', () => {
  const { container } = render(<Button block />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule('display', 'block');
  expect(container.firstChild).toHaveStyleRule('width', '100%');
});

test('Styles match Button disabled', () => {
  const { container } = render(<Button disabled />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule('opacity', '0.65');
});

test('Styles matches Button primary disabled', () => {
  const { container } = render(<Button primary disabled />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule('color', '#fff');
  expect(container.firstChild).toHaveStyleRule('background-color', '#007bff');
  expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff');
  expect(container.firstChild).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(container.firstChild).toHaveStyleRule('background-color', '#007bff', {
    modifier: '&:hover',
  });
  expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff', {
    modifier: '&:hover',
  });
  expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles match Button primary', () => {
  const { container } = render(<Button primary />);
  expect(container.firstChild).toMatchSnapshot();
});

test('Styles match Button primary active', () => {
  const { container } = render(<Button primary active />);
  expect(container.firstChild).toMatchSnapshot();
});

test('Styles match Button primary outline disabled', () => {
  const { container } = render(<Button primary outline disabled />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule('color', '#007bff');
  expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
  expect(container.firstChild).toHaveStyleRule('background-image', 'none');
  expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff');
  expect(container.firstChild).toHaveStyleRule('color', '#007bff', {
    modifier: '&:hover',
  });
  expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
    modifier: '&:hover',
  });
  expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
    modifier: '&:hover',
  });
  expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff', {
    modifier: '&:hover',
  });
  expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
    modifier: '&:focus',
  });
});

test('Styles match Button primary outline', () => {
  const { container } = render(<Button primary outline />);
  expect(container.firstChild).toMatchSnapshot();
  expect(container.firstChild).toHaveStyleRule('color', '#007bff');
  expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
  expect(container.firstChild).toHaveStyleRule('background-image', 'none');
  expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff');
  expect(container.firstChild).toHaveStyleRule('color', '#fff', {
    modifier: '&:hover',
  });
  expect(container.firstChild).toHaveStyleRule('background-color', '#007bff', {
    modifier: '&:hover',
  });
  expect(container.firstChild).toHaveStyleRule('border', '1px solid #007bff', {
    modifier: '&:hover',
  });
  expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(0,123,255,0.5)', {
    modifier: '&:focus',
  });
});
