import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Slide, { IProps } from '.';
import props from './__mocks__';

export default {
    title: 'Animation/Slide',
    component: Slide,
    argTypes: {
        direction: {
            name: 'direction',
            control: { type: 'select' },
            options: ['left', 'right'],
            description: 'Slide animation direction'
        }
    }
} as ComponentMeta<typeof Slide>;

const Template: ComponentStory<typeof Slide> = (args: IProps) => {
    return (
        <Slide direction={args.direction}>
            <h1>Fading at Initial Mount</h1>
        </Slide>
    );
};

export const Left = Template.bind({});

Left.args = { ...props.data };

export const Right = Template.bind({});

Right.args = { ...props.data, direction: 'right' };

export const Top = Template.bind({});

Top.args = { ...props.data, direction: 'top' };

export const Bottom = Template.bind({});

Bottom.args = { ...props.data, direction: 'bottom' };
