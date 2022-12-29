import React, { useState } from 'react';
import { IProps } from './interface';
import { Sanitize } from './sanitaize';

import Icon, { ESize } from '../Icon';
import { MASKS, NUMBER, NUMBER_MASK } from './const';

import './Input.scss';

const Input = ({ icon, placeholder, control }: IProps) => {
    const [error, setError] = useState<string>('');
    const [timeout, setterTimeout] = useState<NodeJS.Timeout>();

    const sanitize = new Sanitize();

    const cls = () => {
        const arr = ['ds-input'];
        if (icon) { arr.push('_padding'); }
        return arr.join(' ');
    };

    const groupCls = () => {
        const arr = ['ds-input-group'];
        if (error) { arr.push('_active'); }
        return arr.join(' ');
    };

    const errorCls = () => {
        const arr = ['message'];
        if (error) { arr.push('_active'); }
        return arr.join(' ');
    };

    const iconFn = () => {
        return icon
            ? <Icon icon={icon} size={ESize.MID} theme="mode"></Icon>
            : '';
    };

    const mapType = (): string => {
        if (['password'].includes(control.type)) { return control.type; }
        if (NUMBER.includes(control.type)) { return 'tel'; }

        return 'text';
    };

    const validate = () => {
        console.log('control.value', control.value);
        console.log('control.error', control.error);
        control.error
            ? setError(control.error)
            : setError('');
    };

    const clean = (value: string): string => {
        let clean: string = value;
        if (value) {
            if (control.type === 'email') { clean = value; }
            if (NUMBER_MASK.includes(control.type)) { clean = sanitize.number(value); }
            if (MASKS.includes(control.type)) { clean = sanitize.text(value); }
        }
        return clean;
    };

    const handler = (event: any) => {
        clearTimeout(timeout);
        const time = setTimeout(() => { input(event); }, 500);
        setterTimeout(time);
    };

    const input = (event: any) => {
        const value = event.target.value || '';
        console.log('AAA', value);
        const sanitized = clean(value);
        control.value = sanitized;
        validate();
    };

    return (
        <div className='ds-input-container'>
            <div className={groupCls()}>
                {iconFn()}
                <input
                    type={mapType()}
                    placeholder={`${placeholder} ${control.required ? '*' : ''}`}
                    className={cls()}
                    onInput={(event) => handler(event)}
                    onBlur={(event) => input(event)}
                />
            </div>
            <div className='error'>
                <div className={errorCls()}> {error} </div>
            </div>
        </div>
    );
};

export default Input;
