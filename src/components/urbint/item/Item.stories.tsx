import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Item from './Item';
import { LevelEnum } from '../utils/LevelEnum';

export default {
    title: 'Urbint/Item',
    component: Item
} as ComponentMeta <typeof Item>

const Template: ComponentStory <typeof Item> = args => <Item {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    risk: LevelEnum.medium,
    itemId: "#837403928",
    type: "DESIGN",
    street: "122 Lexington Ave",
    town: "Staten Island, NY",
    startDate: new Date("December 3, 2021"),
    task: "Planting Tree by Nyc Parks"
}