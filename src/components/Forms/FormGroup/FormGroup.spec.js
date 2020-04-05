import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import FormGroup from './FormGroup';

describe('FormGroup Component', () => {
  it('matches normal FormGroup', () => {
    const { container } = render(<FormGroup />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '1rem');
    expect(container.firstChild).toHaveStyleRule('box-sizing', 'border-box');
  });

  it('matches FormGroup formInline', () => {
    const { container } = render(<FormGroup formInline />);
    expect(container.firstChild).toMatchSnapshot();
    // Todo figure out testing with media queries for styled-components
    // expect(container.firstChild).toHaveStyleRule('display', 'flex', {
    //   media: '(min-width: 576px)',
    // });
    // expect(container.firstChild).toHaveStyleRule('flex', '0 0 auto', {
    //   media: '(min-width: 576px)',
    // });
    // expect(container.firstChild).toHaveStyleRule('flex-flow', 'row wrap', {
    //   media: '(min-width: 576px)',
    // });
    // expect(container.firstChild).toHaveStyleRule('align-items', 'center', {
    //   media: '(min-width: 576px)',
    // });
    // expect(container.firstChild).toHaveStyleRule('margin-bottom', '0', {
    //   media: '(min-width: 576px)',
    // });
  });

  it('matches FormGroup justify', () => {
    const { container } = render(<FormGroup justify />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
  });

  it('matches FormGroup large', () => {
    const { container } = render(<FormGroup lg />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding-top', 'calc(0.5rem + 1px)', {
      modifier: '& > label',
    });
    expect(container.firstChild).toHaveStyleRule('padding-bottom', 'calc(0.5rem + 1px)', {
      modifier: '& > label',
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem', {
      modifier: '& > label',
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > label',
    });
    expect(container.firstChild).toHaveStyleRule('padding-top', 'calc(0.5rem + 1px)', {
      modifier: '& > div > label',
    });
    expect(container.firstChild).toHaveStyleRule('padding-bottom', 'calc(0.5rem + 1px)', {
      modifier: '& > div > label',
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem', {
      modifier: '& > div > label',
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > div > label',
    });
    expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem', {
      modifier: '& > div > input',
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem', {
      modifier: '& > div > input',
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > div > input',
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem', {
      modifier: '& > div > input',
    });
  });

  it('matches FormGroup small', () => {
    const { container } = render(<FormGroup sm />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding-top', 'calc(0.25rem + 1px)', {
      modifier: '& > label',
    });
    expect(container.firstChild).toHaveStyleRule('padding-bottom', 'calc(0.25rem + 1px)', {
      modifier: '& > label',
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem', {
      modifier: '& > label',
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > label',
    });
    expect(container.firstChild).toHaveStyleRule('padding-top', 'calc(0.25rem + 1px)', {
      modifier: '& > div > label',
    });
    expect(container.firstChild).toHaveStyleRule('padding-bottom', 'calc(0.25rem + 1px)', {
      modifier: '& > div > label',
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem', {
      modifier: '& > div > label',
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > div > label',
    });
    expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.2rem', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem', {
      modifier: '& > div > input',
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem', {
      modifier: '& > div > input',
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > div > input',
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.2rem', {
      modifier: '& > div > input',
    });
  });

  it('matches FormGroup noRadius', () => {
    const { container } = render(<FormGroup noRadius />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
      modifier: '& > div > input',
    });
    // expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
    //   modifier: '& > :not(input[type=file])',
    // });
    // expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
    //   modifier: '& > div > :not(input[type=file])',
    // });
  });

  it('matches FormGroup nomb', () => {
    const { container } = render(<FormGroup nomb />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0');
  });

  it('matches FormGroup nomb row', () => {
    const { container } = render(<FormGroup nomb row />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('margin-right', '-5px');
    expect(container.firstChild).toHaveStyleRule('margin-left', '-5px');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0', {
      modifier: '& > div > label',
    });
  });

  test('matches FormGroup row', () => {
    const { container } = render(<FormGroup row />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
