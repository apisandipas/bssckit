import React from 'react';
import { addDecorator } from '@storybook/react';
import BaseCss from '../src/utils/BaseCss';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 1rem;
`;

addDecorator(storyFn => (
  <PreviewContainer>
    <BaseCss />
    {storyFn()}
  </PreviewContainer>
));
