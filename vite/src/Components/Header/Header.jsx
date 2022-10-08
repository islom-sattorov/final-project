import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { selectAllBoxStyle } from '../../features/boxStyle/boxStyleSlice'
import { statusFalse, statusToggle } from '../../features/login/loginSlice'
import { addNotification } from '../../features/notification/notificationSlice'
import style from './Header.module.scss'
import HeaderModal from './HeaderModal'
import HeaderNavBar from './HeaderNavBar'

const Header = () => {
    const login = useSelector((state) => state.login.loginStatus);
    const boxStyle = useSelector(selectAllBoxStyle);
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [newUserName, setNewUserName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [obj, setObj] = useState('');
    const [localState, setLocalState] = useState('');

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setNewUserName('');
        setNewPassword('');
        setOpen(false)
    }




    const onUserNameChanged = e => setUserName(e.target.value);
    const onPasswordChanged = e => setPassword(e.target.value);

    const onNewUserNameChanged = e => setNewUserName(e.target.value);
    const onNewPasswordChanged = e => setNewPassword(e.target.value);

    const onSubmitClicked = () => {
        if (userName.trim() == login.username && password.trim() == login.password) {
            dispatch(statusToggle())
            handleClose();
            dispatch(addNotification({ type: true, message: `Welcome back ${login.username}` }))
        } else if (localState != null && userName.trim() == localState.name
            && password.trim() == localState.password) {
            dispatch(statusToggle())
            dispatch(addNotification({ type: true, message: 'Login Success' }))
            handleClose();
            return
        } else {
            dispatch(addNotification({ type: false, message: `This user doesn't exist` }))
            handleClose();
            return
        }
    }

    if (obj) {
        window.localStorage.setItem('obj', JSON.stringify(obj))
    }



    const onNewSubmitClicked = () => {
        if (newUserName && newPassword && newUserName.length >= 4 && newPassword.length >= 4) {
            setObj({
                name: newUserName,
                password: newPassword
            })
            handleClose();
            dispatch(addNotification({ type: true, message: 'Registration was successful' }))
            setNewUserName('');
            setNewPassword('');
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
                dispatch(addNotification({ type: false, message: 'You logout from your account' }))
            }}>Logout</button>;


    useEffect(() => {
        setLocalState(JSON.parse(localStorage.getItem('obj')))
    }, [newUserName, newPassword])


    useEffect(() => {
        if (JSON.parse(localStorage.getItem('login'))) {
            dispatch(statusToggle())
        } else {
            dispatch(statusFalse())
        }
    }, [])

    useEffect(() => {
        if (login.status == true) {
            window.localStorage.setItem('login', JSON.stringify(true))
        } else if (login.status == false) {
            window.localStorage.setItem('login', JSON.stringify(false))
        }
    }, [login.status])




    return (
        <>
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
                newUser={newUserName}
                newUserChange={onNewUserNameChanged}
                newPassword={newPassword}
                newPasswordChange={onNewPasswordChanged}
                newSubmit={onNewSubmitClicked}
            />
        </>
    )
}

export default Header