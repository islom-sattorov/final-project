import style from './Form.module.scss';
import pic from './pic.png';

const Form = () => {
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
                                <input type='text' name='name' placeholder='Name' />
                                <input type='email' name='email' placeholder='Email' />
                            </div>
                            <div className={style.section_input_two}>
                                <input type='number' name='persons' placeholder='Persons' />
                                <input type='number' name='timing' placeholder='Timing' />
                                <input type='date' name='date' placeholder='Date' />
                            </div>
                        </form>
                    </div>
                    <button className={style.section_btn}>Book A Table</button>
                </div>
            </div>
        </section>
    )
}

export default Form