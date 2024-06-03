import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <section class="nav container">
      <div class="logo">
        <img src="./image/logo.svg" alt="img" />
        <h1>Bistro Bliss</h1>
      </div>
      
      <nav class="nav-bar">
        <ul>
          <li><a class="bar bar2 active" href="index.html"> Home</a></li>
          <li><a class="bar" href="#"> About</a></li>
          <li><a class="bar" href="#"> Menu</a></li>
          <li><a class="bar" href="#"> Pages</a></li>
          <li><a class="bar" href="contact.html">Contact</a></li>
        </ul>  
       <button class="btn1">Book A Table</button> 
      </nav>
      <label id="hamburger">
        <i class="fas fa-bars"></i>
      </label>
    </section>
  )
}

export default Navbar