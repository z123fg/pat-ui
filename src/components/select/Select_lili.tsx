import { type } from 'os';
import React, { FC } from 'react';

export type selectType = 'standard' | 'outlined' | 'filled';

export type selectColor = 'primary' | 'secondary' | 'error';

export type selectSize = 'medium' | 'small';

interface ISelectProps {
  type?: selectType;
  color?: selectColor;
  size?: selectSize;
  label?: string;
  disabled?: boolean;
  clicked?: boolean;
  onChange?: (e?: MouseEvent) => void;
}

export const Select: FC<ISelectProps> = (props) => {
  const { type, color, size, label, disabled, clicked, onChange } = props;

  return (
    <label
      style={{
        position: 'relative',
      }}
    >
      <select
        style={{
          visibility: 'hidden',
        }}
      ></select>
      <span
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2px 20px',
          width: '200px',
          height: '56px',
          border: '1px solid grey',
          borderRadius: '6px',
        }}
      >
        <span
          style={{
            //   position: 'absolute',

            // top: '30',
            // left: '20',
            width: '40',
            height: '19',
          }}
        >
          {type === 'standard' ? `${label}` : 'option'}
        </span>
        <span
          style={
            {
              // position: 'absolute',
              // left: 2,
            }
          }
        >
          +
        </span>
      </span>
      {type === 'standard' && !clicked ? null : `${label}`}
    </label>
  );
};

export default Select;
