import s from './Skills.module.scss'
import React from 'react';
import {SingleSkill} from "./SingleSkill";
import {skills} from "../data/skills";


export const Skills = () => {
    return (
        <section>
            <div className={s.title}>
                <h2>Навыки</h2>
            </div>
            <div className={s.skillsContainer}>


                <SingleSkill skills={skills}/>
            </div>
        </section>

    );
};

