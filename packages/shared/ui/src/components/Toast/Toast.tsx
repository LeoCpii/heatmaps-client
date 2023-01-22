import React, { useEffect, useState } from 'react';
import Icon, { ESize } from '@components/Icon';

import { IMode, IToast } from './interface';

import './Toast.scss';
import { Timer } from '@services/timer';

const Toast = ({ title, description, timeout = 8000, autoClose = false, mode }: IToast) => {
    const [INITIAL, SET_INITIAL] = useState<boolean>(true);
    const [STOP, SET_STOP] = useState<boolean>();

    useEffect(() => { start(); }, []);

    const mapper: IMode = {
        info: { icon: 'info', theme: 'blue', color: 'mode' },
        danger: { icon: 'close', theme: 'red', color: 'mode' },
        success: { icon: 'check', theme: 'green', color: 'mode' },
        warning: { icon: 'attention', theme: 'yellow', color: 'text' },
    };

    const mapped = () => { return mapper[mode]; };

    const resume = () => {
        timer.resume();
        SET_STOP(false);
    };

    const pause = () => {
        timer.pause();
        SET_STOP(true);
    };

    const close = () => {
        SET_INITIAL(false);
        timer.pause();
    };

    const timer = new Timer(timeout, close);

    const start = () => {
        setTimeout(() => {
            SET_INITIAL(true);
            if (autoClose) { timer.resume(); }
        }, 10);
    };

    const toastCls = () => {
        const arr = ['ds-toast'];
        const state = INITIAL ? 'visible' : '';
        arr.push(state);
        return arr.join(' ');
    };

    const timerCls = () => {
        const pause = STOP ? 'pause' : '';
        const arr = ['timer', 'animate', mapped().theme, pause];
        return arr.join(' ');
    };

    return (
        <div className={toastCls()} onMouseEnter={() => pause()} onMouseLeave={() => resume()}>
            <div className="header">
                <div className="left">
                    <div className={['icon', mapped().theme].join(' ')}>
                        <Icon icon={mapped().icon} size={ESize.SMALL} theme={mapped().color} />
                    </div>
                    <h4>{title}</h4>
                </div>
                <div className="right">
                    <button className="btn-close" onClick={() => close()}>
                        <Icon icon={'close'} size={ESize.SMALL} theme={'gray'} />
                    </button>
                </div>
            </div>
            {description && (
                <>
                    <div className="row"></div>
                    <div className="content">
                        <p>{description}</p>
                    </div>
                    <div className="timer-container">
                        <div className={timerCls()} style={{ animationDuration: `${timeout}ms` }}
                        ></div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Toast;
