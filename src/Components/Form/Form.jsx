import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllHall } from "../../features/hall/hallSlice";
import style from './Form.module.scss';
import pic from './pic.png';


const Form = () => {
    const hall = useSelector(selectAllHall);

    const [name, setName] = useState('');
    const [person, setPerson] = useState('');
    const [time, setTime] = useState('');

    const onNameChanged = e => setName(e.target.value);
    const onPersonChanged = e => setPerson(e.target.value);
    const onTimeChanged = e => setTime(e.target.value)

    const onSaveBtnClicked = () => {
        console.log(1)
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
                                    onChange={onNameChanged}
                                    placeholder='Name' />
                            </div>
                            <div className={style.section_input_two}>
                                <input
                                    type='number'
                                    name='persons'
                                    onChange={onPersonChanged}
                                    placeholder='Persons' />
                                <input
                                    type='number'
                                    name='time'
                                    onChange={onTimeChanged}
                                    placeholder='Timing' />
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