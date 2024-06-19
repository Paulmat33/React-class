import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-section container">
      <div className="breakfast-text">
        <h1>Best food for your taste</h1>
        <p>
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className="button">
          <button className="btn2">Book A Table</button>
          <button className="btn3">Explore Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Hero