import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CreditCard from './CreditCard';
import style from './ReservePage.module.scss';

const HallModal = ({
    open,
    close,
    bxs,
    nameChange,
    timeChange,
    personChange,
    creditName,
    creditNumber,
    creditNameChange,
    creditNumberChange,
    save,
    saveClicked,
}) => {
    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={bxs}>
                <div className={style.modal_reserve}>
                    <h2>Reservation Form</h2>
                    <TextField onChange={nameChange} label='name' type='text' />
                    <TextField onChange={timeChange} type='time' />
                    <TextField onChange={personChange} label='persons' type='number' />
                    <CreditCard
                        name={creditName}
                        number={creditNumber}
                    />
                    <TextField onChange={creditNameChange} label='Credit card' type='number' />
                    <TextField onChange={creditNumberChange} label='Card owner' type='text' />
                    <button disabled={save} onClick={saveClicked} type='button'>Confirm</button>
                </div>
            </Box>
        </Modal>
    )
}

export default HallModal