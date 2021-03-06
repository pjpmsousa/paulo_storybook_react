import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ItemList from './ItemList';
import { MemoryRouter } from 'react-router';

export default {
    title: 'Urbint/ItemList',
    component: ItemList
} as ComponentMeta <typeof ItemList>

const Template: ComponentStory <typeof ItemList> = args => <MemoryRouter><ItemList /></MemoryRouter>;

// This story includes not only the item list, but also the AddItem form
export const Standard = Template.bind({});