import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reserveTable, selectAllHall } from "../../features/hall/hallSlice";
import CreditCard from './CreditCard';
import style from './ReservePage.module.scss';

const styleBox = {
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

const Hall = () => {
    const hall = useSelector(selectAllHall);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const renderedHall = hall.map((item, idx) => {
        return (
            <button
                key={item.id}
                onClick={() => {
                    if (!item.reserve) {
                        handleOpen();
                        dispatch(reserveTable);
                    } else {
                        alert('This table already reserved')
                    }
                }}
                className={item.reserve ? style.hall_not_reserved : style.hall_reserved}>{item.id}</button>
        )
    })

    return (
        <>
            <section className={style.hall}>
                <div className="container">
                    <h1>Hall</h1>
                    <div className={style.hall_item}>
                        {renderedHall}
                    </div>
                </div>
            </section>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styleBox}>
                        <div className={style.modal_reserve}>
                            <h2>Reservation Form</h2>
                            <TextField label='name' type='text' />
                            <TextField type='time' />
                            <TextField label='persons' type='number' />
                            <CreditCard />
                            <button type='button'>Confirm</button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}


export default Hall






