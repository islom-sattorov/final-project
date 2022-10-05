import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import BurgerNav from './BurgerNav';
import style from './Header.module.scss';
import HeaderIcons from './HeaderIcons';

const HeaderNavBar = () => {
    return (
        <nav className={style.navbar}>
            <div className='container'>
                <nav className={style.navbar_flex}>
                    <ul className={style.navbar_items}>
                        <NavLink className={({ isActive }) => (isActive ? style.navbar_item_active : style.navbar_item)} to='/'><li>Home</li></NavLink>
                        <Link to='about'
                            spy={true}
                            smooth={true}
                            duration={700}
                            className={style.navbar_item}>
                            <li>About Us</li></Link>
                        <NavLink className={({ isActive }) => (isActive ? style.navbar_item_active : style.navbar_item)} to='/menu'><li>Our Menu</li></NavLink>
                        <NavLink className={({ isActive }) => (isActive ? style.navbar_item_active : style.navbar_item)} to='/reservation'><li>Reservation</li></NavLink>
                        <NavLink className={({ isActive }) => (isActive ? style.navbar_item_active : style.navbar_item)} to='/blog'><li>Blog</li></NavLink>
                        <Link
                            className={style.navbar_item}
                            spy={true}
                            smooth={true}
                            duration={700}
                            to='footer'
                        ><li>Contact Us</li></Link>
                    </ul>
                    <BurgerNav />
                    <HeaderIcons />
                </nav>
            </div>
        </nav>
    )
}

export default HeaderNavBar