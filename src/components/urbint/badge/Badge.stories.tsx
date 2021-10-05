import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from './Badge';
import { LevelEnum } from '../utils/LevelEnum';

export default {
    title: 'Urbint/Badge',
    component: Badge,
    argTypes: {
      }
} as ComponentMeta <typeof Badge>

const Template: ComponentStory <typeof Badge> = args => <Badge {...args} />;

export const Unknown = Template.bind({});
Unknown.args = {
    riskLevel: LevelEnum.unknown,
    isBadge: true
}

export const Low = Template.bind({});
Low.args = {
    riskLevel: LevelEnum.low,
    isBadge: true
}

export const Medium = Template.bind({});
Medium.args = {
    riskLevel: LevelEnum.medium,
    isBadge: true
}

export const High = Template.bind({});
High.args = {
    riskLevel: LevelEnum.high,
    isBadge: true
}

export const VeryHigh = Template.bind({});
VeryHigh.args = {
    riskLevel: LevelEnum.veryHigh,
    isBadge: true
}