import { Route, Routes } from 'react-router-dom'
import './App.scss'
import BlogPage from './Components/BlogPage/BlogPage'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import MenuPage from './Components/MenuPage/MenuPage'
import ReservePage from './Components/ReservePage/ReservePage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/reservation' element={<ReservePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
