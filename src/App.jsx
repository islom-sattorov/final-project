import './App.scss'
import Blog from './Components/Blog/Blog'
import Certs from './Components/Certs/Certs'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import MainInfo from './Components/Info/MainInfo'
import Main from './Components/Main/Main'
import Menu from './Components/Menu/Menu'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonial/Testimonial'

function App() {

  return (
    <>
      <Header />
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

export default App
