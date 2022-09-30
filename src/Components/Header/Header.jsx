import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.svg'
import { statusFalse, statusToggle } from '../../features/login/loginSlice'
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


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const onUserNameChanged = (e) => setUserName(e.target.value);
    const onPasswordChanged = (e) => setPassword(e.target.value);

    const onSubmitClicked = () => {
        if (userName == login.username && password == login.password) {
            dispatch(statusToggle())
            handleClose();
        } else {
            console.log('Error')
        }
    }

    return (
        <>
            <header className={style.header}>
                <div className="container">
                    <div className={style.header_flex}>
                        {/* <a className={style.header_phone} href="tel:123456789">Call - 123 456 789</a> */}
                        {/* <button
                            onClick={handleOpen}
                            onDoubleClick={() => {
                                dispatch(statusToggle())
                            }}
                            className={style.header_phone}>
                            {login.status ? 'Logout' : 'Login'}
                        </button> */}
                        {!login.status ?
                            <button
                                onClick={handleOpen}
                                className={style.header_phone}>Login</button> :
                            <button
                                className={style.header_phone}
                                onClick={() => {
                                    dispatch(statusFalse())
                                }}>Logout</button>
                        }
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
                            <NavLink className={style.navbar_item} to='/menu'><li>Our Menu</li></NavLink>
                            <a className={style.navbar_item} href='#'><li>Pages</li></a>
                            <NavLink className={style.navbar_item} to='/blog'><li>Blog</li></NavLink>
                            <a className={style.navbar_item} href='#'><li>Contact Us</li></a>
                        </ul>
                        <div className={style.navbar_icons}>
                            <a href='https://www.instagram.com' target='_blank'><img src={inst} alt='inst' /></a>
                            <a href='https://www.facebook.com/' target='_blank'><img src={fb} alt='fb' /></a>
                            <a href='https://twitter.com' target='_blank'><img src={twitter} alt='twitter' /></a>
                            <a href='https://www.pinterest.com/' target='_blank'><img src={pinterest} alt='pinterest' /></a>
                        </div>
                    </div>
                </div>
            </nav>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={boxStyle}>
                    <form onSubmit={() => { return false }} className={style.modal_form}>
                        <label htmlFor='username' className={style.modal_label}>UserName</label>
                        <TextField
                            type='text'
                            // value={content}
                            id="username"
                            label="Username"
                            name='username'
                            variant="outlined"
                            required
                            onChange={onUserNameChanged}
                        />
                        <label htmlFor='password'></label>
                        <TextField
                            type='password'
                            // value={content}
                            id="password"
                            name='password'
                            label="password"
                            variant="outlined"
                            required
                            onChange={onPasswordChanged}
                        />
                        <button type='button' onClick={onSubmitClicked} className={style.modal_btn}>Send</button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default Header