import chip from './chip.png';
import milliIcon from './ml.png';
import style from './ReservePage.module.scss';
import wifi from './wifi.svg';

const MilliCard = ({ number, name, year }) => {
    return (
        <section className={style.card_milli}>
            <div className='container'>
                <div className={style.card_flex}>
                    <div className={style.card_flex_left}>
                        <h2 className={style.card_main_text}>Credit Card</h2>
                    </div>
                    <div className={style.card_flex_right}>
                        <img className={style.wifi_milli} src={wifi} alt='wifi' />
                        <img className={style.chip} src={chip} alt='chip' />
                    </div>
                </div>
                {/* Card bottom */}
                <div className={style.card_flex_bottom}>
                    <div className={style.card_info}>
                        <p className={style.card_number}>{number}</p>
                        <p className={style.card_number}>{year}</p>
                        <p className={style.card_name}>{name}</p>
                    </div>
                    <div className={style.card_icon}>
                        <img style={{ width: '50px' }} src={milliIcon} alt='masterCard' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MilliCard