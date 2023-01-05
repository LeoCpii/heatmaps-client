import React from 'react';
import { useFormContext } from './hook';
import { IProps, IContext } from './interface';

import './Form.scss';

export const Context = React.createContext<IContext>({});

const Form = ({ children, form, action, log }: IProps) => {
    const context: IContext = useFormContext(form);
    const { FORM, SET_FORM } = context;

    const getLog = () => {
        return log ? (
            <pre>
                {JSON.stringify(FORM, null, 2)}
            </pre>
        ) : '';
    };

    const submit = (event) => {
        event.preventDefault();

        if (FORM) {
            FORM.dirty();
            FORM.validation();
            SET_FORM && SET_FORM({});
        }

        if (FORM?.isValid) { action(form.values); }
    };

    return (
        <Context.Provider value={context}>
            <form onSubmit={(event) => submit(event)}>
                {children}
            </form>
            {getLog()}
        </Context.Provider>
    );
};

export default Form;
