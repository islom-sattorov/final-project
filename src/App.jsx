import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
