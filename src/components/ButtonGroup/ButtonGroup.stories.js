import React from 'react';
import { Button } from '../Button';
import ButtonGroup from './ButtonGroup';

export default {
  title: 'Button Group',
};

export const simple = () => (
  <>
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </>
);

export const contextual = () => (
  <>
    <Button primary>Click Me</Button>
    <br />
    <Button secondary>Click Me</Button>
    <br />
    <Button success>Click Me</Button>
    <br />
    <Button danger>Click Me</Button>
    <br />
    <Button warning>Click Me</Button>
    <br />
    <Button info>Click Me</Button>
    <br />
    <Button light>Click Me</Button>
    <br />
    <Button dark>Click Me</Button>
    <br />
  </>
);

export const active = () => (
  <>
    <Button secondary active>
      Click Me
    </Button>
    <Button success active>
      Click Me
    </Button>
  </>
);

export const disabled = () => (
  <>
    <Button primary disabled>
      Click Me
    </Button>
    <Button secondary disabled>
      Click Me
    </Button>
    <Button success disabled>
      Click Me
    </Button>
  </>
);

export const outlined = () => (
  <>
    <Button primary outline>
      Click Me
    </Button>
    <br />
    <Button secondary outline>
      Click Me
    </Button>
    <br />
    <Button success outline>
      Click Me
    </Button>
    <br />
    <Button danger outline>
      Click Me
    </Button>
    <br />
    <Button warning outline>
      Click Me
    </Button>
    <br />
    <Button info outline>
      Click Me
    </Button>
    <br />
    <Button light outline>
      Click Me
    </Button>
    <br />
    <Button dark outline>
      Click Me
    </Button>
    <br />
  </>
);

export const altStyles = () => (
  <>
    <Button secondary pill>
      Click Me
    </Button>
    <Button success noRadius>
      Click Me
    </Button>
    <Button success outline>
      Click Me
    </Button>
    <Button primary pill outline>
      primary pill outline
    </Button>
  </>
);
