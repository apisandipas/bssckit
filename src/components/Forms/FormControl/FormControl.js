import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import { up } from 'styled-breakpoints';
import defaultTheme from '../../../theme';
import { Input, Textarea, Select } from '../../Utilities/base';
import FormControlPlainText from './FormControlPlainText';

const getBackgroundColor = props => {
  if (props.disabled || props.readonly) {
    return css`
      background-color: ${theme('formControl.colors.default.backgroundColorDisabledReadonly')};
      &:focus {
        background-color: ${theme('formControl.colors.default.backgroundColorDisabledReadonly')};
      }
    `;
  }

  return css`
    background-color: ${theme('formControl.colors.default.background')};
    &:focus {
      background-color: ${theme('formControl.colors.default.background')};
    }
  `;
};

const getBorder = props => {
  if (props.valid) {
    return css`
      border-color: ${theme('formControl.colors.default.borderValid')};
      &:focus {
        border-color: ${theme('formControl.colors.default.borderValid')};
      }
    `;
  } else if (props.invalid) {
    return css`
      border-color: ${theme('formControl.colors.default.borderInvalid')};
      &:focus {
        border-color: ${theme('formControl.colors.default.borderInvalid')};
      }
    `;
  }

  return css`
    border: ${theme('formControl.border.default')} ${theme('formControl.colors.default.border')};
    &:focus {
      border-color: ${theme('formControl.colors.default.border')};
    }
  `;
};

const getBoxShadow = props => {
  if (props.valid) {
    return css`
      &:focus {
        box-shadow: ${theme('formControl.boxShadow.default')}
          ${theme('formControl.colors.default.formControlBoxShadowValid')};
      }
    `;
  } else if (props.invalid) {
    return css`
      &:focus {
        box-shadow: ${theme('formControl.boxShadow.default')}
          ${theme('formControl.colors.default.formControlBoxShadowInvalid')};
      }
    `;
  }

  return css`
    &:focus {
      box-shadow: 0 0 0 0.2rem ${theme('formControl.colors.default.boxShadowFocus')};
    }
  `;
};

const getOpacity = props => {
  if (props.disabled || props.readonly) {
    return css`
      opacity: 1;
      &:focus {
        opacity: 1;
      }
    `;
  }

  return '';
};

const formControlFormInline = props =>
  props.formInline &&
  css`
    ${up('sm')} {
      display: inline-block;
      width: auto;
      vertical-align: middle;
    }
  `;

const getPadding = props => {
  if (props.lg) {
    return css`
      padding: ${theme('formControl.padding.lgPadding')};
    `;
  } else if (props.sm) {
    return css`
      padding: ${theme('formControl.padding.smPadding')};
    `;
  }

  return css`
    padding: ${theme('formControl.padding.defaultPadding')};
  `;
};

const getFontSize = props => {
  if (props.lg) {
    return css`
      font-size: ${theme('formControl.fontSize.lg')};
    `;
  } else if (props.sm) {
    return css`
      font-size: ${theme('formControl.fontSize.sm')};
    `;
  }

  return css`
    font-size: ${theme('formControl.fontSize.default')};
  `;
};

const getBorderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${theme('formControl.borderRadius.noRadius')};
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${theme('formControl.borderRadius.pill')};
    `;
  } else if (props.lg) {
    return css`
      border-radius: ${theme('formControl.borderRadius.lg')};
    `;
  } else if (props.sm) {
    return css`
      border-radius: ${theme('formControl.borderRadius.sm')};
    `;
  }

  return css`
    border-radius: ${theme('formControl.borderRadius.default')};
  `;
};

const getHeight = props => {
  if (props.lg && !props.multiple && props.select) {
    return css`
      height: ${theme('formControl.height.selectLg')};
    `;
  } else if (props.sm && !props.multiple && props.select) {
    return css`
      height: ${theme('formControl.height.selectSm')};
    `;
  } else if (!props.multiple && props.select) {
    return css`
      height: ${theme('formControl.height.select')};
    `;
  }

  return '';
};

const formControlStyle = css`
    display: block;
    width: 100%;
    line-height: 1.5;
    color: ${theme('formControl.colors.default.color')};
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;

    &::-ms-expand {
      background-color: transparent;
      border: 0;
    };

    &:focus {
      color: ${theme('formControl.colors.default.color')};
      outline: 0;

    };

    &::placeholder {
      color: ${theme('formControl.colors.default.placeholder')};
      opacity: 1;
    };

    ${props => getBackgroundColor(props)}
    ${props => getBorder(props)}
    ${props => getBoxShadow(props)}
    ${props => getOpacity(props)}
    ${props => formControlFormInline(props)}
    ${props => getPadding(props)}
    ${props => getFontSize(props)}
    ${props => getBorderRadius(props)}
    ${props => getHeight(props)}
  `;

const FormControlInput = styled(Input)`
  ${formControlStyle};
`;

const FormControlTextarea = styled(Textarea)`
  ${formControlStyle};
`;

const FormControlSelect = styled(Select)`
  ${formControlStyle};
  &:focus::-ms-value {
    color: ${theme('formControl.colors.default.color')};
    background-color: ${theme('formControl.colors.default.background')};
  }
`;

const FormControlFile = styled(Input).attrs({
  type: 'file',
})`
  display: block;
  width: 100%;
  box-sizing: border-box;
`;

const FormControl = props => {
  if (props.textarea) {
    return <FormControlTextarea {...props} />;
  } else if (props.select) {
    return <FormControlSelect {...props} />;
  } else if (props.file) {
    return <FormControlFile {...props} />;
  } else if (props.plainText) {
    return <FormControlPlainText {...props} />;
  }

  return <FormControlInput {...props} />;
};

FormControl.defaultProps = {
  theme: defaultTheme,
};

export default FormControl;
