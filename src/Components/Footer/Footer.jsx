import logo from '../../assets/logo.svg';
import fb from '../Header/fb.svg';
import inst from '../Header/inst.svg';
import pinterest from '../Header/pinterest.svg';
import twitter from '../Header/twitter.svg';
import style from './Footer.module.scss';

const Footer = () => {
    return (
        <footer id='footer' className={style.footer}>
            <div className='container'>
                <div className={style.footer_flex}>
                    <span className={style.footer_span}>#28Monkeys</span>
                    <img src={logo} className={style.footer_pic} alt='logo' />
                    <div className={style.footer_icons}>
                        <a href='https://www.instagram.com' target='_blank'><img src={inst} alt='inst' /></a>
                        <a href='https://www.facebook.com/' target='_blank'><img src={fb} alt='fb' /></a>
                        <a href='https://twitter.com' target='_blank'><img src={twitter} alt='twitter' /></a>
                        <a href='https://www.pinterest.com/' target='_blank'><img src={pinterest} alt='pinterest' /></a>
                    </div>
                </div>
                <FooterMain />
                <FooterBot />
            </div>
        </footer>
    )
}

export default Footer;

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

const FooterBot = () => {
    return (
        <div className={style.footer_bot_container}>
            <div className={style.footer_bot_start}>
                <span>© Copyright - TastEat | Designed by </span>
                <span className={style.prim}>Victor Flow </span>
                <span>Powered by <span>Webflow</span></span>
            </div>
        </div>
    )
}

