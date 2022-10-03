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
    const login = useSelector((state) => state.login.loginStatus.status);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState('');
    const [person, setPerson] = useState('');
    const [time, setTime] = useState('');
    const [creditCardName, setCreditCardName] = useState('')
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [idElem, setIdElem] = useState(0);
    const [res, setRes] = useState(true)

    const onNameChanged = e => setName(e.target.value);
    const onPersonChanged = e => setPerson(e.target.value);
    const onTimeChanged = e => setTime(e.target.value);
    const onCreditCardNameChanged = e => setCreditCardName(e.target.value);
    const onCreditCardNumberChanged = e => setCreditCardNumber(e.target.value);

    const onSaveBtnClicked = () => {
        if (name, person, time, creditCardName, creditCardNumber, idElem, res) {
            dispatch(reserveTable({ id: idElem, name, person, time, reserve: res }));
            handleClose();
            setName('');
            setPerson('');
            setTime('');
            setIdElem(0);
        } else {
            return
        }
    };

    const canSave =
        Boolean(name) &&
        Boolean(person) &&
        Boolean(time) &&
        Boolean(creditCardName) &&
        Boolean(creditCardNumber) &&
        Boolean(idElem)
    Boolean(res);

    const renderedHall = hall.map((item, idx) => {
        return (
            <button
                key={item.id}
                onClick={() => {
                    if (!item.reserve) {
                        handleOpen();
                        setIdElem(idx + 1);
                    } else {
                        login && item.reserve ?
                            alert(
                                `Name: ${item.name}
                                 Persons: ${item.persons}
                                 Time:  ${item.time}`
                            ) :
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
                            <TextField onChange={onNameChanged} label='name' type='text' />
                            <TextField onChange={onTimeChanged} type='time' />
                            <TextField onChange={onPersonChanged} label='persons' type='number' />
                            <CreditCard
                                name={creditCardName}
                                number={creditCardNumber}
                            />
                            <TextField onChange={onCreditCardNameChanged} label='Credit card' type='number' />
                            <TextField onChange={onCreditCardNumberChanged} label='Card owner' type='text' />
                            <button disabled={!canSave} onClick={onSaveBtnClicked} type='button'>Confirm</button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}


export default Hall






