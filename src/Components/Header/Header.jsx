import Alert from '@mui/material/Alert'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { statusFalse, statusToggle } from '../../features/login/loginSlice'
import style from './Header.module.scss'
import HeaderModal from './HeaderModal'
import HeaderNavBar from './HeaderNavBar'

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
    const [showAlert, setShowAlert] = useState(true);

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const onUserNameChanged = (e) => setUserName(e.target.value);
    const onPasswordChanged = (e) => setPassword(e.target.value);

    const onSubmitClicked = () => {
        if (userName.trim() == login.username && password.trim() == login.password) {
            dispatch(statusToggle())
            handleClose();
            const timeId = setTimeout(() => {
                setShowAlert(false)
            }, 3000)
            return () => {
                clearTimeout(timeId)
            }
        } else {
            handleClose();
        }
    }

    const loginButtons = !login.status ?
        <button
            onClick={handleOpen}
            className={style.header_phone}>Login</button> :
        <button
            className={style.header_phone}
            onClick={() => {
                dispatch(statusFalse())
            }}>Logout</button>

    const alertButtons = !login.status && showAlert ?
        <></> : login.status && !showAlert ?
            <></> : login.status && showAlert ?
                <div className={style.alert_success}>
                    <Alert severity='success'>Success</Alert>
                </div> :
                <></>

    return (
        <>
            {alertButtons}
            <header className={style.header}>
                <div className="container">
                    <div className={style.header_flex}>
                        {loginButtons}
                        <img className={style.header_logo} src={logo} alt="logo" />
                        <Link to='/reservation' className={style.header_btn}>Reservation</Link>
                    </div>
                </div>
            </header>
            <HeaderNavBar />
            <HeaderModal
                open={open}
                close={handleClose}
                bxs={boxStyle}
                userChange={onUserNameChanged}
                passwordChange={onPasswordChanged}
                submit={onSubmitClicked}
            />
        </>
    )
}

export default Header