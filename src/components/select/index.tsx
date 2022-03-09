import { FC } from 'react';
import Select, { ISelectProps } from './Select';
// import DropdownOption, { IDropdownOptionProps } from './DropdownOption';

export type PatSelectComponent = FC<ISelectProps>
  // & {
  //   Option: FC<IDropdownOptionProps>;
  // };

const TransSelect = Select as PatSelectComponent;
// TransDropdown.Option = DropdownOption;

export default TransSelect
