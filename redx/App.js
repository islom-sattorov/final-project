import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import CreateUser from './CreateUser/CreateUser';
import Header from './Header/Header';
import Home from './Home/Home';
import Products from './Products/Products';
import Users from './Users/Users';
import Cards from './Cards/Cards';

const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/create-user' element={<CreateUser/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cards' element={<Cards/>}/>
      </Routes>
    </>
  )
}

export default App;












