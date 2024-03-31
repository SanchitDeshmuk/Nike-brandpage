import React from 'react'
import './style.css'

function Brandpage() {
  return (
    <>
      <div id="main">

        <nav className='navBar'>
          <img src="/images/brand_logo.png" alt="logo" />
          
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          
          <a href="">Login</a>
        </nav>

      </div>
    </>
  )
}

export default Brandpage