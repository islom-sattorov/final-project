import style from './Footer.module.scss';

const FooterMain = () => {
    return (
        <div className={style.footer_main_container}>
            <div className={style.footer_main_contact}>
                <span className={style.footer_main_span}>contact</span>
                <h3 className={style.footer_main_title}>5 Rue Dalou, 75015 Paris</h3>
                <a className={style.footer_main_link} href='tel: +123456789'>+123456789</a>
                <br />
                <a className={style.footer_main_link} href='mailto: slmsttrv@gmail.com'>slmsttrv@gmail.com</a>
            </div>
            <div>
                <p className={style.footer_main_subtitle}>Get news & offers events.</p>
                <br />
                <input type='text' placeholder='Email' />
            </div>
            <div className={style.footer_main_hours}>
                <span className={style.footer_main_span}>Working Hours</span>
                <p><span className={style.footer_main_day}>Mon-Fri:</span> 7:00am - 6:00pm</p>
                <p><span className={style.footer_main_day}>Sat:</span> 7:00am - 6:00pm</p>
                <p><span className={style.footer_main_day}>Sun:</span> 8:00am - 6:00pm</p>
            </div>
        </div>
    )
}

export default FooterMain;