import React from 'react'

const Footer = ({posts, Length}) => {
  const year = new Date()
  return (
    <footer className='footer'>
      <p className="total-post">
        Total {Length} {Length <=1 ? "post": "posts"} 
      </p>
      <p className="year">
        {year.getFullYear()}
      </p>
    </footer>

  )
}

export default Footer