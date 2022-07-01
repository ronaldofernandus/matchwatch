import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomePagebeforelogin from './HomePage/HomePagebeforelogin'
import Login from './Login/login'
import Register from './Register/register'


function MainPage() {
  return (
    <>
   
    <Routes>
        <Route path ="/" element={<HomePagebeforelogin></HomePagebeforelogin>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path ="/register" element={<Register></Register>}></Route>
    </Routes>
    </>
  )
}

export default MainPage