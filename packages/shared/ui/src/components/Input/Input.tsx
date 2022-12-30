import React, { useState, useContext } from 'react';

import { MASKS, NUMBER, NUMBER_MASK } from './const';
import { Context } from '@components/Form';
import { Sanitize } from './sanitaize';
import { IProps } from './interface';

import Icon, { ESize } from '../Icon';

import './Input.scss';

const Input = ({ icon, placeholder = '', label, control, controlName }: IProps) => {
    const { FORM } = useContext(Context);
    const [ERROR, SET_ERROR] = useState<string>();
    const [timeout, setterTimeout] = useState<NodeJS.Timeout>();

    const sanitize = new Sanitize();

    const cls = () => {
        const arr = ['ds-input'];
        if (icon) { arr.push('_padding'); }
        return arr.join(' ');
    };

    const groupCls = () => {
        const arr = ['ds-input-group'];
        if (getError()) { arr.push('_active'); }
        return arr.join(' ');
    };

    const errorCls = () => {
        const arr = ['message'];
        if (getError()) { arr.push('_active'); }
        return arr.join(' ');
    };

    const iconFn = () => {
        return icon
            ? <Icon icon={icon} size={ESize.MID} theme="mode"></Icon>
            : '';
    };

    const mapType = () => {
        if (control) {
            if (['password'].includes(control.type)) { return control.type; }
            if (NUMBER.includes(control.type)) { return 'tel'; }

            return 'text';
        }
    };

    const validate = () => {
        control.error
            ? SET_ERROR(control.error)
            : SET_ERROR('');
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
        control.dirty = true;
        const value = event.target.value || '';
        const sanitized = clean(value);
        control.value = sanitized;
        validate();
    };

    const getPlaceholder = () => {
        return placeholder
            ? `${placeholder} ${control && control.required ? '*' : ''}`
            : '';
    };

    const getError = () => {
        if (FORM?.controls && FORM?.controls[controlName]) {
            return control.dirty && FORM && !FORM.isValid ? control.error : '';
        } else {
            return control.dirty && control.error || '';
        }
    };

    const getLabel = () => {
        return label ? <label className='label'>{label}</label> : '';
    };

    return (
        <div className='ds-input-container'>
            {getLabel()}
            <div className={groupCls()}>
                {iconFn()}
                <input
                    type={mapType()}
                    placeholder={getPlaceholder()}
                    className={cls()}
                    onInput={(event) => handler(event)}
                    onBlur={(event) => input(event)}
                />
            </div>
            <div className='error'>
                <div className={errorCls()}> {getError()} </div>
            </div>
        </div>
    );
};

export default Input;
