import React from 'react'
import './Header.css'
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Header = () => {
  return (
    <div>
        <div className="header-mail container">
      <div className="left-icon">
        <FaPhone/>
        <p>(414) 857 - 0107</p>
        <FaRegEnvelope/>
        <p>yummy@bistrobliss</p>
      </div>
      <div className="right-icon">
      <FaTwitter className='fa-brands' />
        <FaFacebookF className='fa-brands' />
        <FaInstagram className='fa-brands'/>
        <FaGithub className='fa-brands'/>
      </div>
    </div>
    </div>
  )
}

export default Header