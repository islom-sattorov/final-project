import chip from './chip.png';
import milli from './milli.png';
import style from './ReservePage.module.scss';
import wifi from './wifi.svg';

const MilliCard = ({ number, name, year }) => {
    return (
        <section className={style.card_milli}>
            <div className='container'>
                <h2 className={style.card_main_text_milli}>Корти Милли</h2>
                <div className={style.card_top}>
                    <img className={style.wifi} src={wifi} alt='wifi' />
                </div>
                <div className={style.card_center}>
                    <img className={style.card_chip} src={chip} alt='chip' />
                </div>
                <div className={style.card_bottom}>
                    <div className={style.card_bottom_left}>
                        <div className={style.card_number}>{number}</div>
                        <div>{year}</div>
                        <div>{name}</div>
                    </div>
                    <div className={style.card_bottom_right}>
                        <img style={{ width: '60px' }} src={milli} alt='masterCard' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MilliCard