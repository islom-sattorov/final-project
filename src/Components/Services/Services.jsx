import icon1 from '../../assets/Vector.svg';
import icon2 from '../../assets/Vector2.svg';
import icon3 from '../../assets/Vector3.svg';
import style from './Services.module.scss';

const Services = () => {
    return (
        <section className={style.section}>
            <div className='container'>
                <div className={style.section_flex}>
                    <div className={style.section_text}>
                        <span className={style.section_span}>what we offer</span>
                        <h2 className={style.section_title}>Our Great Services</h2>
                        <p className={style.section_subtitle}>
                            The atmosphere set the stage. It's about more<br />
                            than just a dining room away from your home.<br />
                            food takes the spotlight as guests.
                        </p>
                    </div>
                    <div className={style.section_icons}>
                        <div className={style.section_icons_items}>
                            <img src={icon1} alt='services' />
                            <h3 className={style.section_icons_text}>Opened 24/7</h3>
                        </div>
                        <div className={style.section_icons_items}>
                            <img src={icon2} alt='services' />
                            <h3 className={style.section_icons_text}>Opened 24/7</h3>
                        </div>
                        <div className={style.section_icons_items}>
                            <img src={icon3} alt='services' />
                            <h3 className={style.section_icons_text}>Opened 24/7</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;