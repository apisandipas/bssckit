import React, { useState } from 'react';
import { Story } from '../../utils/functions';
import { useTooltip } from '../../utils/hooks';
import { Tooltip, TooltipArrow, TooltipInner } from './index';
import { Button } from '../Button';
import { Div } from '../Utilities/base';

export default {
  title: 'Tooltip',
};

export const minimalWorkingExample = Story(() => {
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
