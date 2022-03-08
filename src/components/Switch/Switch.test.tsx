import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import Switch, { SwitchColorType } from './Switch';

describe('Switch component should work as expected in different conditions', ()=>{
    it('Switch component should match with the snapshop',()=>{
        const wrapper = render(<Switch/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Switch knob will change its color to Secondary if color prop is set to Secondary',()=>{
        const wrapper = render(<Switch color={SwitchColorType.Secondary}/>);
        const KnobEl = wrapper.queryByTestId('switch-knob');
        expect(KnobEl).toBeInTheDocument();
        expect(KnobEl).toHaveStyle('background: #FAFAFA');
        KnobEl&&fireEvent.click(KnobEl);
        expect(KnobEl).toHaveStyle('background: #F50057');
    });

    it('Switch should be disabled when disabled prop is true',()=>{
        const mockOnChange = jest.fn();
        const wrapper = render(<Switch disabled onChange={mockOnChange}/>);
        const TrackEl = wrapper.queryByTestId('switch-track');
        const KnobEl = wrapper.queryByTestId('switch-knob');
        expect(TrackEl).toBeInTheDocument();
        expect(TrackEl).toHaveStyle('background:rgba(0,0,0,0.12)');

        KnobEl&&fireEvent.click(KnobEl);
        expect(mockOnChange.mock.calls.length).toBe(0);
    });

    it('Switch will be turned on when checked state is true',()=>{
        const wrapper = render(<Switch/>);
        const RippleEl = wrapper.queryByTestId('switch-ripple');

        expect(RippleEl).toHaveStyle('left:7px');

        wrapper.rerender(<Switch checked/>);
        expect(RippleEl).toHaveStyle('left:27px');
    });
})