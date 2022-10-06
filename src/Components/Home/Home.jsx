import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNotification } from '../../features/notification/notificationSlice';
import Blog from '../Blog/Blog';
import Certs from '../Certs/Certs';
import Form from '../Form/Form';
import MainInfo from '../Info/MainInfo';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Notification from '../Notification/Notification';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addNotification({ type: true, message: 'Notification Work' }))
    }, [])
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
            <Notification
                children={<div></div>}
            />
        </>
    )
}

export default Home