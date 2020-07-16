import React, { useState } from 'react';
import { Story } from '../../utils/functions';
import { useTooltip } from '../../utils/hooks';
import { Tooltip, TooltipArrow, TooltipInner } from './index';
import { Button } from '../Button';
import { Div } from '../Utilities/base';

import usePopper from 'react-overlays/usePopper';

export default {
  title: 'Tooltip',
};

export const MVPReactOverlays = () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [hidden, setIsHidden] = useState(true);
  const { styles, placement, attributes } = usePopper(referenceElement, popperElement);
  return (
    <Div style={{ minWidth: '100vw', paddingTop: '10rem' }} dFlex justifyContentCenter alignItemsCenter>
      <Button danger type='button' ref={setReferenceElement} onClick={() => setIsHidden(!hidden)}>
        Click for Tooltip
      </Button>

      <Tooltip
        hidden={hidden}
        ref={setPopperElement}
        style={styles.popper}
        placement={placement}
        {...attributes.popper}
      >
        <TooltipInner>Howdy from the tooltip</TooltipInner>
        <TooltipArrow placement={placement} style={styles.arrow} />
      </Tooltip>
    </Div>
  );
};

export const MVPPopper = Story(() => {
  const {
    setReferenceElement,
    setPopperElement,
    setArrowElement,
    styles,
    attributes,
    placement,
  } = useTooltip();
  const [hidden, setIsHidden] = useState(true);

  return (
    <Div style={{ minWidth: '100vw', paddingTop: '10rem' }} dFlex justifyContentCenter alignItemsCenter>
      <Button danger type='button' ref={setReferenceElement} onClick={() => setIsHidden(!hidden)}>
        Click for Tooltip
      </Button>

      <Tooltip
        hidden={hidden}
        ref={setPopperElement}
        style={styles.popper}
        placement={placement}
        {...attributes.popper}
      >
        <TooltipInner>Howdy from the tooltip</TooltipInner>
        <TooltipArrow placement={placement} style={styles.arrow} ref={setArrowElement} />
      </Tooltip>
    </Div>
  );
});
