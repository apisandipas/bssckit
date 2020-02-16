import React from 'react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import BaseCss from '../src/utils/BaseCss';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
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
