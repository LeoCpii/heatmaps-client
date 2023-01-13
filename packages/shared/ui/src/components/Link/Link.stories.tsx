import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link, { IProps } from '.';
import props from './__mocks__';

export default {
    title: 'Components/Link',
    component: Link,
    argTypes: {
        children: {
            name: 'text',
            control: 'string',
            description: 'Button text',
        }
    }
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args: IProps) => <Link
    children={args.children}
    target={args.target}
    url={args.url} />;

export const Default = Template.bind({});

Default.args = { ...props.data };
