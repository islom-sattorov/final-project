import { Route, Routes } from 'react-router-dom'
import './App.scss'
import BlogPage from './Components/BlogPage/BlogPage'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
