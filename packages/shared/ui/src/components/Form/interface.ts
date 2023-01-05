import { AbstractControl, FormGroup } from './utilities/group';

export interface IProps {
    children: React.ReactNode;
    form: FormGroup;
    action: (form: any) => any;
    log?: boolean;
}

export interface IContext {
    FORM?: FormGroup,
    SET_FORM?: (form: AbstractControl) => void
}
