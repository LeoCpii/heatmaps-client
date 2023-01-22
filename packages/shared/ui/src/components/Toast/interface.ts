import { TIcon } from '@components/Icon';

export interface IProps {
   // toasts: Array<IToast>;
   notify: (t: any) => any;
}

export interface IToast {
   title: string;
   timeout?: number;
   description?: string;
   autoClose?: boolean;
   mode: 'danger' | 'success' | 'warning' | 'info';
   remove?: (id: string) => any;
}

export interface IMode {
   [x: string]: {
      icon: TIcon;
      theme: TTheme;
      color: 'mode' | 'text';
   }
}

type TTheme = 'red' | 'green' | 'yellow' | 'blue';