export interface IProps {
    children: React.ReactNode;
    theme?: 'brand' | 'accent';
    type?: 'button' | 'submit'
    fluid?: boolean;
    disabled?: boolean;
    action?: () => any;
}
