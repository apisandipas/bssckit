import { useState } from 'react';
import { usePopper } from 'react-popper';
import merge from 'deepmerge';

export function useTooltip(options = {}) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  const finalOptions = merge(options, {
    placement: 'auto',
  });

  if (!finalOptions.modifiers) {
    finalOptions.modifiers = [];
  }

  finalOptions.modifiers.push({
    name: 'arrow',
    options: {
      element: arrowElement,
    },
  });

  const { styles, attributes } = usePopper(referenceElement, popperElement, finalOptions);

  return {
    setReferenceElement,
    setPopperElement,
    setArrowElement,
    styles,
    attributes,
    placement: attributes && attributes.popper && attributes.popper['data-popper-placement'],
  };
}
