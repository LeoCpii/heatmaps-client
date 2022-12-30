import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { IProps } from '.';
import props from './__mocks__';

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        icon: {
            name: 'icon',
            control: { type: 'select' },
            options: props.options.icon,
            description: 'Icon model',
        },
        type: {
            name: 'type',
            control: { type: 'select' },
            options: props.options.type,
            description: 'Input type',
        }
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: IProps) => <Input
    icon={args.icon}
    placeholder={args.placeholder}
    control={args.control}
    controlName={args.controlName}
/>;

export const Text = Template.bind({});

Text.args = { ...props.data };

export const Email = Template.bind({});

Email.args = { ...props.data, control: props.controls.email, controlName: 'email' };

export const Password = Template.bind({});

Password.args = { ...props.data, control: props.controls.password, controlName: 'password' };

export const Required = Template.bind({});

Required.args = { ...props.data, control: props.controls.required , controlName: 'required'};

export const Icon = Template.bind({});

Icon.args = { ...props.data, icon: 'search' };