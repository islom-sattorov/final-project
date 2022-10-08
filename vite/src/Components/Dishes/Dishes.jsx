import { Link } from "react-router-dom"
import Dish from "./Dish"
import style from './Dish.module.scss'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'

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
                {/* <Dish
                    pic={pic4}
                    title='Veg Burger'
                    subtitle='Burgers may be made from ingredients like beans.'
                /> */}
            </div>
            <Link className={style.dishes_btn} to='/menu'>See all dishes</Link>
        </>
    )
}

export default Dishes