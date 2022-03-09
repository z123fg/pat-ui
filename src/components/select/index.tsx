<<<<<<< HEAD
import { FC } from 'react';
import Select, { ISelectProps } from './Select';
// import DropdownOption, { IDropdownOptionProps } from './DropdownOption';

export type PatSelectComponent = FC<ISelectProps>
  // & {
  //   Option: FC<IDropdownOptionProps>;
  // };

const TransSelect = Select as PatSelectComponent;
// TransDropdown.Option = DropdownOption;

export default TransSelect;
=======
export { default } from './Select';
>>>>>>> 3cd3f0141e90e7146ac3f1b51d1dd7ab80ecb78c
