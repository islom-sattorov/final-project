import chip from './chip.png';
import mc from './mc.png';
import style from './ReservePage.module.scss';
import wifi from './wifi.svg';

const CreditCard = ({ name, number }) => {
    const spaceAfterFour = String(number).replace(/.{4}/g, '$&')

    return (
        <section className={style.card}>
            <div className='container'>
                <h2 className={style.card_main_textl}>Credit Card</h2>
                <div className={style.card_top}>
                    <img src={wifi} alt='wifi' />
                </div>
                <div className={style.card_center}>
                    <img className={style.card_chip} src={chip} alt='chip' />
                </div>
                <div className={style.card_bottom}>
                    <div className={style.card_bottom_left}>
                        <div className={style.card_number}>{spaceAfterFour}</div>
                        <div>12/25</div>
                        <div>{name}</div>
                    </div>
                    <div className={style.card_bottom_right}>
                        <img style={{ width: '80px' }} src={mc} alt='masterCard' />
                        {/* <span >debit</span> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreditCard