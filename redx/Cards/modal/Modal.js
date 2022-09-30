import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { EDITCARD } from '../../store/actions';



export default function EditModal({ open, setOpen, selectItem }) {
    const cardsList = useSelector(state => state.cards.cardsList);
    const [state, setState] = useState(null)
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = () => {
        let newCardsList = cardsList.map((card) => {
            if (card.id === state.id) {
                return state;
            }

            return card;
        })
        dispatch({type: EDITCARD, payload: newCardsList})
        setOpen(false)
    };


    useEffect(() => {
        setState(selectItem)
    }, [open])


    return (
        <div>
            {state !== null &&
                <Dialog fullWidth open={open} onClose={handleClose}>
                    <>
                        <DialogTitle>Edit User</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="First Name"
                                type="text"
                                fullWidth
                                value={state.first_name}
                                onChange={(e) => setState({...state, first_name: e.target.value})}
                                variant="standard"
                                />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Last Name"
                                type="text"
                                fullWidth
                                value={state.last_name}
                                onChange={(e) => setState({...state, last_name: e.target.value})}
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleChange}>Confirm</Button>
                        </DialogActions>
                    </>

                </Dialog>
            }

        </div>
    );
}
