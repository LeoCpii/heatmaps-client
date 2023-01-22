import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toast from './Toast';
import props from './__mocks__';
import { IToast } from './interface';

export default {
    title: 'Components/Toast',
    component: Toast,
    argTypes: {
        mode: {
            name: 'mode',
            control: { type: 'select' },
            options: ['danger', 'success', 'warning', 'info'],
            description: 'Toast theme'
        },
        title: {
            name: 'text',
            control: 'string',
            description: 'Toast title',
        },
        description: {
            name: 'text',
            control: 'string',
            description: 'Toast description',
        },
        disabled: {
            name: 'disabled',
            control: { type: 'boolean' },
            options: [true, false],
            description: 'Make disabled button'
        }
    }
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args: IToast) => {
    return (
        <Toast
            autoClose={args.autoClose}
            mode={args.mode}
            title={args.title}
            timeout={args.timeout}
            description={args.description}
        />
    );
};

export const Success = Template.bind({});

Success.args = { ...props.data };

export const Danger = Template.bind({});

Danger.args = { ...props.data, mode: 'danger' };

export const Warning = Template.bind({});

Warning.args = { ...props.data, mode: 'warning' };

export const Info = Template.bind({});

Info.args = { ...props.data, mode: 'info' };