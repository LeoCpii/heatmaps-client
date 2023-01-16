import React from 'react';
import { IProps } from './interface';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('@heatmaps/design/dist/icons/sprite.svg') as string;

import './Icon.scss';

const Icon = ({ size, icon, theme }: IProps) => {
    const cls = () => {
        const arr = ['ds-icon'];

        if (theme) { arr.push(`_${theme}`); }

        return arr.join(' ');
    };

    return (
        <svg width={size} height={size} className={cls()}>
            <use xlinkHref={`${logo}#${icon}`}></use>
        </svg>
    );
};

export default Icon;
