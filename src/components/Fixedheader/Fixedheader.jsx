import React from 'react'
import './Fixedheader.css'

const Fixedheader = () => {
  return (
    <div className="header-mail container">
      <div className="left-icon">
        <i className="fa-solid fa-phone"></i>
        <p>(414) 857 - 0107</p>
        <i className="fa-regular fa-envelope"></i>
        <p>yummy@bistrobliss</p>
      </div>
      <div className="right-icon">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-github"></i>
      </div>
    </div>
  )
}

export default Fixedheader