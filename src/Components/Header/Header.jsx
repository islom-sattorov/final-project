import logo from '../../assets/logo1.png'
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_flex}>
                    <div className={styles.header_logo_flex}>
                        <img className={styles.png} src={logo} />
                        <h1 className={styles.header_logo}>Trust Wallet</h1>
                    </div>
                    <nav className={styles.header_navbar}>
                        <ul className={styles.navbar_item}>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>Home</li></a>
                        </ul>
                    </nav>
                    <button className={styles.header_login}>Login</button>
                </div>
            </div>
        </header>
    )
}

export default Header