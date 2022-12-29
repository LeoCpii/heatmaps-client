import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { IProps } from '.';
import props from './__mocks__';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        children: {
            name: 'text',
            control: 'string',
            defaultValue: props.data,
            description: 'Button text',
        },
        theme: {
            name: 'theme',
            control: { type: 'select' },
            options: ['brand', 'accent'],
            description: 'Button theme'
        },
        type: {
            name: 'type',
            control: { type: 'radio' },
            options: ['button', 'submit'],
            description: 'Button type'
        },
        fluid: {
            name: 'fluid',
            control: { type: 'boolean' },
            options: [true, false],
            description: 'Make Fluid button'
        },
        disabled: {
            name: 'disabled',
            control: { type: 'boolean' },
            options: [true, false],
            description: 'Make disabled button'
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IProps) => <Button
    type={args.type}
    children={args.children}
    theme={ args.theme }
    fluid={args.fluid}
    disabled={args.disabled}
    action={() => console.log('Logando...')}/>;

export const Primary = Template.bind({});

Primary.args = { ...props.data };

export const Secondary = Template.bind({});

Secondary.args = { ...props.data, theme: 'accent' };

export const Disabled = Template.bind({});

Disabled.args = { ...props.data, disabled: true };

export const Fluid = Template.bind({});

Fluid.args = { ...props.data, fluid: true };