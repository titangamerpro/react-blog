import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Layout = ({posts}) => {
  return (
    <div className='app'>
        <Header/>
        <Nav/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Layout