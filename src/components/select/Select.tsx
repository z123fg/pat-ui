import React, {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  ReactElement,
  ReactNode,
  useState,
} from 'react';
import { ISelectOptionProps } from './SelectOption';

export type selectColor = 'primary' | 'secondary' | 'error';

// export type selectType = 'standard' | 'outline' | 'filled';
export type selectType = 'standard' | 'outlined' | 'filled';

export interface ISelectProps {
  /** children must be React Element */
  children?:
    | ReactElement<ISelectOptionProps>
    | ReactElement<ISelectOptionProps>[];
  /** set customized css class */
  className?: selectType;
  /** set select to be disabled */
  disabled?: boolean;
  /** set customized css style */
  style?: CSSProperties;
  /** set default string on active option */
  placeholder?: string;
  /** a callback to provide current value */
  onChange?: (val: any) => void;
  /** set the color of select */
  color?: selectColor;
  /** set the type of select */
  type?: selectType;
}

//A Select allows user to select from multiple options.

const Select: FC<ISelectProps> = (props) => {
  const { children, className, style, placeholder, onChange, disabled, color } = props;

  const [isOptionListOpen, setisOptionListOpen] = useState(false);

  //check if there is an active option
  let activeOption: ReactNode = undefined;

  if (children) {
    Children.forEach(children, (child: ReactElement<ISelectOptionProps>) => {
      if (child.props.active) {
        activeOption = child.props.children;
      }
    });
  }

  //if no active child is set, then use placeholder
  const [currentActiveOption, setCurrentActiveOption] = useState(
    activeOption ? activeOption : (placeholder as ReactNode)
  );

  const toggleOptionList = () => {
    setisOptionListOpen(!isOptionListOpen);
  };

  const closeOptionList = () => {
    if (isOptionListOpen) {
      setisOptionListOpen(!isOptionListOpen);
    }
  };

  const setSelected = (val: any, innerChild: ReactNode) => {
    //trigger callback function
    if (onChange) {
      onChange(val);
    }
    setCurrentActiveOption(innerChild);
  };

  const getColorClass = (color: string | undefined) => {
    switch (color) {
      case 'primary':
        return 'select__active_option--primary';
      case 'secondary':
        return 'select__active_option--secondary';
      case 'error':
        return 'select__active_option--error';
      default:
        return 'select__active_option';
    }
  };

  //problem: after selected, label hide??
  const getLabelClass = (isOptionListOpen: boolean) => {
    if (isOptionListOpen ) {
      return 'label__ontop';
    } else {
      return 'label__hidden';
    }
  }
  const getTypeClass = (className: selectType | undefined) => {
    switch (className) {
      case 'standard':
        return 'select__active_option--standard';
      case 'outlined':
        return 'select__active_option--outlined';
      case 'filled':
        return 'select__active_option--filled';
      default:
        return 'select__active_option';
    }
  }

  return (
    <div
      className={className ? `select__wrapper ${className}` : 'select__wrapper'}
      style={style}
    >
      <span className={`${getLabelClass(isOptionListOpen)}`}>
        {placeholder}
      </span>
      <div
        className={isOptionListOpen ? 'select open' : 'select'}
        onClick={(e) => (disabled ? e.preventDefault() : toggleOptionList())}
        onBlur={() => closeOptionList()}
        tabIndex={0}
      >
        <div
          className={`
            ${
              disabled
                ? 'select__active_option disabled'
                : 'select__active_option'
            } ${getColorClass(color)} ${getTypeClass(className)}
          `}
        >
          <div className="select__active_option__inner">
            {isOptionListOpen ? null : currentActiveOption}
          </div>
          <div className="select__arrow"></div>
        </div>

        <div className="select__options">
          {children
            ? Children.map(children, (child: ReactElement) =>
                cloneElement(child, { setSelected })
              )
            : children}
        </div>
      </div>
    </div>
  );
};

export default Select;
