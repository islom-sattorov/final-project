import fb from './fb.svg'
import style from './Header.module.scss'
import inst from './inst.svg'
import pinterest from './pinterest.svg'
import twitter from './twitter.svg'

const HeaderIcons = () => {
    return (
        <div className={style.navbar_icons}>
            <a href='https://www.instagram.com' target='_blank' rel='noreferrer'><img src={inst} alt='inst' /></a>
            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><img src={fb} alt='fb' /></a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'><img src={twitter} alt='twitter' /></a>
            <a href='https://www.pinterest.com/' target='_blank' rel='noreferrer'><img src={pinterest} alt='pinterest' /></a>
        </div>
    )
}

export default HeaderIcons