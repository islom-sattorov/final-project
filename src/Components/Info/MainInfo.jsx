import hoursPic from '../../assets/hours.svg';
import locationPic from '../../assets/location.svg';
import reserve from '../../assets/reserve.svg';
import style from './Info.module.scss';

const MainInfo = () => {
    return (
        <section id='about' className={style.info_section}>
            <div className='container'>
                <div className={style.container_flex}>
                    <Info
                        img={locationPic}
                        title='Locate Us'
                        subtitle='Dushanbe Markaz'
                    />
                    <Info
                        img={hoursPic}
                        title='Open Hours'
                        subtitle='Mon To Fri 9:00 AM - 10:00 PM'
                    />
                    <Info
                        img={reserve}
                        title='Reservation'
                        subtitle='restaurant@gmail.com'
                    />
                </div>
            </div>
        </section>
    )
}

export default MainInfo

const Info = (props) => {
    return (
        <div className="container">
            <div className={style.section_flex}>
                <img className={style.section_icons} src={props.img} alt='icons' />
                <div className={style.section_text}>
                    <h2 className={style.section_title}>{props.title}</h2>
                    <p className={style.section_subtitle}>{props.subtitle}</p>
                </div>
            </div>
        </div>
    )
}
