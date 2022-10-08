import { Route, Routes } from 'react-router-dom'
import './App.scss'
import arrow from './assets/arrow.svg'
import BlogPage from './Components/BlogPage/BlogPage'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import MenuPage from './Components/MenuPage/MenuPage'
import Notification from './Components/Notification/Notification'
import Hall from './Components/ReservePage/Hall'
import ReservePage from './Components/ReservePage/ReservePage'
import Terrace from './Components/ReservePage/Terrace'


function App() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/reservation/*' element={<ReservePage />}>
          <Route path="reservation/hall" element={<Hall />} />
          <Route path="reservation/terrace" element={<Terrace />} />
        </Route>
      </Routes>
      <Notification
        children={<div></div>}
      />
      <Footer />
      <button className="to_top_btn_main" onClick={handleClick}><img className='to_top_btn_main_arrow' src={arrow} alt='to top arrow' /></button>
    </>
  )
}

export default App
