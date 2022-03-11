<<<<<<< HEAD
import React, { FC, CSSProperties, ReactNode}from 'react';

export interface ISelectOptionProps{
    // children must be React Element
    children?: ReactNode;
    // set customized css class
    className?: string;
    //set customized css style
    cssStyle?: CSSProperties;
    //callback function provided by Select
    setSelected?: (val: string, children: ReactNode) => void;
    //value for current option
    value?: any;
    //active or default option
    active?:boolean
}

const SelectOption: FC<ISelectOptionProps> = (props) => {
    const { children, className, cssStyle, setSelected, value } = props;

    let classNames = 'select__option';
    if (className) {
        classNames = ['select__option', className].join(' ');
    }

    const passToSelect = () => {
        if (setSelected) {
            //call the callback function provided by parent Select
            const selectedValue = value ? value : '';
            setSelected(selectedValue, children);
        }
    }
    return (
      <div className={classNames} style={cssStyle} onClick={passToSelect}>
        {children}
      </div>
    );
};

SelectOption.defaultProps = {
    value: '',
    active: false
};

export default SelectOption;
=======
import React, { FC, CSSProperties, ReactNode } from 'react';

export interface IDropdownOptionProps {
  /** children must be React Element */
  children?: ReactNode;
  /** set customized css class */
  className?: string;
  /** set customized css style */
  cssStyle?: CSSProperties;
  /** callback provided by Dropdown */
  setSelected?: (val: string, children: ReactNode) => void;
  /** value for this option */
  value?: any;
  /** is the active / default option */
  active?: boolean;
}

const DropdownOption: FC<IDropdownOptionProps> = (props) => {
  const { className, children, cssStyle, setSelected, value } = props;

  let classNames = 'dropdown__option';
  if (className) {
    classNames = ['dropdown__option', className].join(' ');
  }

  const passToDropdown = () => {
    if (setSelected) {
      // call the callback function provided by parent
      const selectedValue = value ? value : '';
      setSelected(selectedValue, children);
    }
  };

  return (
    <div className={classNames} style={cssStyle} onClick={passToDropdown}>
      {children}
    </div>
  );
};

DropdownOption.defaultProps = {
  value: '',
  active: false,
};

export default DropdownOption;
>>>>>>> bc74b747d85f4d07759b2547c7bd94dda0ea61d3
