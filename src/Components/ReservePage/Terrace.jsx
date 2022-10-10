import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllBoxStyle } from "../../features/boxStyle/boxStyleSlice";
import { addNotification } from "../../features/notification/notificationSlice";
import { removeReserveTable, reserveTable, selectAllTerrace } from "../../features/terrace/terraceSlice";
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
    const [creditYear, setCreditYear] = useState('');
    const onCreditYearChanged = e => setCreditYear(e.target.value)
    const [res, setRes] = useState(true);


    const onNameChanged = e => setName(e.target.value);
    const onPersonChanged = e => setPerson(e.target.value);
    const onTimeChanged = e => setTime(e.target.value);
    const onCreditCardNameChanged = e => setCreditCardName(e.target.value);
    const onCreditCardNumberChanged = e => setCreditCardNumber(e.target.value);

    const canSave =
        Boolean(name) &&
        Boolean(person <= 10) &&
        Boolean(time);

    const onSaveBtnClicked = () => {
        if (name, person, time, creditCardName, creditCardNumber, idElem, res) {
            dispatch(reserveTable({ id: idElem, name, person, time, reserve: res }));
            dispatch(addNotification({ type: true, message: `You reserve ${idElem} table on ${time} o'clock ` }))
            handleClose();
            setName('');
            setPerson('');
            setTime('');
            setIdElem(0);
        } else {
            return
        }
    };

    const dragItem = useRef(null)

    const handleSort = (id, reserve) => {
        dispatch(reserveTable({ id: id, name: 'Guest', person: '2', time: 'Today', reserve }));
    }


    const renderedTerrace = terrace.map((item, idx) => {
        return (
            <div className={style.tees} key={item.id}>
                <button
                    draggable={login ? true : false}
                    key={item.id}
                    onClick={() => {
                        if (!item.reserve) {
                            handleOpen();
                            setIdElem(idx + 1);
                        } else {
                            // handleOpen();
                            login && item.reserve ?
                                dispatch(addNotification({
                                    type: true, message: `
                                Name: ${item.name}; 
                                Persons: ${item.persons}; 
                                Time: ${item.time};`
                                }))
                                :
                                dispatch(addNotification({ type: false, message: `This table already reserved` }))
                        }
                    }}
                    onDragEnter={() => {
                        if (login) {
                            dragItem.current = idx + 1
                        } else {
                            return
                        }
                    }}
                    onDragEnd={() => {
                        if (login) {
                            if (item.reserve === true) {
                                handleSort(dragItem.current, true)
                                dispatch(addNotification({ type: true, message: `Table ${dragItem.current} reserved` }))
                            } else {
                                dispatch(addNotification({ type: false, message: `Please choose reserved table to speed reserve` }))
                            }
                        } else {
                            return
                        }
                    }
                    }
                    onDragOver={(e) => e.preventDefault()}
                    className={item.reserve ? style.terrace_not_reserved : style.terrace_reserved}>
                    {item.id}</button>
                {login && item.reserve === true ?
                    <button
                        className={style.remove_reserve_btn}
                        onClick={() => {
                            if (item.reserve && login) {
                                dispatch(removeReserveTable(idx + 1))
                                dispatch(addNotification({ type: true, message: `You removed reserved table` }))
                            }
                        }}
                    >Remove Reserve</button> : <></>}
            </div>
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
                name={name}
                nameChange={onNameChanged}
                timeChange={onTimeChanged}
                persons={person}
                personChange={onPersonChanged}
                creditName={creditCardName}
                creditNumber={creditCardNumber}
                creditNameChange={onCreditCardNameChanged}
                creditNumberChange={onCreditCardNumberChanged}
                save={!canSave}
                saveClicked={onSaveBtnClicked}
                year={creditYear}
                yearChange={onCreditYearChanged}
            />
        </>
    )
}

export default Terrace