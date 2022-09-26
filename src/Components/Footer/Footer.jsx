import logo from '../../assets/logo.svg';
import fb from '../Header/fb.svg';
import inst from '../Header/inst.svg';
import pinterest from '../Header/pinterest.svg';
import twitter from '../Header/twitter.svg';
import style from './Footer.module.scss';
import FooterMain from './FooterMain';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className='container'>
                <div className={style.footer_flex}>
                    <span className={style.footer_span}>#28Monkeys</span>
                    <img src={logo} className={style.footer_pic} />
                    <div className={style.footer_icons}>
                        <a href='#'><img src={inst} alt='inst' /></a>
                        <a href='#'><img src={fb} alt='fb' /></a>
                        <a href='#'><img src={pinterest} alt='pinterest' /></a>
                        <a href='#'><img src={twitter} alt='twitter' /></a>
                    </div>
                </div>
                <FooterMain />
            </div>
        </footer>
    )
}

export default Footer;