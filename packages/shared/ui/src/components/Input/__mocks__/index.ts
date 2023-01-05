import { IProps } from '../interface';

const data: Partial<IProps> = {
    placeholder: 'Write text here...',
};

const options = {
    icon: ['', 'copy', 'search'],
    type: ['text', 'email', 'password']
};

export default {
    data,
    options
};
