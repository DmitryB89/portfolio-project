import React from 'react';
import {Link} from "react-router-dom";
import s from './Hero.module.scss'
import portrait from '../assets/Layer3.png'


export const Hero = () => {
    return (
        <main>
            <section className={s.heroContainer}>
            <h1>FRONTEND
                PORTFOLIO</h1>
            <article>

                <p className={s.heroText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae enim error est et expedita, id
                    ipsum iste minima mollitia pariatur quibusdam quos sequi! Explicabo.</p>
                <button className={s.heroBtn}><div className={s.btnText}>Сотрудничать</div></button>
            </article>
            <img src={portrait} className={s.heroImg} alt="picture_main"/>
            </section>
        </main>);
};

