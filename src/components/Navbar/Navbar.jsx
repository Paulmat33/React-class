import React from "react";
import "./Navbar.css";
import logo from "../../image/logo.svg";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <section className="nav container">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Bistro Bliss</h1>
      </div>
      
      <nav className="nav-bar">
        <ul>
          <li><Link to="/" className="bar bar2">Home</Link></li>
          <li><Link to="/about" className="bar">About</Link></li>
          <li><Link to="/menu" className="bar">Menu</Link></li>
          <li><Link to="/pages" className="bar">Pages</Link></li>
          <li><Link to="/contact"className="bar" >Contact</Link></li>
        </ul>  
       <button className="btn1">Book A Table</button> 
      </nav>
    </section>
  );
};

export default Navbar;
