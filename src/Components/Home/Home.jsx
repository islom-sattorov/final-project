import Blog from '../Blog/Blog';
import Certs from '../Certs/Certs';
import Form from '../Form/Form';
import MainInfo from '../Info/MainInfo';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import ToTopBtn from '../ToTopBtn/ToTopBtn';

const Home = () => {
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
            <ToTopBtn />
        </>
    )
}

export default Home