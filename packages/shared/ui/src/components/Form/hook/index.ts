import { useState } from 'react';
import { FormGroup } from '../utilities/group';

export const useFormContext = () => {
    const [FORM, SET_FORM] = useState<FormGroup>(new FormGroup({}));

    const updateForm = (form: FormGroup): void => { SET_FORM(form); };

    return { FORM, SET_FORM: updateForm };
};