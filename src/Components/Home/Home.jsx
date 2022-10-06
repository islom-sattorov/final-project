import Blog from '../Blog/Blog';
import Certs from '../Certs/Certs';
import Form from '../Form/Form';
import MainInfo from '../Info/MainInfo';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    // const dispatch = useDispatch()

    // setInterval(() => {
    //     dispatch(addNotification({ type: true, message: 'Notification Work' }))
    // }, 5000)


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
        </>
    )
}

export default Home