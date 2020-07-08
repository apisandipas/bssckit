import React, { useState } from 'react';
import { Story } from '../../utils/functions';

import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from './index';
import { Button } from '../Button';

export default {
  title: 'Modal',
};

export const simple = Story(() => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <Modal hidden={hidden} toggle={() => setHidden(!hidden)}>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <Button outline onClick={() => setHidden(!hidden)}>
            <span aria-hidden='true'>&times;</span>
          </Button>
        </ModalHeader>
        <ModalBody>Modal body text goes here...</ModalBody>
        <ModalFooter>
          <Button onClick={() => setHidden(!hidden)}>Close</Button>
        </ModalFooter>
      </Modal>

      <Button danger block onClick={() => setHidden(!hidden)}>
        Launch Modal
      </Button>
    </div>
  );
});

export const centered = Story(() => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <Modal centered hidden={hidden} toggle={() => setHidden(!hidden)}>
        <ModalBody>Modal body text goes here</ModalBody>
      </Modal>
      <Button block danger onClick={() => setHidden(!hidden)}>
        Launch centered modal
      </Button>
    </div>
  );
});

export const longBody = Story(() => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <Modal hidden={hidden} toggle={() => setHidden(!hidden)}>
        <ModalBody style={{ height: '150vh' }}>Modal body text goes here</ModalBody>
      </Modal>
      <Button block danger onClick={() => setHidden(!hidden)}>
        Launch modal with long body
      </Button>
    </div>
  );
});

export const staticBackdrop = Story(() => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <Modal backdrop='static' hidden={hidden} toggle={() => setHidden(!hidden)}>
        <ModalBody>
          Modal body text goes here
          <Button block onClick={() => setHidden(!hidden)}>
            Close
          </Button>
        </ModalBody>
      </Modal>
      <Button block danger onClick={() => setHidden(!hidden)}>
        Launch modal with static backdrop
      </Button>
    </div>
  );
});

export const customization = Story(() => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <Modal
        hidden={hidden}
        toggle={() => setHidden(!hidden)}
        backdropProps={{ style: { backgroundColor: '#2ecc40' } }}
      >
        <ModalBody>Modal body text goes here</ModalBody>
      </Modal>
      <Button block danger onClick={() => setHidden(!hidden)}>
        Launch modal with green backdrop
      </Button>
    </div>
  );
});
