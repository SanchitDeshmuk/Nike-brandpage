import React from 'react'
import './navstyle.css'

function Nav() {
  return (
    <>
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
    </>
  )
}

export default Nav