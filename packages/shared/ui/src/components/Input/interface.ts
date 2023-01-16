import { FormControl } from '@components/Form';
import { TIcon } from '../Icon';

export interface IProps {
    control: FormControl;
    controlName: string;
    placeholder?: string;
    icon?: TIcon;
    label?: string;
}
