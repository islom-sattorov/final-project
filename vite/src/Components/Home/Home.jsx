import { useState } from 'react';
import arrow from '../../assets/arrow.svg';
import Blog from '../Blog/Blog';
import Certs from '../Certs/Certs';
import Form from '../Form/Form';
import MainInfo from '../Info/MainInfo';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    const [showBtn, setShowBtn] = useState(false);

    // Testing Notification
    // setInterval(() => {
    //     dispatch(addNotification({ type: true, message: 'Notification Work' }))
    // }, 5000)

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }


    window.addEventListener('scroll', () => {
        if (window.scrollY > 420) {
            setShowBtn(true)
        } else {
            setShowBtn(false)
        }
    })


    return (
        <>
            <Main />
            <MainInfo />
            <Certs />
            <Testimonial />
            <Menu />
            <Services />
            <Blog />
            <Form />
            {showBtn ?
                <button className="to_top_btn_main" onClick={handleClick}><img className='to_top_btn_main_arrow' src={arrow} alt='to top arrow' /></button>
                : <></>
            }
        </>
    )
}

export default Home