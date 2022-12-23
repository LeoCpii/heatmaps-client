import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title, { IProps } from '.';
import props from './__mocks__';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    title: {
      name: 'title',
      control: 'string',
      defaultValue: props.data,
      description: 'Título do Fragmento',
    }
  }
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args: IProps) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = { ...props.data };
