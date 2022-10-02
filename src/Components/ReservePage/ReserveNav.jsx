import { NavLink } from 'react-router-dom';
import style from './ReservePage.module.scss';

const ReserveNav = () => {
    return (
        <section className={style.reserve}>
            <div className="container">
                <h1 className={style.reserve_text}>Reservation</h1>
                <nav className={style.reserve_navbar}>
                    <ul className={style.reserve_item}>
                        <NavLink className={style.reserve_link} to='reservation/hall'><li>Hall</li></NavLink>
                        <NavLink className={style.reserve_link} to='reservation/terrace'><li>Terrace</li></NavLink>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default ReserveNav