import { useState } from 'react';
import { AbstractControl, FormGroup } from '../utilities/group';

export const useFormContext = (form: FormGroup) => {
    const [FORM, SET_FORM] = useState<FormGroup>(form);

    const updateForm = (control: AbstractControl) => {
        SET_FORM(form => {
            form.controls = control;
            return Object.assign(new FormGroup({}), form);
        });
    };

    return { FORM, SET_FORM: updateForm };
};