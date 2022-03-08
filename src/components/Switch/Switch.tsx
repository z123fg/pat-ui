import React, { FC, useEffect, useState } from 'react';

export enum SwitchColorType {
    Primary,
    Secondary,
}

export enum SwitchSizeType {
    Medium,
    Small,
}

interface ISwitchProps {
    color?: SwitchColorType;
    size?: SwitchSizeType;
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (e?: React.MouseEvent) => void;
}

const Switch: FC<ISwitchProps> = ({
    color = SwitchColorType.Primary,
    size = SwitchSizeType.Medium,
    label,
    disabled = false,
    checked = false,
    onChange,
}) => {
    const [checkedState, setCheckedState] = useState<boolean>(checked);

    useEffect(() => {
        setCheckedState(checked);
    }, [checked]);

    const handleClick = (e: React.MouseEvent) => {
        if (disabled) return;

        setCheckedState(!checkedState);
        onChange?.(e);
    };

    return (
        <div
            style={generateSwitchContainerStyles(size)}
        >
            <div
                className='track1'
                data-testid='switch-track'

                style={generateTrackStyles(size, disabled, color, checkedState)}
            >
                <div
                    className='ripple_container'
                    data-testid="switch-ripple"
                    style={
                        generateRippleContainerStyles(checkedState, size,color)

                    }
                >
                    <div
                        onClick={handleClick}
                        data-testid='switch-knob'

                        className='nob'
                        style={generateNobStyles(size, color, checkedState)}
                    ></div>
                </div>
            </div>
            {label !== undefined && <label>{label}</label>}
        </div>
    );
};

const generateSwitchContainerStyles = (size:SwitchSizeType) =>{
    return {
        display: 'inline-flex',
                flexDirection: 'row',
                gap: size===SwitchSizeType.Medium?'12px':'7px',
                alignItems: 'center',
    } as any
}

const generateNobStyles = (size:SwitchSizeType, color:SwitchColorType,checkedState:boolean) => {
    const onColor = color=== SwitchColorType.Primary? '#3F51B5' : '#F50057'
    return {
        width: size === SwitchSizeType.Medium ? '20px' : '16px',
        height: size === SwitchSizeType.Medium ? '20px' : '16px',
        borderRadius: '10px',
        position: 'absolute',
        background: checkedState?onColor:'#FAFAFA',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
    } as any
}

const generateTrackStyles = (size: SwitchSizeType, disabled: boolean, color:SwitchColorType, checkedState:boolean) => {
    const onColor = color=== SwitchColorType.Primary? 'rgba(63, 81, 181, 0.5)' : 'rgba(245, 0, 87, 0.5)'
    return {
        width: size === SwitchSizeType.Medium ? '34px' : '26px',
        height: size === SwitchSizeType.Medium ? '14px' : '10px',
        position: 'relative',
        borderRadius: '7px',
        background: disabled ? 'rgba(0,0,0,0.12)' :checkedState? onColor:'rgba(0,0,0,0.38)',
    } as any
}

const generateRippleContainerStyles = (
    checkedState: boolean,
    size: SwitchSizeType,
    color:SwitchColorType

) => {
    const leftPostion = size === SwitchSizeType.Medium ? '7px' : '5px';
    const rightPosition = size === SwitchSizeType.Medium ? '27px' : '21px';
    return {
        position: 'absolute',
        height: size === SwitchSizeType.Medium ? '38px' : '24px',
        width: size === SwitchSizeType.Medium ? '38px' : '24px',
        borderRadius: '50%',
        background: !checkedState?'rgba(0, 0, 0, 0.04)': color===SwitchColorType.Primary?'rgba(63, 81, 181, 0.08)':'rgba(245, 0, 87, 0.08)',

        transform: 'translate(-50%, -50%)',
        top: '50%',
        transition:
            'left 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        left: !checkedState ? leftPostion : rightPosition,
    } as any;
};

export default Switch;
