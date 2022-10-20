import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pic from '../../assets/form_pic.png';
import { reserveTable, selectAllHall } from "../../features/hall/hallSlice";
import { addNotification } from '../../features/notification/notificationSlice';
import style from './Form.module.scss';


const Form = () => {
    const hall = useSelector(selectAllHall);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(
        { name: '', persons: '', time: '', reserve: true }
    )


    const onReserveFormChanged = e => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }


    const onSaveBtnClicked = () => {
        const idElement = hall.find(item => {
            return item.reserve == false
        })

        if (formData.name && formData.persons <= 10 && formData.time && idElement && formData.reserve) {
            dispatch(reserveTable({
                id: idElement.id,
                name: formData.name,
                person: formData.persons,
                time: formData.time,
                reserve: formData.reserve
            }));
            dispatch(addNotification({ type: true, message: `Your reserved table is ${idElement.id}` }))
            setFormData({ name: '', persons: '', time: '', })
        } else if (formData.persons > 10) {
            dispatch(addNotification({ type: false, message: `Error: Persons greater than 10` }))
        } else {
            dispatch(addNotification({ type: false, message: `Error check your forms` }))
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
                                    value={formData.name}
                                    onChange={onReserveFormChanged}
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
                                    value={formData.persons}
                                    required
                                    onChange={onReserveFormChanged}
                                    placeholder='Persons' />
                                <input
                                    type='time'
                                    name='time'
                                    value={formData.time}
                                    onChange={onReserveFormChanged}
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