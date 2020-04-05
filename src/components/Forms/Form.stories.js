import React from 'react';
import { Button } from '../Button';
import { FormControl } from './FormControl';
import { FormGroup } from './FormGroup';
import { FormInline } from './FormInline';
import { FormCheck } from './FormCheck';
import { FormCheckInput } from './FormCheckInput';

export default {
  title: 'Forms',
};

export const textInput = () => (
  <FormGroup>
    <FormControl placeholder='Normal input...' mb2 />
    <FormControl placeholder='Valid input...' valid mb2 />
    <FormControl placeholder='Invalid input...' invalid mb2 />
    <FormControl placeholder='Small input...' mb2 sm />
    <FormControl placeholder='Large input...' mb2 lg />
  </FormGroup>
);

export const inputTypes = () => (
  <form>
    <FormGroup>
      <label>
        Email address <FormControl type='email' placeholder='name@example.com' />
      </label>
    </FormGroup>
    <FormGroup>
      <label>
        Example select
        <FormControl select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </FormControl>
      </label>
    </FormGroup>
    <FormGroup>
      <label>
        Example multiple select
        <FormControl select multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </FormControl>
      </label>
    </FormGroup>
    <FormGroup>
      <label>
        Example textarea
        <FormControl textarea rows='3' />
      </label>
    </FormGroup>
    <FormGroup>
      <label>
        Example file input
        <FormControl plainText placeholder='Plaintext' />
      </label>
    </FormGroup>
    <FormGroup>
      <label>
        Example file input
        <FormControl file />
      </label>
    </FormGroup>
  </form>
);

export const inlineForm = () => (
  <FormInline>
    <FormGroup>
      <FormControl plainText readonly disabled value='email@example.com' />
    </FormGroup>
    <FormGroup mr4>
      <FormControl type='password' placeholder='Password' />
    </FormGroup>
    <FormGroup>
      <Button primary>Confirm identity</Button>
    </FormGroup>
  </FormInline>
);

export const checkboxesAndRadio = () => (
  <form>
    <FormCheck>
      <label>
        <FormCheckInput type='checkbox' /> Default checkbox
      </label>
    </FormCheck>
    <FormCheck>
      <label>
        <FormCheckInput disabled type='checkbox' /> Disabled checkbox
      </label>
    </FormCheck>
    <FormCheck>
      <label>
        <FormCheckInput type='radio' name='exampleRadios' /> Default radio
      </label>
    </FormCheck>
    <FormCheck>
      <label>
        <FormCheckInput type='radio' name='exampleRadios' /> Default radio
      </label>
    </FormCheck>
    <FormCheck>
      <label>
        <FormCheckInput disabled type='radio' name='exampleRadios' /> Disabled radio
      </label>
    </FormCheck>
  </form>
);
