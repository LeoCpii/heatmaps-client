import React, { useEffect, useState } from 'react';
import { IProps } from './interface';
import Toast from './Toast';

import './Toast.scss';

const ToastProvider = ({ notify }: IProps) => {
    const [LIST, SET_LIST] = useState([]);

    useEffect(() => {
        console.log('notify');
    }, [notify]);

    // useEffect(() => {
    //     SET_LIST([...toasts]);
    //     console.log(LIST);
    // }, [toasts]);

    // const deleteToast = (index: number) => {
    //     LIST.splice(index, 1);
    //     toasts.splice(index, 1);
    //     SET_LIST([...LIST]);
    // };

    return (
        <div className="ds-toast-container">
            {
                LIST.map((toast, i) => {
                    // return <Toast
                    //     key={i}
                    //     title={toast.title}
                    //     description={toast.description}
                    //     mode={toast.mode}
                    //     autoClose={toast.autoClose}
                    //     timeout={toast.timeout}
                    //     remove={() => deleteToast(i)}
                    // />;

                    return '';
                })
            }
        </div>
    );
};

export default ToastProvider;
