import { action } from '@storybook/addon-actions';
import React from 'react';
import Select from './index';
import SelectOption from './SelectOption';



export default {
    title: 'Select',
    component: Select,
}

export const DefaultSelect = () => (
  <div>
    <Select onChange={action('selected')} placeholder="select a topping">
      <SelectOption>Celery</SelectOption>
      <SelectOption>Cheese</SelectOption>
      <SelectOption>Onion</SelectOption>
      <SelectOption>Tomato</SelectOption>
    </Select>
    <br />
    <Select
      onChange={action('selected')}
      placeholder="select a topping"
      color="secondary"
    >
      <SelectOption>Celery</SelectOption>
      <SelectOption>Cheese</SelectOption>
      <SelectOption>Onion</SelectOption>
      <SelectOption>Tomato</SelectOption>
    </Select>
    <br />
    <Select
      onChange={action('selected')}
      placeholder="select a topping"
      color="error"
    >
      <SelectOption>Celery</SelectOption>
      <SelectOption>Cheese</SelectOption>
      <SelectOption>Onion</SelectOption>
      <SelectOption>Tomato</SelectOption>
    </Select>
  </div>
);

export const DisabledSelect = () => (
  <div>
    <Select
      disabled
      onChange={action('selected')}
      placeholder="this is a disabled select"
    >
      <SelectOption>Celery</SelectOption>
      <SelectOption>Cheese</SelectOption>
      <SelectOption>Onion</SelectOption>
      <SelectOption>Tomato</SelectOption>
    </Select>
  </div>
);

export const SelectWithActive = () => (
  <div>
    <Select onChange={action('selected')} placeholder="this is a Select">
      <SelectOption>Celery</SelectOption>
      <SelectOption active>Cheese</SelectOption>
      <SelectOption>Onion</SelectOption>
      <SelectOption>Tomato</SelectOption>
    </Select>
  </div>
);