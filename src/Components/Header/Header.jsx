import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.svg'
import { loginToggle } from '../../features/login/loginSlice'
import fb from './fb.svg'
import style from './Header.module.scss'
import inst from './inst.svg'
import pinterest from './pinterest.svg'
import twitter from './twitter.svg'


const Header = () => {
    const login = useSelector((state) => state.login.loginStatus);
    const dispatch = useDispatch();

    return (
        <>
            <header className={style.header}>
                <div className="container">
                    <div className={style.header_flex}>
                        {/* <a className={style.header_phone} href="tel:123456789">Call - 123 456 789</a> */}
                        <button
                            onClick={() => dispatch(loginToggle())}
                            className={style.header_phone}>
                            {login ? `Logout` : 'Login'}
                        </button>
                        <img className={style.header_logo} src={logo} alt="logo" />
                        <button className={style.header_btn}>Reservation</button>
                    </div>
                </div>
            </header>
            <nav className={style.navbar}>
                <div className='container'>
                    <div className={style.navbar_flex}>
                        <ul className={style.navbar_items}>
                            <NavLink className={style.navbar_item} to='/'><li>Home</li></NavLink>
                            <Link to='about'
                                spy={true}
                                smooth={true}
                                duration={700}
                                className={style.navbar_item}>
                                <li>About Us</li></Link>
                            <a className={style.navbar_item} href='#'><li>Our Menu</li></a>
                            <a className={style.navbar_item} href='#'><li>Pages</li></a>
                            <a className={style.navbar_item} href='#'><li>Blog</li></a>
                            <a className={style.navbar_item} href='#'><li>Contact Us</li></a>
                        </ul>
                        <div className={style.navbar_icons}>
                            <a href='#'><img src={inst} alt='inst' /></a>
                            <a href='#'><img src={fb} alt='fb' /></a>
                            <a href='#'><img src={twitter} alt='twitter' /></a>
                            <a href='#'><img src={pinterest} alt='pinterest' /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header