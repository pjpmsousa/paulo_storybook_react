import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TestComponent from './TestComponent';

export default {
    title: 'Tests/TestComponent',
    component: TestComponent,
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' }
      }
} as ComponentMeta <typeof TestComponent>

const Template: ComponentStory <typeof TestComponent> = (args) => <TestComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    title: "Test Component",
    description: "React and Storybook testing"
}