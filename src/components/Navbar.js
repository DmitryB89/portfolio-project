import React from 'react';
import {Link} from "react-router-dom";
import {links} from "../links/links";
import s from './Navbar.module.scss'
import logo from '../assets/logo.svg'
import github from '../assets/github.svg'


export const Navbar = () => {
    return (
        <header>
            <div className={s.navContainer}>
                <img src={logo} alt="logo" className={s.navLogo}/>
                <nav>
                    <ul>
                        {links.map((link) => {
                            const {id, text, url} = link;
                            return <li key={id}>
                                <Link to={url}>/ {text}</Link>
                            </li>
                        })}
                    </ul>
                </nav>
                <div className={s.navButtons}>
                    <img className={s.github} src={github} alt=""/>

                    <button>
                        <div className={s.btnText}>Скачать cv</div>
                    </button>
                </div>
            </div>
        </header>
    );
};

