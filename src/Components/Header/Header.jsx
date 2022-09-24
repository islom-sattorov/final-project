import logo from '../../assets/logo.svg'
import fb from './fb.png'
import style from './Header.module.scss'
import inst from './inst.png'
import pinterest from './pinterest.png'
import twitter from './twitter.png'

const Header = () => {
    return (
        <>
            <header className={style.header}>
                <div className="container">
                    <div className={style.header_flex}>
                        <a className={style.header_phone} href="tel:123456789">Call - 123 456 789</a>
                        <img className={style.header_logo} src={logo} alt="logo" />
                        <button className={style.header_btn}>Reservation</button>
                    </div>
                </div>
            </header>
            <nav className={style.navbar}>
                <div className='container'>
                    <div className={style.navbar_flex}>
                        <ul className={style.navbar_items}>
                            <a className={style.navbar_item} href='#'><li>Home</li></a>
                            <a className={style.navbar_item} href='#'><li>About Us</li></a>
                            <a className={style.navbar_item} href='#'><li>Our Menu</li></a>
                            <a className={style.navbar_item} href='#'><li>Pages</li></a>
                            <a className={style.navbar_item} href='#'><li>Blog</li></a>
                            <a className={style.navbar_item} href='#'><li>Contact Us</li></a>
                        </ul>
                        <div className={style.navbar_icons}>
                            <img src={inst} alt='inst' />
                            <img src={fb} alt='fb' />
                            <img src={twitter} alt='twitter' />
                            <img src={pinterest} alt='pinterest' />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header