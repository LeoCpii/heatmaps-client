export interface IProps {
    icon: TIcon;
    theme: 'brand' | 'accent' | 'mode';
    size: ESize;
}

export type TIcon = 'copy' | 'search';

export enum ESize {
    SMALL = '12px',
    MID = '18px',
    BIG = '24px'
}
