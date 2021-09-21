import React from 'react';

import Box from './Box';
import FlexBox from './FlexBox';
import AbsoluteBox from './AbsoluteBox';

export default {
  title: 'Components/Boxes',
  component: Box,
  subComponents: { FlexBox, AbsoluteBox }
};

const TemplateBox = (args) => <Box {...args} />;
const TemplateFlexBox = (args) => <FlexBox {...args} />;
const TemplateAbsoluteBox = (args) => <AbsoluteBox {...args} />;

const defaultArgs = {
    width: {xl: '100px', lg: '100px', md: '100px', sm: '100px', xs: '100px'},
    height: {xl: '100px', lg: '100px', md: '100px', sm: '100px', xs: '100px'},
    maxWidth: {xl: '100px', lg: '100px', md: '100px', sm: '100px', xs: '100px'},
    maxHeight: {xl: '100px', lg: '100px', md: '100px', sm: '100px', xs: '100px'},
    marginTop: {xl: '10px', lg: '10px', md: '10px', sm: '10px', xs: '10px'},
    marginRight: {xl: '10px', lg: '10px', md: '10px', sm: '10px', xs: '10px'},
    marginBottom: {xl: '10px', lg: '10px', md: '10px', sm: '10px', xs: '10px'},
    marginLeft: {xl: '10px', lg: '10px', md: '10px', sm: '10px', xs: '10px'},
    paddingTop: {xl: '10px', lg: '10px', md: '10px', sm: '10px', xs: '10px'},
    paddingRight: {xl: '10px', lg: '10px', md: '10px', sm: '10px', xs: '10px'},
    paddingBottom: {xl: '10px', lg: '10px', md: '10px', sm: '10px', xs: '10px'},
    paddingLeft: {xl: '10px', lg: '10px', md: '10px', sm: '10px', xs: '10px'},
}

const flexArgs = {
    direction: 'row',
    justifyContent: 'inherit',
    alignItems: 'inherit'
}

const absoluteArgs = {
    top: {xl: '0', lg: '0', md: '0', sm: '0', xs: '0'},
    right: {xl: '0', lg: '0', md: '0', sm: '0', xs: '0'},
    bottom: {xl: '0', lg: '0', md: '0', sm: '0', xs: '0'},
    left: {xl: '0', lg: '0', md: '0', sm: '0', xs: '0'},
}

export const BoxNormal = TemplateBox.bind({});
BoxNormal.args = {
  ...defaultArgs
};

export const BoxFlex = TemplateFlexBox.bind({});
BoxFlex.args = {
  ...defaultArgs,
  ...flexArgs
};

export const BoxAbsolute = TemplateAbsoluteBox.bind({});
BoxAbsolute.args = {
  ...defaultArgs,
  ...absoluteArgs
};

