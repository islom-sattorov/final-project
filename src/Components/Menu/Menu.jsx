import style from './Menu.module.scss'
import special from './special.png'

const Menu = () => {
    return (
        <section className={style.section}>
            <div className='container'>
                <div className={style.section_flex}>
                    <div className={style.section_special}>
                        <span className={style.section_menu}>MENU</span>
                        <h2 className={style.section_title}>Try Our Special Dishes</h2>
                        <p className={style.section_subtitle}>Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</p>
                        <img className={style.section_pic} src={special} alt='special' />
                        <button className={style.section_btn}>See all dishes</button>
                    </div>
                    <div>
                        <h2>test</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu