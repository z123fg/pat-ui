import { action } from '@storybook/addon-actions';
import React from 'react';
import Select from './index';
import SelectOption from './SelectOption';

export default {
  title: 'Select',
  component: Select,
};

export const StandardSelect = () => (
  <div>
    <Select
      className="standard"
      onChange={action('selected')}
      placeholder="select a topping"
    >
      <SelectOption>Celery</SelectOption>
      <SelectOption>Cheese</SelectOption>
      <SelectOption>Onion</SelectOption>
      <SelectOption>Tomato</SelectOption>
    </Select>
  </div>
);

export const DiffTypeSelct = () => (
  <div>
    <Select
      className="standard"
      onChange={action('selected')}
      placeholder="select a topping"
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
      className="outlined"
    >
      <SelectOption>Celery</SelectOption>
      <SelectOption>Cheese</SelectOption>
      <SelectOption>Onion</SelectOption>
      <SelectOption>Tomato</SelectOption>
    </Select>
    <br />
    <Select
      className="filled"
      onChange={action('selected')}
      placeholder="select a topping"
    >
      <SelectOption>Celery</SelectOption>
      <SelectOption>Cheese</SelectOption>
      <SelectOption>Onion</SelectOption>
      <SelectOption>Tomato</SelectOption>
    </Select>
  </div>
);

export const DiffColorSelct = () => (
  <div>
    <h2>Standard</h2>
    <Select
      className="standard"
      onChange={action('selected')}
      placeholder="select a topping"
      color="primary"
    >
      <SelectOption>Celery</SelectOption>
      <SelectOption>Cheese</SelectOption>
      <SelectOption>Onion</SelectOption>
      <SelectOption>Tomato</SelectOption>
    </Select>
    <br />
    <Select
      className="standard"
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
      className="standard"
      onChange={action('selected')}
      placeholder="select a topping"
      color="error"
    >
      <SelectOption>Celery</SelectOption>
      <SelectOption>Cheese</SelectOption>
      <SelectOption>Onion</SelectOption>
      <SelectOption>Tomato</SelectOption>
    </Select>
    <br />
    <h2>Outlined</h2>
    <Select
      onChange={action('selected')}
      placeholder="select a topping"
      className="outlined"
      color="primary"
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
      className="outlined"
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
      className="outlined"
      color="error"
    >
      <SelectOption>Celery</SelectOption>
      <SelectOption>Cheese</SelectOption>
      <SelectOption>Onion</SelectOption>
      <SelectOption>Tomato</SelectOption>
    </Select>
    <br />
    <h2>Filled</h2>
    <Select
      onChange={action('selected')}
      placeholder="select a topping"
      className="filled"
      color="primary"
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
      className="filled"
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
      className="filled"
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
      placeholder="a disabled select"
      className='standard'
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
