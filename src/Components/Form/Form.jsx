import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveTable, selectAllHall } from "../../features/hall/hallSlice";
import { addNotification } from '../../features/notification/notificationSlice';
import style from './Form.module.scss';
import pic from './pic.png';


const Form = () => {
    const hall = useSelector(selectAllHall);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [person, setPerson] = useState('');
    const [time, setTime] = useState('');
    const [reserve, setReserve] = useState(true)

    const onNameChanged = e => setName(e.target.value);
    const onPersonChanged = e => setPerson(e.target.value);
    const onTimeChanged = e => setTime(e.target.value)

    const onSaveBtnClicked = () => {
        const idElement = hall.find(item => {
            return item.reserve == false
        })

        if (name, person, time, idElement, reserve) {
            dispatch(reserveTable({ id: idElement.id, name, person, time, reserve }));
            dispatch(addNotification({ type: true, message: `Your reserved table is ${idElement.id}` }))
            setName('');
            setPerson('');
            setTime('');
        } else {
            return
        }
    }

    return (
        <section
            style={{ backgroundImage: `url(${pic})` }}
            className={style.section}>
            <div className='container'>
                <div className={style.section_flex}>
                    <span className={style.section_span}>reservation</span>
                    <h2 className={style.section_title}>Book Your Table</h2>
                    <div className={style.section_form}>
                        <form>
                            <div className={style.section_input_one}>
                                <input
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={onNameChanged}
                                    placeholder='Name'
                                    required
                                />
                            </div>
                            <div className={style.section_input_two}>
                                <input
                                    type='number'
                                    name='persons'
                                    min={1}
                                    max={10}
                                    value={person}
                                    // onKeyPress={(e) => {
                                    //     if (!/[0 - 9]/.test(e.key)) {
                                    //         e.preventDefault();
                                    //     }
                                    // }}
                                    required
                                    onChange={onPersonChanged}
                                    placeholder='Persons' />
                                <input
                                    type='time'
                                    name='time'
                                    value={time}
                                    onChange={onTimeChanged}
                                    placeholder='Time'
                                    required
                                />
                            </div>
                        </form>
                    </div>
                    <button onClick={onSaveBtnClicked} className={style.section_btn}>Book A Table</button>
                </div>
            </div>
        </section>
    )
}

export default Form