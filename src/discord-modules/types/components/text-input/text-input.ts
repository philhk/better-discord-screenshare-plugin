import React, { RefObject } from 'react';

export interface TextInputSizes {
  DEFAULT: string;
  MINI: string;
}

export interface TextInputProps {
  value?: string | number;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  name?: string;
  size?: string;
  type?: string;
  autoFocus?: boolean;
  inputClassName?: string;
  inputPrefix?: string;
  inputRef?: RefObject<string>;
  prefixElement?: JSX.Element;
  focusProps?: any;
  onChange?: (changedValue: string) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export interface TextInput extends React.ComponentClass<TextInputProps> {
  Sizes: TextInputSizes;
}
