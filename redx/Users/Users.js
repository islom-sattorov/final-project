import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADDFAVORITES, DECREMENT } from "../store/actions";
import styles from './User.module.css'

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.users);
    const [findUsers, setFindUsers] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        if (!value.trim()) {
            setFindUsers(users);
            return;
        } 

        setFindUsers(users.filter((item) => item.name.toUpperCase().includes(value.toUpperCase())));
        return
        
    }, [value])

    return (
        <div className={styles.container}>
            <div >Users</div>
            <Box mt={2}>
                <TextField label='Search' value={value} onChange={(e) => setValue(e.target.value)} />
            </Box>
            {users.length > 0 ?
                <div className={styles.cards_container}>
                    {findUsers.map((user, idx) =>
                        <div className={styles.card} key={idx}>
                            <div>{user.name}</div>
                            <div>{user.surname}</div>
                            <div>{user.age}</div>
                            <Button variant="contained" onClick={() => dispatch({ type: ADDFAVORITES, payload: user })}>Add favorite</Button>
                        </div>
                    )}
                </div>
                :
                null
            }
        </div>
    )
}

export default Users;