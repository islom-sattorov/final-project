import './App.scss'
import Certs from './Components/Certs/Certs'
import Header from './Components/Header/Header'
import MainInfo from './Components/Info/MainInfo'
import Main from './Components/Main/Main'
import Menu from './Components/Menu/Menu'

function App() {

  return (
    <>
      <Header />
      <Main />
      <MainInfo />
      <Certs />
      <Menu />
    </>
  )
}

export default App
