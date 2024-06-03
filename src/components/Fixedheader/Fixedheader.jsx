import React from 'react'
import './Fixedheader.css'

const Fixedheader = () => {
  return (
    <div class="header-mail container">
      <div class="left-icon">
        <i class="fa-solid fa-phone"></i>
        <p>(414) 857 - 0107</p>
        <i class="fa-regular fa-envelope"></i>
        <p>yummy@bistrobliss</p>
      </div>
      <div class="right-icon">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-github"></i>
      </div>
    </div>
  )
}

export default Fixedheader