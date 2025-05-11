import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Layout = ({allPosts}) => {
  return (
    <div className='app'>
        <Header/>
        <Nav/>
        <Outlet />
        <Footer posts={allPosts} Length={allPosts.length} />
    </div>
  )
}

export default Layout