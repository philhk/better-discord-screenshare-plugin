import React from 'react';
import { Dropdown as InheritDropdown } from '../../discord-modules';
import { DropdownProps as InheritDropdownProps } from '../../discord-modules/types/components';

export interface DropdownProps extends InheritDropdownProps {}

export const Dropdown: React.FC<DropdownProps> = (props) =>
  React.createElement(InheritDropdown, props);
