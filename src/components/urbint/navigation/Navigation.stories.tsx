import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navigation from './Navigation';
export default {
    title: 'Urbint/Navbar',
    component: Navigation
} as ComponentMeta <typeof Navigation>

const Template: ComponentStory <typeof Navigation> = args => <Navigation {...args}/>

export const Standard = Template.bind({});
Standard.args = {
    isIconVisible: true
}