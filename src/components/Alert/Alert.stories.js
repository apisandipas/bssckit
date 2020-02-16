import React, { useState } from 'react';
import Alert, { AlertDismissIcon } from './index';
import DismissableAlert from './DismissableAlert';
import { Story } from '../../utils/functions';

export default {
  title: 'Alert',
};

export const simple = () => <Alert primary>Hello World</Alert>;

export const noRadius = () => (
  <Alert secondary noRadius>
    Hello World
  </Alert>
);

export const pill = () => (
  <Alert info pill>
    Hello World
  </Alert>
);

export const contextual = () => (
  <>
    <Alert primary>Primary alert</Alert>
    <Alert secondary>Secondary alert</Alert>
    <Alert success>Success alert</Alert>
    <Alert danger>Danger alert</Alert>
    <Alert warning>Warning alert</Alert>
    <Alert info>Info alert</Alert>
    <Alert light>Light alert</Alert>
    <Alert dark>Dark alert</Alert>
  </>
);

export const withALink = () => (
  <>
    <Alert primary>
      This is a primary alert with <a href='#'>an example link</a>. Give it a click if you like.
    </Alert>
    <Alert danger>
      This is a primary alert with <a href='#'>an example link</a>. Give it a click if you like.
    </Alert>
  </>
);

export const staticDismissible = () => (
  <>
    <Alert primary dismissible>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempore ea distinctio iure quas
      quibusdam dolorem inventore dolorum explicabo a aspernatur quisquam tempora, sapiente sed
      repudiandae, iusto architecto ipsum blanditiis.
      <AlertDismissIcon>&times;</AlertDismissIcon>
    </Alert>
  </>
);

export const dismissible = Story(() => {
  const [hidden, setHidden] = useState(false);
  return (
    <DismissableAlert danger toggle={() => setHidden(!hidden)} isOpen={!hidden}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempore ea distinctio iure quas
      quibusdam dolorem inventore dolorum explicabo a aspernatur quisquam tempora, sapiente sed
      repudiandae, iusto architecto ipsum blanditiis.
    </DismissableAlert>
  );
});
