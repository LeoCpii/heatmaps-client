import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon, { IProps } from '.';
import props from './__mocks__';

export default {
    title: 'Components/Icon',
    component: Icon,
    argTypes: {
        icon: {
            name: 'icon',
            control: { type: 'select' },
            options: props.options.icon,
            description: 'Icon appearance'
        },
        size: {
            name: 'size',
            control: { type: 'select' },
            options: props.options.size,
            description: 'Icon size'
        },
        theme: {
            name: 'theme',
            control: { type: 'select' },
            options: props.options.theme,
            description: 'Icon theme'
        }
    }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: IProps) => <Icon
    size={args.size}
    icon={args.icon}
    theme={args.theme}
/>;

export const Default = Template.bind({});

Default.args = { ...props.data };
