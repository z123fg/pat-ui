import React from 'react';
import { action } from '@storybook/addon-actions';
import Select from './index';
// import Icon from '../Icon';

export default {
  title: 'Select',
  component: Select,
};

export const DefaultSelect = () => (
  <div>
    <Select onChange={action('selected')} placeholder="select a framework">
      {/* <Dropdown.Option value="spark">Spark</Dropdown.Option>
      <Dropdown.Option value="kafka">Kafka</Dropdown.Option>
      <Dropdown.Option value="flink">Flink</Dropdown.Option>
      <Dropdown.Option value="storm">Storm</Dropdown.Option> */}
    </Select>
  </div>
);