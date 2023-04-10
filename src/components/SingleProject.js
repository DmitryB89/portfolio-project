import s from './SingleProject.module.scss'
import zoom from '../assets/zoom.svg'
import {motion} from "framer-motion";


export const SingleProject = (props) => {

    return (
        <div className={s.itemContainer}>
            {props.projects.map(item => {
                const {id, title, cover, technology} = item
                return (
                    <div key={id} className={s.item}>
                        <div className={s.itemImg}>
                            <img src={cover} alt=""></img>
                            <img className={s.scaleIcon} src={zoom}/>

                        </div>
                        <div className={s.itemContent}>
                            <div>
                                <h3>{title}</h3>
                                <p> {technology}</p>

                            </div>
                        </div>
                        {/*<img src={cover} alt={title}/>*/}

                        {/*<h4>{title}</h4>*/}
                    </div>
                )
            })}
        </div>
    )
};