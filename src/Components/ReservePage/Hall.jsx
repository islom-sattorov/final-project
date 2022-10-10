import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllBoxStyle } from '../../features/boxStyle/boxStyleSlice';
import { removeReserveTable, reserveTable, selectAllHall } from "../../features/hall/hallSlice";
import { addNotification } from "../../features/notification/notificationSlice";
import HallModal from "./HallModal";
import style from './ReservePage.module.scss';


const Hall = () => {
    const hall = useSelector(selectAllHall);
    const boxStyle = useSelector(selectAllBoxStyle);
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
    const [creditYear, setCreditYear] = useState('');
    const [idElem, setIdElem] = useState(0);
    const [reserve, setReserve] = useState(true)

    const onNameChanged = e => setName(e.target.value);
    const onPersonChanged = e => setPerson(e.target.value);
    const onCreditYearChanged = e => setCreditYear(e.target.value)
    const onTimeChanged = e => setTime(e.target.value);
    const onCreditCardNameChanged = e => setCreditCardName(e.target.value);
    const onCreditCardNumberChanged = e => setCreditCardNumber(e.target.value);


    const onSaveBtnClicked = () => {
        if (name && person && time && idElem && reserve) {
            dispatch(reserveTable({ id: idElem, name, person, time, reserve }));
            dispatch(addNotification({ type: true, message: `You reserve table ${idElem} on ${time} o'clock ` }))
            handleClose();
            setName('');
            setPerson('');
            setTime('');
            setCreditYear('');
            setCreditCardName('');
            setCreditCardNumber('');
            setIdElem(0);
        } else {
            return
        }
    };

    const canSave =
        Boolean(name) &&
        Boolean(person <= 10) &&
        Boolean(time);


    const dragItem = useRef(null)

    const handleSort = (id, reserve) => {
        dispatch(reserveTable({ id: id, name: 'Guest', person: '2', time: 'Today', reserve }));
    }

    const renderedHall = hall.map((item, idx) => {
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
                    className={item.reserve ? style.hall_not_reserved : style.hall_reserved}>
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
            <section className={style.hall}>
                <div className="container">
                    <div className={style.hall_item}>
                        {renderedHall}
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


export default Hall






