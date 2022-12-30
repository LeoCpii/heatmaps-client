import { FormGroup } from './utilities/group';

export interface IProps {
    children: React.ReactNode;
    form: FormGroup;
    action: (form: any) => any;
}

export interface IContext {
    FORM?: FormGroup,
    SET_FORM?: (form: FormGroup) => void
}
