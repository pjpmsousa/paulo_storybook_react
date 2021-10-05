import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ItemList from './ItemList';

export default {
    title: 'Urbint/ItemList',
    component: ItemList
} as ComponentMeta <typeof ItemList>

const Template: ComponentStory <typeof ItemList> = args => <ItemList />;

export const Standard = Template.bind({});