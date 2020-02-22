import React from 'react';
import { Badge } from './index';
import { Button } from '../Button';

export default {
  title: 'Badge',
};

export const inHeadings = () => (
  <>
    <h1>
      Example heading <Badge primary>New</Badge>
    </h1>
    <h2>
      Example heading <Badge primary>New</Badge>
    </h2>
    <h3>
      Example heading <Badge primary>New</Badge>
    </h3>
    <h4>
      Example heading <Badge primary>New</Badge>
    </h4>
    <h5>
      Example heading <Badge primary>New</Badge>
    </h5>
    <h6>
      Example heading <Badge primary>New</Badge>
    </h6>
  </>
);

export const contextual = () => (
  <>
    <Badge primary>Primary</Badge>
    <br />
    <Badge secondary>Secondary</Badge>
    <br />
    <Badge success>Success</Badge>
    <br />
    <Badge danger>Danger</Badge>
    <br />
    <Badge warning>Warning</Badge>
    <br />
    <Badge info>Info</Badge>
    <br />
    <Badge light>Light</Badge>
    <br />
    <Badge dark>Dark</Badge>
  </>
);

export const pills = () => (
  <>
    <Badge pill primary>
      Primary
    </Badge>
    <br />
    <Badge pill secondary>
      Secondary
    </Badge>
    <br />
    <Badge pill success>
      Success
    </Badge>
    <br />
    <Badge pill danger>
      Danger
    </Badge>
    <br />
    <Badge pill warning>
      Warning
    </Badge>
    <br />
    <Badge pill info>
      Info
    </Badge>
    <br />
    <Badge pill light>
      Light
    </Badge>
    <br />
    <Badge pill dark>
      Dark
    </Badge>
  </>
);

export const inButtons = () => (
  <>
    <Button block primary>
      Notifications <Badge light>4</Badge>
    </Button>
    <Button block dark>
      Notifications <Badge light>4</Badge>
    </Button>
    <Button block light>
      Notifications <Badge dark>4</Badge>
    </Button>
  </>
);
