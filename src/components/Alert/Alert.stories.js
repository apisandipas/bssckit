import React, { useState } from 'react';
import { Alert, AlertDismissIcon, DismissableAlert } from './';
import { Story } from '../../utils/functions';
import BSThemeProvider from '../Utilities/BSThemeProvider';

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
    <Alert primary mb4>
      Primary alert
    </Alert>
    <Alert secondary mb4>
      Secondary alert
    </Alert>
    <Alert success mb4>
      Success alert
    </Alert>
    <Alert danger mb4>
      Danger alert
    </Alert>
    <Alert warning mb4>
      Warning alert
    </Alert>
    <Alert info mb4>
      Info alert
    </Alert>
    <Alert light mb4>
      Light alert
    </Alert>
    <Alert dark>Dark alert</Alert>
  </>
);

export const withALink = () => (
  <>
    <Alert primary mb4>
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempore ea distinctio iure quas quibusdam
      dolorem inventore dolorum explicabo a aspernatur quisquam tempora, sapiente sed repudiandae, iusto
      architecto ipsum blanditiis.
      <AlertDismissIcon>&times;</AlertDismissIcon>
    </Alert>
  </>
);

export const dismissible = Story(() => {
  const [hidden, setHidden] = useState(false);
  return (
    <DismissableAlert danger toggle={() => setHidden(!hidden)} isOpen={!hidden}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempore ea distinctio iure quas quibusdam
      dolorem inventore dolorum explicabo a aspernatur quisquam tempora, sapiente sed repudiandae, iusto
      architecto ipsum blanditiis.
    </DismissableAlert>
  );
});

const theme = {
  alert: {
    colors: {
      default: {
        text: 'white',
        background: 'cornflowerblue',
      },
    },
  },
};

export const withTheme = () => (
  <BSThemeProvider theme={theme}>
    <Alert>Always blue! Always blue!</Alert>
  </BSThemeProvider>
);

const theme2 = {
  palette: {
    primaryLight: '#bada55',
    dangerLight: '#db84be',
  },
};

export const withPaletteOverride = () => (
  <BSThemeProvider theme={theme2}>
    <Alert primary mb4>
      Testing 123!
    </Alert>
    <Alert danger>Testing 123!</Alert>
  </BSThemeProvider>
);
