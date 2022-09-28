import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
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


const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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
            <Modal
                // open={login}
                // onClose={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={boxStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default Header