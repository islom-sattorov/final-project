// import logo from '../../../public/logo192.png';
import fb from '../Header/fb.svg';
import inst from '../Header/inst.svg';
import pinterest from '../Header/pinterest.svg';
import twitter from '../Header/twitter.svg';
import style from './Footer.module.scss';
import FooterBot from './FooterBot';
import FooterMain from './FooterMain';

const Footer = () => {
    return (
        <footer id='footer' className={style.footer}>
            <div className='container'>
                <div className={style.footer_flex}>
                    <span className={style.footer_span}>#28Monkeys</span>
                    {/* <img src={logo} className={style.footer_pic} alt='logo' /> */}
                    <div className={style.footer_icons}>
                        <a href='https://www.instagram.com' target='_blank' rel="noreferrer"><img src={inst} alt='inst' /></a>
                        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><img src={fb} alt='fb' /></a>
                        <a href='https://twitter.com' target='_blank' rel="noreferrer"><img src={twitter} alt='twitter' /></a>
                        <a href='https://www.pinterest.com/' target='_blank' rel="noreferrer"><img src={pinterest} alt='pinterest' /></a>
                    </div>
                </div>
                <FooterMain />
                <FooterBot />
            </div>
        </footer>
    )
}

export default Footer;