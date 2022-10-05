import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { NumberFormatBase, PatternFormat, usePatternFormat } from "react-number-format";
import CreditCard from './CreditCard';
import style from './ReservePage.module.scss';


function CardExpiry(props) {
    const { format, ...rest } = usePatternFormat({ ...props, format: "##/##" });

    const _format = (val) => {
        let month = val.substring(0, 2);
        const year = val.substring(2, 4);

        if (month.length === 1 && month[0] > 1) {
            month = `0${month[0]}`;
        } else if (month.length === 2) {
            // set the lower and upper boundary
            if (Number(month) === 0) {
                month = `01`;
            } else if (Number(month) > 12) {
                month = "12";
            }
        }

        return format(`${month}${year}`);
    };

    return <NumberFormatBase format={_format} {...rest} />;
}






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
    year,
    yearChange,
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
                    <TextField onChange={personChange} label='persons' inputProps={{ min: 1, max: 10 }} type='number' />
                    <CreditCard
                        name={creditName}
                        number={creditNumber}
                        year={year}
                    />
                    <PatternFormat displayType="input" value={creditNumber} format='#### #### #### ####' onChange={creditNumberChange} />
                    <CardExpiry mask='_' allowEmptyFormatting displayType='input' value={year} format='##/##' onChange={yearChange} />
                    <TextField onChange={creditNameChange} label='Card owner' type='text' />
                    <button disabled={save} onClick={saveClicked} type='button'>Confirm</button>
                </div>
            </Box>
        </Modal>
    )
}

export default HallModal