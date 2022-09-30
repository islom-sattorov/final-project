import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATEUSER } from '../store/actions';
import styles from './Create.module.css'

const initialState = {
    name: '',
    surname: '',
    age: 0,
}

const CreateUser = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const addUser = () => {
        dispatch({type: CREATEUSER, payload: state});
        setState(initialState);
    }

    return (
        <div className={styles.container}> 
            <TextField type='text' placeholder='Name' name="name" value={state.name} onChange={handleChange}/>
            <TextField type='text' placeholder='Surname' name="surname" value={state.surname} onChange={handleChange}/>
            <TextField type='text' placeholder='Age' name="age" value={state.age} onChange={handleChange}/>
            <Button onClick={addUser} variant='contained'>Create</Button>
        </div>
    )
}

export default CreateUser;