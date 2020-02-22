import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { Button, LinkButton } from './index';

describe('Button Component', () => {
  test('Styles match Button', () => {
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

  test('Styles match Button dropdownToggle', () => {
    const { container } = render(<Button dropdownToggle />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'inline-block', {
      modifier: '&::after',
    });
    expect(container.firstChild).toHaveStyleRule('width', '0', {
      modifier: '&::after',
    });
    expect(container.firstChild).toHaveStyleRule('height', '0', {
      modifier: '&::after',
    });
    expect(container.firstChild).toHaveStyleRule('margin-left', '0.255em', {
      modifier: '&::after',
    });
    expect(container.firstChild).toHaveStyleRule('vertical-align', '0.255em', {
      modifier: '&::after',
    });
    expect(container.firstChild).toHaveStyleRule('content', "''", {
      modifier: '&::after',
    });
    expect(container.firstChild).toHaveStyleRule('border-top', '0.3em solid', {
      modifier: '&::after',
    });
    expect(container.firstChild).toHaveStyleRule('border-right', '0.3em solid transparent', {
      modifier: '&::after',
    });
    expect(container.firstChild).toHaveStyleRule('border-bottom', '0', {
      modifier: '&::after',
    });
    expect(container.firstChild).toHaveStyleRule('border-left', '0.3em solid transparent', {
      modifier: '&::after',
    });
    expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
      modifier: '&:empty::after',
    });
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

  test('Styles match Button danger', () => {
    const { container } = render(<Button danger />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button danger disabled', () => {
    const { container } = render(<Button danger disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button danger active', () => {
    const { container } = render(<Button danger active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button danger outline disabled', () => {
    const { container } = render(<Button danger outline disabled />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#dc3545');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #dc3545');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('color', '#dc3545', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #dc3545', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(220,53,69,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button danger outline', () => {
    const { container } = render(<Button danger outline />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#dc3545');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #dc3545');
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#dc3545', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #dc3545', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(220,53,69,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button dark disabled', () => {
    const { container } = render(<Button dark disabled />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#343a40');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40');
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#343a40', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(52,58,64,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button dark', () => {
    const { container } = render(<Button dark />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button dark active', () => {
    const container = render(<Button dark active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button dark outline disabled', () => {
    const { container } = render(<Button dark outline disabled />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#343a40');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40');
    expect(container.firstChild).toHaveStyleRule('color', '#343a40', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(52,58,64,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button dark outline', () => {
    const { container } = render(<Button dark outline />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#343a40');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40');
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#343a40', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #343a40', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(52,58,64,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button disabled', () => {
    const { container } = render(<Button disabled />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('opacity', '0.65');
  });

  test('Styles match Button info active', () => {
    const { container } = render(<Button info active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button info outline', () => {
    const { container } = render(<Button info outline />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#17a2b8');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #17a2b8');
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#17a2b8', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #17a2b8', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(23,162,184,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button info outline disabled', () => {
    const { container } = render(<Button info outline disabled />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#17a2b8');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #17a2b8');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('color', '#17a2b8', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #17a2b8', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(23,162,184,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button large', () => {
    const { container } = render(<Button lg />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem');
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem');
  });

  test('Styles match Button light', () => {
    const { container } = render(<Button light />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button light disabled', () => {
    const { container } = render(<Button light disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button light active', () => {
    const { container } = render(<Button light active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button light outline', () => {
    const { container } = render(<Button light outline />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button light outline disabled', () => {
    const { container } = render(<Button light outline disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button noRadius', () => {
    const { container } = render(<Button noRadius />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });

  test('Styles match Button pill', () => {
    const { container } = render(<Button pill />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '10rem');
  });

  test('Styles match Button primary', () => {
    const { container } = render(<Button primary />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button primary disabled', () => {
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

  test('Styles match Button primary active', () => {
    const { container } = render(<Button primary active />);
    expect(container.firstChild).toMatchSnapshot();
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

  test('Styles match Button secondary', () => {
    const { container } = render(<Button secondary />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button secondary disabled', () => {
    const { container } = render(<Button secondary disabled />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#6c757d');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d');
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#6c757d', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button secondary active', () => {
    const { container } = render(<Button secondary active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button secondary outline', () => {
    const { container } = render(<Button secondary outline />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#6c757d');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d');
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#6c757d', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button secondary outline disabled', () => {
    const { container } = render(<Button secondary outline disabled />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#6c757d');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('color', '#6c757d', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #6c757d', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(108,117,125,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button small', () => {
    const { container } = render(<Button sm />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem');
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem');
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.2rem');
  });

  test('Styles matches Button split', () => {
    const { container } = render(<Button split />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0');
    expect(container.firstChild).toHaveStyleRule('padding-right', '0.5625rem');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0.5625rem');
    expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
      modifier: '&::after',
    });
  });

  test('Styles matches Button split lg', () => {
    const { container } = render(<Button split lg />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0');
    expect(container.firstChild).toHaveStyleRule('padding-right', '0.75rem');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0.75rem');
    expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
      modifier: '&::after',
    });
  });

  test('Styles matches Button split sm', () => {
    const { container } = render(<Button split sm />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0');
    expect(container.firstChild).toHaveStyleRule('padding-right', '0.375rem');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0.375rem');
    expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
      modifier: '&::after',
    });
  });

  test('Styles match Button success', () => {
    const { container } = render(<Button success />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button success disabled', () => {
    const { container } = render(<Button success disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button success active', () => {
    const { container } = render(<Button success active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button success outline', () => {
    const { container } = render(<Button success outline />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#28a745');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #28a745');
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#28a745', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #28a745', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(40,167,69,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button success outline disabled', () => {
    const { container } = render(<Button success outline disabled />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#28a745');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #28a745');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('color', '#28a745', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #28a745', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(40,167,69,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button warning', () => {
    const { container } = render(<Button warning />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button warning disabled', () => {
    const { container } = render(<Button warning disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button warning active', () => {
    const { container } = render(<Button warning active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Styles match Button warning outline', () => {
    const { container } = render(<Button warning outline />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#ffc107');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #ffc107');
    expect(container.firstChild).toHaveStyleRule('color', '#212529', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#ffc107', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #ffc107', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(255,193,7,0.5)', {
      modifier: '&:focus',
    });
  });

  test('Styles match Button warning outline disabled', () => {
    const { container } = render(<Button warning outline disabled />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#ffc107');
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #ffc107');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
    expect(container.firstChild).toHaveStyleRule('background-image', 'none', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('color', '#ffc107', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('border', '1px solid #ffc107', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 0.2rem rgba(255,193,7,0.5)', {
      modifier: '&:focus',
    });
  });
});
