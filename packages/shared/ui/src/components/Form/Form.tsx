import React from 'react';
import { IProps, IContext } from './interface';

import './Form.scss';
import { useFormContext } from './hook';

export const Context = React.createContext<IContext>({});

const Form = ({ children, form, action }: IProps) => {
    const context: IContext = useFormContext();
    const { SET_FORM } = context;

    const submit = (event) => {
        event.preventDefault();

        if (form.isValid) { action(form.values); }
        else {
            form.dirty();
            form.validation();
            SET_FORM && SET_FORM(form);
        }
    };

    return (
        <Context.Provider value={context}>
            <form onSubmit={(event) => submit(event)}>
                {children}
            </form>
        </Context.Provider>
    );
};

export default Form;
