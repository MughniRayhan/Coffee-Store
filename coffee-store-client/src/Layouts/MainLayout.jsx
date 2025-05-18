import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

function MainLayout() {
  return (
    <div className='raleway'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout