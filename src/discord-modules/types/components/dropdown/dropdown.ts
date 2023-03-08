import React from 'react';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  value?: string;
  options?: DropdownOption[];
  isDisabled?: boolean;
  renderOptionValue?: (...args: any[]) => any;
  renderOptionLabel?: (...args: any[]) => any;
  onChange?: (state: string) => void;
}

export interface Dropdown extends React.ComponentClass<DropdownProps> {}
