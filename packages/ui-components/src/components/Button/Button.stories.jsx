import React from 'react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

const defaultArgs = {
  label: 'Button',
  type: 'button',
  color: 'primary',
  size: 'small',
  handleAction: () => {}
}

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  color: 'secondary'
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  ...defaultArgs,
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: 'large'
};

