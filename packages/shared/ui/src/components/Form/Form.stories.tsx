import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormControl } from './utilities/control';
import { FormGroup } from './utilities/group';

import Form from '.';
import { Input, Button } from '..';

export default { title: 'Components/Form', component: Form } as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => {
    const submit = (values) => { console.log('Enviando para o form', values); };

    const form = new FormGroup({
        email: new FormControl({ value: 'novo valor', type: 'email', required: true }),
        password: new FormControl({ value: 'bolinho', type: 'password', required: false })
    });

    return (
        <Form form={form} action={(values) => submit(values)} log={true}>
            <Input controlName="email" label="Email"/>
            <Input controlName="password" label="Password"/>
            <Button type='submit'>Send</Button>
        </Form>
    ); 
};

export const Deafult = Template.bind({});

Deafult.args = { };