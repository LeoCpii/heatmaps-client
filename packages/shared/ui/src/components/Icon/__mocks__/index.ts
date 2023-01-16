import { ESize, IProps } from '../interface';
const data: Partial<IProps> = {
    size: ESize.MID,
    icon: 'copy',
    theme: 'mode'
};

const options = {
    icon: ['copy', 'search'],
    size: [ESize.SMALL, ESize.MID, ESize.BIG],
    theme: ['brand', 'accent', 'mode']
};

export default {
    data,
    options
};
