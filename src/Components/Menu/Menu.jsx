import Dishes from '../Dishes/Dishes';
import style from './Menu.module.scss';

const Menu = () => {
    return (
        <section className={style.section}>
            <div className='container'>
                <div className={style.section_text}>
                    <span className={style.section_span}>Menu</span>
                    <h2 className={style.section_title}>Popular Dishes</h2>
                    <p className={style.section_subtitle}>There is a game between the waiters in restaurant to see who serves the food to<br />
                        each table fastest. That led to attempting the Guinness Record.
                    </p>
                </div>
                <Dishes />
            </div>
        </section>
    )
}

export default Menu