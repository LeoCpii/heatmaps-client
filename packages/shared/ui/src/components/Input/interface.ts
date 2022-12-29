import { Control } from '../form/control';
import { TIcon } from '../Icon';

export interface IProps {
    control: Control;
    icon: TIcon;
    placeholder: string;
    type: 'text' | 'email' | 'password';
    required: boolean;    
}
