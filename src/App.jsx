import './App.scss'
import Certs from './Components/Certs/Certs'
import Header from './Components/Header/Header'
import MainInfo from './Components/Info/MainInfo'
import Main from './Components/Main/Main'
import Menu from './Components/Menu/Menu'
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
    </>
  )
}

export default App
