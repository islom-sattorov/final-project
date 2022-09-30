import { Button, Switch } from "@mui/material";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT,DECREMENT, LOGIN, INCREMENTVALUE } from "../store/actions";

const Home = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div> Home Page!</div>
        </>
    )
}

export default Home;