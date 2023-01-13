import React from 'react';
import { IProps } from './interface';

import './Link.scss';

const Link = ({ children, url, target }: IProps) => {
    return (
        <a href={url} target={target}>{children}</a>
    );
};

export default Link;
