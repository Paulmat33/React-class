import React from 'react'
import menu from '../../image/menuicon1.svg'
import './Menu.css'
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <div>
         <section className="browseMenu container">
      <div className="menu">
        <h2>Browse Our Menu</h2>
      </div>
      {/* <!-- menu list--> */}
      <div className="menuicon">
        {/* <!-- menu 1 --> */}
        <div className="menu-icon1 icon--1">
          <div>
            <img src={menu} alt="" />
          </div>
          <div className="breakfast">
            <h3>Breakfast</h3>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
          </div>
          <Link to="/" className="exploremenu">Explore Menu</Link>
        </div>
        
        {/* <!-- menu 2 --> */}
        <div className="menu-icon1">
          <div>
            <img src={menu} alt="" />
          </div>
          <div className="breakfast">
            <h3>Breakfast</h3>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
          </div>
          <Link to="/" className="exploremenu">Explore Menu</Link>
        </div>

        {/* <!-- menu 3 --> */}
        <div className="menu-icon1">
          <div>
          <img src={menu} alt="" />
          </div>
          <div className="breakfast">
            <h3>Breakfast</h3>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
          </div>
          <Link to="/" className="exploremenu">Explore Menu</Link>
        </div>

        {/* <!-- menu 4 --> */}
        <div className="menu-icon1">
          <div>
          <img src={menu} alt="" />
            
          </div>
          <div className="breakfast">
            <h3>Breakfast</h3>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
          </div>
          <Link to="/" className="exploremenu">Explore Menu</Link>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Menu