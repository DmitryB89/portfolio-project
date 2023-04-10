import React from 'react';
import s from '../components/Footer.module.scss'
export const Footer = () => {
    return (
        <footer className={s.footer}>
            <h5>&copy; {new Date().getFullYear() }
                <span> Dmitry Baidarov / All rights reserved</span>
            </h5>
        </footer>
    );
};

