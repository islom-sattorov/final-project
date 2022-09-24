import logo from '../../assets/logo.svg'
import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.header_flex}>
                    <a className={style.header_phone} href="tel:123456789">Call - 123 456 789</a>
                    <img className={style.header_logo} src={logo} alt="logo" />
                    <button className={style.header_btn}>Reservation</button>
                </div>
            </div>
        </header>
    )
}

export default Header