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

    // Refactoring Login
    const [loginForm, setLoginForm] = useState({
        userName: '', userPassword: '',
    });
    const [registrationForm, setRegistrationForm] = useState({
        newUserName: '', newUserPassword: '',
    })
    const [obj, setObj] = useState('');
    const [localState, setLocalState] = useState('');
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setRegistrationForm({ newUserName: '', newUserPassword: '', })
        setOpen(false)
    }

    const loginChange = e => {
        setLoginForm(prevLoginForm => {
            return {
                ...prevLoginForm,
                [e.target.name]: e.target.value
            }
        })
    }
    const registrationChange = e => {
        setRegistrationForm(prevRegistrationForm => {
            return {
                ...prevRegistrationForm,
                [e.target.name]: e.target.value
            }
        })
    }


    const onSubmitClicked = () => {
        if (loginForm.userName.trim() == login.username && loginForm.userPassword.trim() == login.password) {
            dispatch(statusToggle())
            handleClose();
            dispatch(addNotification({ type: true, message: `Welcome back ${login.username}` }))
        } else if (localState != null && loginForm.userName.trim() == localState.name
            && loginForm.userPassword.trim() == localState.password) {
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



    const onRegistrationSubmitClicked = () => {
        if (registrationForm.newUserName &&
            registrationForm.newUserPassword &&
            registrationForm.newUserName.length >= 4 &&
            registrationForm.newUserPassword.length >= 4) {
            setObj({
                name: registrationForm.newUserName,
                password: registrationForm.newUserPassword
            })
            handleClose();
            dispatch(addNotification({ type: true, message: 'Registration was successful' }))
            setRegistrationForm({ newUserName: '', newUserPassword: '', })
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
        if (JSON.parse(localStorage.getItem('login'))) {
            dispatch(statusToggle())
        } else {
            dispatch(statusFalse())
        }
    }, [])


    useEffect(() => {
        setLocalState(JSON.parse(localStorage.getItem('obj')))
    }, [registrationForm])


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
                userChange={loginChange}
                passwordChange={loginChange}
                submit={onSubmitClicked}
                newUser={registrationForm.newUserName}
                newUserChange={registrationChange}
                newPassword={registrationForm.newUserPassword}
                newPasswordChange={registrationChange}
                newSubmit={onRegistrationSubmitClicked}
                valueLoginUserName={loginForm.userName}
                valueLoginUserPassword={loginForm.userPassword}
            />
        </>
    )
}

export default Header