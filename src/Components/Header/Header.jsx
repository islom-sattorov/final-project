import Alert from '@mui/material/Alert'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { selectAllBoxStyle } from '../../features/boxStyle/boxStyleSlice'
import { statusFalse, statusToggle } from '../../features/login/loginSlice'
import style from './Header.module.scss'
import HeaderModal from './HeaderModal'
import HeaderNavBar from './HeaderNavBar'

const Header = () => {
    const login = useSelector((state) => state.login.loginStatus);
    const boxStyle = useSelector(selectAllBoxStyle);
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(true);

    const [newUserName, setNewUserName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [obj, setObj] = useState('');
    const [localState, setLocalState] = useState('');

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const onUserNameChanged = e => setUserName(e.target.value);
    const onPasswordChanged = e => setPassword(e.target.value);

    const onNewUserNameChanged = e => setNewUserName(e.target.value);
    const onNewPasswordChanged = e => setNewPassword(e.target.value);


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
        } else if (userName.trim() == localState.name
            && password.trim() == localState.password) {
            dispatch(statusToggle())
            handleClose();
        } else {
            handleClose();
        }
    }

    if (obj) {
        window.localStorage.setItem('obj', JSON.stringify(obj))
    }


    const onNewSubmitClicked = () => {
        setObj({
            name: newUserName,
            password: newPassword
        })
        handleClose();
        setNewUserName('');
        setNewPassword('');
    }


    const loginButtons = !login.status ?
        <button
            onClick={handleOpen}
            className={style.header_phone}>Login</button> :
        <button
            className={style.header_phone}
            onClick={() => {
                dispatch(statusFalse())
            }}>Logout</button>;

    const alertButtons = !login.status && showAlert ?
        <></> : login.status && !showAlert ?
            <></> : login.status && showAlert ?
                <div className={style.alert_success}>
                    <Alert severity='success'>Success</Alert>
                </div> :
                <></>;


    useEffect(() => {
        setLocalState(JSON.parse(localStorage.getItem('obj')))
    }, [newUserName, newPassword])


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
                newUserChange={onNewUserNameChanged}
                newPasswordChange={onNewPasswordChanged}
                newSubmit={onNewSubmitClicked}
            />
        </>
    )
}

export default Header