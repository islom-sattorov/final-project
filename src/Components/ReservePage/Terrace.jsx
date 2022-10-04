import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllBoxStyle } from "../../features/boxStyle/boxStyleSlice";
import { reserveTable, selectAllTerrace } from "../../features/terrace/terraceSlice";
import HallModal from "./HallModal";
import style from './ReservePage.module.scss';


const Terrace = () => {
    const boxStyle = useSelector(selectAllBoxStyle);
    const terrace = useSelector(selectAllTerrace);
    const dispatch = useDispatch();
    const login = useSelector((state) => state.login.loginStatus.status);

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [name, setName] = useState('');
    const [person, setPerson] = useState('');
    const [time, setTime] = useState('');
    const [creditCardName, setCreditCardName] = useState('');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [idElem, setIdElem] = useState(0);
    const [res, setRes] = useState(true);


    const onNameChanged = e => setName(e.target.value);
    const onPersonChanged = e => setPerson(e.target.value);
    const onTimeChanged = e => setTime(e.target.value);
    const onCreditCardNameChanged = e => setCreditCardName(e.target.value);
    const onCreditCardNumberChanged = e => setCreditCardNumber(e.target.value);

    const canSave =
        Boolean(name) &&
        Boolean(person) &&
        Boolean(time);

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

    const renderedTerrace = terrace.map((item, idx) => {
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
                className={item.reserve ? style.terrace_not_reserved : style.terrace_reserved}>{item.id}</button>
        )
    })

    return (
        <>
            <section className={style.terrace}>
                <div className="container">
                    <div className={style.terrace_grid}>
                        {renderedTerrace}
                    </div>
                </div>
            </section>
            <HallModal
                open={open}
                close={handleClose}
                bxs={boxStyle}
                nameChange={onNameChanged}
                timeChange={onTimeChanged}
                personChange={onPersonChanged}
                creditName={creditCardName}
                creditNumber={creditCardNumber}
                creditNameChange={onCreditCardNameChanged}
                creditNumberChange={onCreditCardNumberChanged}
                save={!canSave}
                saveClicked={onSaveBtnClicked}
            />
        </>
    )
}

export default Terrace