import React from 'react';
import { Button } from '../Button';
import { FormControl, FormCheckInput } from '../Forms';
import { InputGroup, InputGroupAppend, InputGroupPrepend, InputGroupText } from '.';

export default {
  title: 'Forms / InputGroup',
};

export const prepend = () => (
  <InputGroup>
    <InputGroupPrepend>
      <InputGroupText>@</InputGroupText>
    </InputGroupPrepend>
    <FormControl type='text' placeholder='Username' />
  </InputGroup>
);

export const apppend = () => (
  <InputGroup>
    <FormControl type='text' placeholder="Recipient's username" />
    <InputGroupAppend>
      <InputGroupText>@example.com</InputGroupText>
    </InputGroupAppend>
  </InputGroup>
);

export const check = () => (
  <InputGroup>
    <InputGroupPrepend>
      <InputGroupText>
        <FormCheckInput type='checkbox' />
      </InputGroupText>
    </InputGroupPrepend>
    <FormControl type='text' placeholder='Selectable input' />
  </InputGroup>
);

export const prependAndAppend = () => (
  <InputGroup>
    <InputGroupPrepend>
      <InputGroupText>$</InputGroupText>
    </InputGroupPrepend>
    <FormControl type='text' />
    <InputGroupAppend>
      <InputGroupText>.00</InputGroupText>
    </InputGroupAppend>
  </InputGroup>
);

export const sizes = () => (
  <>
    <InputGroup sm mb2>
      <InputGroupPrepend>
        <InputGroupText>Small</InputGroupText>
      </InputGroupPrepend>
      <FormControl type='text' />
    </InputGroup>
    <InputGroup mb2>
      <InputGroupPrepend>
        <InputGroupText>Normal</InputGroupText>
      </InputGroupPrepend>
      <FormControl type='text' />
    </InputGroup>
    <InputGroup lg>
      <InputGroupPrepend>
        <InputGroupText>Large</InputGroupText>
      </InputGroupPrepend>
      <FormControl type='text' />
    </InputGroup>
  </>
);

export const multipleInputs = () => (
  <InputGroup>
    <InputGroupPrepend>
      <InputGroupText>First and last name</InputGroupText>
    </InputGroupPrepend>
    <FormControl type='text' />
    <FormControl type='text' />
  </InputGroup>
);

export const multipleAddons = () => (
  <InputGroup>
    <InputGroupPrepend>
      <InputGroupText>$</InputGroupText>
      <InputGroupText>#</InputGroupText>
      <InputGroupText>%</InputGroupText>
    </InputGroupPrepend>
    <FormControl type='text' />
  </InputGroup>
);

export const buttons = () => (
  <InputGroup>
    <InputGroupPrepend>
      <Button outline>Button 1</Button>
      <Button outline>Button 2</Button>
    </InputGroupPrepend>
    <FormControl type='text' />
    <InputGroupAppend>
      <Button outline>Button 3</Button>
    </InputGroupAppend>
  </InputGroup>
);
