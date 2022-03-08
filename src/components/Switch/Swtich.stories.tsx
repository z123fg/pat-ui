import React from 'react';
import Switch, { SwitchColorType, SwitchSizeType } from './Switch';

export default {
    title: 'Switch',
    component: Switch
}

export const DefaultSwitch = () => {
    return (
        <Switch/>
    )
}


export const DiffColorSwitch = () => {
    return (
        <div>
            <h1>Primary</h1>
            <Switch/>
            <h1>Secondary</h1>
            <Switch color={SwitchColorType.Secondary}/>
        </div>
    )
}

export const DiffSizeSwitch = () => {
    return (
        <div>
            <h1>Medium</h1>
            <Switch/>
            <h1>Small</h1>
            <Switch size={SwitchSizeType.Small}/>
        </div>
    )
}

export const DisabledSwitch = () => {
    return (
        <div>
            <h1>Normal</h1>
            <Switch/>
            <h1>Disabled</h1>
            <Switch disabled/>
        </div>
    )
}

export const LabeledSwitch = () => {
    return (
        <div>
            <h1>Switch with label</h1>
            <Switch label='label'/>
        </div>
    )
}