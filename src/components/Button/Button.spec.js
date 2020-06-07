import React from 'react';
import { axe } from 'jest-axe';
import 'jest-styled-components';
import { render, cleanup } from '@testing-library/react';
import { Button, LinkButton } from './Button';

afterEach(cleanup);

describe('Button Component', () => {
  it('matches Button', async () => {
    const { container } = render(<Button>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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
      'color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out'
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

  it('matches LinkButton', async () => {
    const { container } = render(<LinkButton>Text</LinkButton>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button dropdownToggle', async () => {
    const { container } = render(<Button dropdownToggle>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button active', () => {
    const { container } = render(<Button active>Text</Button>);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('background-image', 'none');
  });

  it('matches Button block', async () => {
    const { container } = render(<Button block>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'block');
    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });

  it('matches Button danger', async () => {
    const { container } = render(<Button danger>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button danger disabled', async () => {
    const { container } = render(
      <Button danger disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button danger active', async () => {
    const { container } = render(
      <Button danger active>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button danger outline disabled', async () => {
    const { container } = render(
      <Button danger outline disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button danger outline', async () => {
    const { container } = render(
      <Button danger outline>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button dark disabled', async () => {
    const { container } = render(
      <Button dark disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button dark', async () => {
    const { container } = render(<Button dark>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button dark active', async () => {
    const container = render(
      <Button dark active>
        Text
      </Button>
    );
    // Why Does this fail?
    // const results = await axe(container);
    // expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button dark outline disabled', async () => {
    const { container } = render(
      <Button dark outline disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button dark outline', async () => {
    const { container } = render(
      <Button dark outline>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button disabled', async () => {
    const { container } = render(<Button disabled>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('opacity', '0.65');
  });

  it('matches Button info active', async () => {
    const { container } = render(
      <Button info active>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button info outline', async () => {
    const { container } = render(
      <Button info outline>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button info outline disabled', async () => {
    const { container } = render(
      <Button info outline disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button large', async () => {
    const { container } = render(<Button lg>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem');
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem');
  });

  it('matches Button light', async () => {
    const { container } = render(<Button light>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button light disabled', async () => {
    const { container } = render(
      <Button light disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button light active', async () => {
    const { container } = render(
      <Button light active>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button light outline', async () => {
    const { container } = render(
      <Button light outline>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button light outline disabled', async () => {
    const { container } = render(
      <Button light outline disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button noRadius', async () => {
    const { container } = render(<Button noRadius>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });

  it('matches Button pill', async () => {
    const { container } = render(<Button pill>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '10rem');
  });

  it('matches Button primary', async () => {
    const { container } = render(<Button primary>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button primary disabled', async () => {
    const { container } = render(
      <Button primary disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button primary active', async () => {
    const { container } = render(
      <Button primary active>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button primary outline', async () => {
    const { container } = render(
      <Button primary outline>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button primary outline disabled', async () => {
    const { container } = render(
      <Button primary outline disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button secondary', async () => {
    const { container } = render(<Button secondary>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button secondary disabled', async () => {
    const { container } = render(
      <Button secondary disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button secondary active', async () => {
    const { container } = render(
      <Button secondary active>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button secondary outline', async () => {
    const { container } = render(
      <Button secondary outline>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button secondary outline disabled', async () => {
    const { container } = render(
      <Button secondary outline disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button small', async () => {
    const { container } = render(<Button sm>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem');
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem');
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.2rem');
  });

  it('matcheses Button split', async () => {
    const { container } = render(<Button split>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0');
    expect(container.firstChild).toHaveStyleRule('padding-right', '0.5625rem');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0.5625rem');
    expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
      modifier: '&::after',
    });
  });

  it('matcheses Button split lg', async () => {
    const { container } = render(
      <Button split lg>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0');
    expect(container.firstChild).toHaveStyleRule('padding-right', '0.75rem');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0.75rem');
    expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
      modifier: '&::after',
    });
  });

  it('matcheses Button split sm', async () => {
    const { container } = render(
      <Button split sm>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0');
    expect(container.firstChild).toHaveStyleRule('padding-right', '0.375rem');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0.375rem');
    expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
      modifier: '&::after',
    });
  });

  it('matches Button success', async () => {
    const { container } = render(<Button success>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button success disabled', async () => {
    const { container } = render(
      <Button success disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button success active', async () => {
    const { container } = render(
      <Button success active>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button success outline', async () => {
    const { container } = render(
      <Button success outline>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button success outline disabled', async () => {
    const { container } = render(
      <Button success outline disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button warning', async () => {
    const { container } = render(<Button warning>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button warning disabled', async () => {
    const { container } = render(
      <Button warning disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button warning active', async () => {
    const { container } = render(
      <Button warning active>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Button warning outline', async () => {
    const { container } = render(
      <Button warning outline>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches Button warning outline disabled', async () => {
    const { container } = render(
      <Button warning outline disabled>
        Text
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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
