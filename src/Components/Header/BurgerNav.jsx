import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import style from './Header.module.scss';

const BurgerNav = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    return (
        <button
            onClick={() => setIsActive(!isActive)}
            className={!isActive ? "hamburger hamburger--slider" : "hamburger hamburger--slider is-active"} type="button">

            <span className="hamburger-box">
                <div className={isActive ? style.burger_flex : style.burger_hide}>
                    <NavLink className={({ isActive }) => (isActive ? style.navbar_item_active : style.navbar_item)} to='/'><li>Home</li></NavLink>
                    {location.pathname === '/' ?
                        <Link to='about'
                            spy={true}
                            smooth={true}
                            duration={700}
                            className={style.navbar_item}>
                            <li>About Us</li></Link> : <></>}
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
                </div>
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default BurgerNav