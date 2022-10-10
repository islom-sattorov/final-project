import style from './Footer.module.scss';

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

export default FooterBot