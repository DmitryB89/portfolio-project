import s from './SingleSkill.module.scss'


export const SingleSkill = (props) => {

    return (
        <div className={s.skillContainer}>
            {props.skills.map(skill => {
                const {id, title, cover,feature} = skill
                return (
                    <div key={id} className={s.skill}>
                        <div >
                            <img src={cover} alt={title}/>
                            <div className={s.skillText}>
                                <h3>{title}</h3>
                                <p className={s.features}> {feature}</p>
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