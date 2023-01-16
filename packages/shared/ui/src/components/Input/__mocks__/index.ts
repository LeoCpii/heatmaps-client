import { FormControl } from '@components/Form/utilities/control';
import { IProps } from '../interface';

const data: Partial<IProps> = {
    placeholder: 'Write text here...',
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
