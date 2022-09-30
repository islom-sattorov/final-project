import { Button } from "@mui/material";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { LOGIN, LOGOUT } from "../store/actions";
import './Header.css'
const Header = () => {
    const isAuth = useSelector((state) => state.login.isAuth);
    const dispatch = useDispatch();


    return (
        <div className="header">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/create-user'>Register User</NavLink>
            <NavLink to='/products'>Favorites</NavLink>
            <NavLink to='/cards'>Cards</NavLink>
            {!isAuth ? <Button onClick={() => {dispatch({ type: LOGIN })}}>LOGIN</Button> : <Button onClick={() => dispatch({type: LOGOUT})}>LOGOUT</Button>}
            {/* <Button onClick={() => setBool(!bool)} variant="contained">{bool ? 'InActive' : 'Active'}</Button> */}
        </div>
    )
}

export default Header;