import style from './Certs.module.scss'
import pic from './pic.jpeg'

const Certs = () => {
    return (
        <section className={style.section}>
            <div className='container'>
                <div className={style.section_flex}>
                    <img className={style.section_pic} src={pic} alt='pic' />
                    <div className={style.section_text}>
                        <h2 className={style.section_title}>The Delicious Story</h2>
                        <p className={style.section_subtitle}>The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.</p>
                        <div className={style.section_text_flex}>
                            <div>
                                <h2 className={style.section_title}>2018</h2>
                                <p className={style.section_subtitle}>Plan for this restaurant to deliver healthy food.</p>
                            </div>
                            <div>
                                <h2 className={style.section_title}>2022</h2>
                                <p className={style.section_subtitle}>Happily in the fourth year by fulfill the motto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certs