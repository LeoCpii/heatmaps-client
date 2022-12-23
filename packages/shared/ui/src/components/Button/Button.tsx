import React from 'react';
import { IProps } from './interface';

import './Button.scss';

const Title = ({ children }: IProps) => {
    return (
        <button>{children}</button>
    );
};

export default Title;
