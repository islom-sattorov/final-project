import style from './Info.module.scss';

const Info = (props) => {
    return (

        <div className="container">
            <div className={style.section_flex}>
                <img src={props.img} />
                <div className={style.section_text}>
                    <h2 className={style.section_title}>{props.title}</h2>
                    <p className={style.section_subtitle}>{props.subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default Info