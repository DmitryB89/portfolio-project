import React, {FC, useState} from 'react';
import {SingleProject} from "./SingleProject";
import {data} from "../data/projects";
import s from './Projects.module.scss'


const allCategories = ['Все', ...new Set(data.map(item => item.category))]
console.log(allCategories)

export const Projects = () => {
    const [projects, setProjects] = useState(data)
    // const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {

        if (category === 'Все') {
            setProjects(data)
            return
        }
        const newItems = data.filter((item) => item.category === category)
        setProjects(newItems)
    }


    return <>
        <section className={s.projectsSection}>
            <div className={s.filtersContainer}>
                <h2>Проекты</h2>
                <span className={s.filterBtns}> {
                    allCategories.map((category, index) => {

                        return <span className={s.filterBtn} key={index}
                                     onClick={() => filterItems(category)}>/ {category}</span>
                    })
                }

            </span>


            </div>
            <div className={s.projectsContainer}>
            <SingleProject projects={projects}/>
            </div>
        </section>
    </>
};

