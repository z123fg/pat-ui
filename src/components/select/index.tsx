<<<<<<< HEAD
export { default } from './Select';
=======
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
>>>>>>> bc74b747d85f4d07759b2547c7bd94dda0ea61d3
