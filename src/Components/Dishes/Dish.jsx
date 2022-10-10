import style from './Dish.module.scss';


const Dish = (props) => {
    return (
        <div className={style.dishes_container}>
            <img className={style.pic} src={props.pic} alt='dish' />
            <h3 className={style.title}>{props.title} $15</h3>
            <hr />
            <p className={style.subtitle}>{props.subtitle}</p>
        </div>
    )
}

export default Dish