import React from 'react';
import styled from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import BaseCss from '../src/components/Utilities/BaseCss';

const PreviewContainer = styled.div`
  padding: 1rem;
`;

// Wrap with a container and our base styles/reset
addDecorator(storyFn => (
  <PreviewContainer>
    <BaseCss />
    {storyFn()}
  </PreviewContainer>
));

// Add a11y support
addDecorator(withA11y);
