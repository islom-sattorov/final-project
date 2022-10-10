import Carousel from '../Carousel/Carousel'
import style from './Testimonial.module.scss'

const Testimonial = () => {
    return (
        <section className={style.section}>
            <div className='container'>
                <span className={style.section_test}>Testimonial</span>
                <h2 className={style.section_title}>Our Clients Say</h2>
                <p className={style.section_subtitle}>We love to hear from customers, so please leave a comment or say hello in an email.</p>
            </div>
            <Carousel />
        </section>
    )
}

export default Testimonial