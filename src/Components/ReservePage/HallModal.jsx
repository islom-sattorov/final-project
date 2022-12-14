import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { NumberFormatBase, PatternFormat, usePatternFormat } from "react-number-format";
import CreditCard from './CreditCard';
import mcIcon from './mc.png';
import MilliCard from './MilliCard';
import mirIcon from './mir.png';
import MirCard from './MirCard';
import milliIcon from "./ml.png";
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
    name,
    nameChange,
    timeChange,
    persons,
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
    const [card, setCard] = useState(() => 'Master');
    const [validation, setValidation] = useState({
        name: false,
        persons: false,
    })


    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={bxs}>
                <div className={style.modal_reserve}>
                    <h2>Reservation Form</h2>
                    <TextField
                        error={validation.name && name == ''}
                        helperText={validation.name && name === '' ? 'Required field' : ''}
                        onBlur={() => setValidation(prev => ({ ...prev, name: true }))}
                        onFocus={() => setValidation(prev => ({ ...prev, name: false }))}
                        onChange={nameChange}
                        label='Name'
                        type='text'
                        name='name'
                    />
                    <TextField onChange={timeChange} type='time' name='time' />
                    <TextField
                        error={validation.persons && persons == '' || persons > 10}
                        helperText={validation.persons && persons === '' ? 'Required field' : persons > 10 ? 'Persons need to be less than 10' : ''}
                        onBlur={() => setValidation(prev => ({ ...prev, persons: true }))}
                        onFocus={() => setValidation(prev => ({ ...prev, persons: false }))}
                        onChange={personChange} label='Persons' inputProps={{ min: 1, max: 10 }} type='number' name='person' />
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
                    <PatternFormat className={style.mask_input} displayType="input" value={creditNumber} name='creditCardNumber' format='#### #### #### ####' onChange={creditNumberChange} placeholder="Card Number" />
                    <CardExpiry className={style.mask_input} mask='_' allowEmptyFormatting displayType='input' name='creditYear' value={year} format='##/##' onChange={yearChange} />
                    <TextField className={style.mask_input} onChange={creditNameChange} label='Card owner' name='creditCardName' type='text' />
                    <button disabled={save} onClick={saveClicked} >Confirm</button>
                </div>
            </Box>
        </Modal>
    )

}
export default HallModal
