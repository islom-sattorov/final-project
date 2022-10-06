import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { NumberFormatBase, PatternFormat, usePatternFormat } from "react-number-format";
import CreditCard from './CreditCard';
import mcIcon from './mc.png';
import milliIcon from './milli.png';
import MilliCard from "./MilliCard";
import mirIcon from './mir.png';
import MirCard from './MirCard';
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
    const [card, setCard] = useState('Master');

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
                    {card == 'Master' ?
                        <CreditCard
                            name={creditName}
                            number={creditNumber}
                            year={year} /> : card == 'Mir' ?
                            <MirCard
                                name={creditName}
                                number={creditNumber}
                                year={year} /> : card == 'Milli' ?
                                <MilliCard
                                    name={creditName}
                                    number={creditNumber}
                                    year={year}
                                /> : <></>
                    }
                    <div className={style.card_flex}>
                        <button onClick={() => setCard('Mir')}><img className={style.icon} src={mirIcon} /></button>
                        <button onClick={() => setCard('Master')}><img className={style.icon} src={mcIcon} /></button>
                        <button onClick={() => setCard('Milli')}><img className={style.icon} src={milliIcon} /></button>
                    </div>
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