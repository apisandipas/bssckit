import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import CardText from './CardText';

describe('CardText Component', () => {
  it('matches CardText', async () => {
    const { container } = render(<CardText />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('margin-top', '0');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '1rem');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0', {
      modifier: '&:last-child',
    });
  });
});
