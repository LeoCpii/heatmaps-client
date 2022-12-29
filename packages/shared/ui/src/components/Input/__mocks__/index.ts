import { FormControl } from '@components/form/control';
import { IProps } from '../interface';

const data: Partial<IProps> = {
    placeholder: 'Write text here...',
    required: false,
    type: 'text',
    control: new FormControl({ value: '', required: false, type: 'text' })
};

const options = {
    icon: ['', 'copy', 'search'],
    type: ['text', 'email', 'password']
};

const controls = {
    required: new FormControl({ value: 'AAAAA', required: true, type: 'text' }),
    email: new FormControl({ value: '', required: false, type: 'email' }),
    password: new FormControl({ value: '', required: false, type: 'password' })
};

export default {
    data,
    controls,
    options
};
