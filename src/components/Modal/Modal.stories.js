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
