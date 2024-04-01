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

        <div id='container'>

          <div id="container-1">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p id='description'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div id="box-1">
              <a href="" className='btn'>Shop Now</a>
              <a href="" className='btn'>Category</a>
            </div>
            <p>Also available on</p>
            <div id="box-2">
              <img src="/images/flipkart.png" alt="" />
              <img src="/images/amazon.png" alt="" />
            </div>
          </div>

          <div id="container-2">
            <img src="/images/shoe_image.png" alt="shoes" />
          </div>

        </div>

      </div>
    </>
  )
}

export default Brandpage