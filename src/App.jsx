import { useCallback, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
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
    </>
  )
}

export default App


// Hook
// Parameter is the boolean with default "false" value
export const useToggle = (initialState = false) => {
  // Init State
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component  
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState(prevValue => !prevValue))

  return [state, toggle]
}


