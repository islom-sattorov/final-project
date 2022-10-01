import { NavLink } from 'react-router-dom';
import style from './ReservePage.module.scss';

const ReserveNav = () => {
    return (
        <section className={style.reserve}>
            <div className="container">
                <h1 className={style.reserve_text}>Reservation</h1>
                <nav>
                    <ul>
                        <NavLink to='reservation/hall'><li>Hall</li></NavLink>
                        <NavLink to='reservation/2ndFloor'><li>2nd-floor</li></NavLink>
                        <NavLink to='reservation/terrace'><li>Terrace</li></NavLink>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default ReserveNav