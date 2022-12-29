import React from 'react';
import { IProps } from './interface';

import './Button.scss';

const Button = ({
    children,
    action,
    theme = 'brand',
    type = 'button',
    fluid = false,
    disabled = false
}: IProps) => {
    const cls = () => {
        const arr = ['ds-btn'];

        if (theme) { arr.push(`_${theme}`); }
        if (fluid) { arr.push('_fluid'); }

        return arr.join(' ');
    };

    const click = () => {
        if (!disabled) { action(); }
    };

    return (
        <button
            className={cls()}
            onClick={() => click()}
            type={type}
            disabled={disabled}
        >{children}</button>
    );
};

export default Button;
