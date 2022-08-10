import React from 'react'
import Navbar from './Components/Header/Navbar'
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Dashboard from './Layout/Dashboard/Dashboard'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path='/login' element={<Login/> }/>
      <Route path='/' element={<Home/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App