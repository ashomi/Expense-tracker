import React from 'react'
import Navbar from './Components/Header/Navbar'
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path='/login' element={<Login/> }/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App