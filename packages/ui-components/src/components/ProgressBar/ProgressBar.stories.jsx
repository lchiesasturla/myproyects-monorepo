import React from 'react';

import ProgressBar from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

const defaultArgs = {
  percentage: 100,
  color: 'primary',
  height: 'small'
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

export const Terciary = Template.bind({});
Terciary.args = {
  ...defaultArgs,
  color: 'terciary'
};

export const Empty = Template.bind({});
Empty.args = {
  ...defaultArgs,
  percentage: 0
};

export const Half = Template.bind({});
Half.args = {
  ...defaultArgs,
  percentage: 50
};

export const Full = Template.bind({});
Full.args = {
  ...defaultArgs
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  height: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  ...defaultArgs,
  height: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  height: 'large'
};
