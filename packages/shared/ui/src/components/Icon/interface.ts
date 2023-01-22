export interface IProps {
    icon: TIcon;
    theme: 'brand' | 'accent' | 'mode' | 'text' | 'gray';
    size: ESize;
}

export type TIcon = 'copy' | 'search' | 'close' | 'check' | 'attention' | 'info';

export enum ESize {
    SMALL = '12px',
    MID = '18px',
    BIG = '24px'
}
