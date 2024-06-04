import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <section className="nav container">
      <div className="logo">
        <img src="./image/logo.svg" alt="img" />
        <h1>Bistro Bliss</h1>
      </div>
      
      <nav className="nav-bar">
        <ul>
          <li><a className="bar bar2 active" href="index.html"> Home</a></li>
          <li><a className="bar" href="#"> About</a></li>
          <li><a className="bar" href="#"> Menu</a></li>
          <li><a className="bar" href="#"> Pages</a></li>
          <li><a className="bar" href="contact.html">Contact</a></li>
        </ul>  
       <button className="btn1">Book A Table</button> 
      </nav>
      <label id="hamburger">
        <i className="fas fa-bars"></i>
      </label>
    </section>
  )
}

export default Navbar