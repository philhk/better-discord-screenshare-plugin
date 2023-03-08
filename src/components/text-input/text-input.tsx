import React from 'react';
import {
  TextInput as InheritTextInput,
  textInputSizes,
} from '../../discord-modules';
import {
  TextInputProps as InheritTextInputProps,
  TextInputSizes,
} from '../../discord-modules/types/components';

export interface TextInputProps extends InheritTextInputProps {
  size?: keyof TextInputSizes;
}

export const TextInput: React.FC<TextInputProps> = (props) =>
  React.createElement(InheritTextInput, {
    ...props,
    ...(props.size ? { size: textInputSizes[props.size] } : {}),
  });
