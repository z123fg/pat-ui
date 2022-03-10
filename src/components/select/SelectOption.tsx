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