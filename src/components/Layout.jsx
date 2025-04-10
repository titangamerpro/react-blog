import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'


const Layout = ({posts}) => {
  return (
    <div className='app'>
        <Header/>
        <Nav/>
        <Home posts={posts} />
        <Footer/>
    </div>
  )
}

export default Layout