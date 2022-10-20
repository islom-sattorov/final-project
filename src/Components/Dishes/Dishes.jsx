import { Link } from "react-router-dom"
import pic1 from '../../assets/dish1.png'
import pic2 from '../../assets/dish2.png'
import pic3 from '../../assets/dish3.png'
import style from './Dish.module.scss'

const Dishes = () => {
    return (
        <>
            <div className={style.flex_container}>
                <Dish
                    pic={pic1}
                    title='Chicken Manjoori'
                    subtitle='Dish relished by all age groups as a starter dish at parties.'
                />
                <Dish
                    pic={pic2}
                    title='Hotdog'
                    subtitle='Grilled sausage served in the slit of a partially sliced bun.'
                />
                <Dish
                    pic={pic3}
                    title='Fresh Salmon'
                    subtitle='Beat the health blues with our Super Immune Blue Juice Recipe.'
                />
            </div>
            <Link className={style.dishes_btn} to='/menu'>See all dishes</Link>
        </>
    )
}

export default Dishes


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
