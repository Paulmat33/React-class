import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer className="container">
      <div className="grid-footer">
        <div className="column-1">
          <div className="white-logo">
            <img src="./image/white-logo.svg" />
            <h3>Bristo Bliss</h3>
          </div>

          <div className="white-logo-text">
            <p>
              In the new era of technology we look a in the future with
              certainty and pride to for our company.
            </p>
          </div>

          <div className="social-image-icon">
            <i className="media fa-brands fa-twitter"></i>
            <i className="media fa-brands fa-facebook"></i>
            <i className="media fa-brands fa-instagram"></i>
            <i className="media fa-brands fa-github"></i>
          </div>
        </div>
        <div className="column-2">
          <div>
            <div className="page-title">
              <p>Pages</p>
            </div>

            <div className="page-title-text">
              <p>Home</p>
              <p>About</p>
              <p>Mennu</p>
              <p>Pricing</p>
              <p>Blog</p>
              <p>Contact</p>
              <p>Dlivery</p>
            </div>
          </div>

          <div>
            <div className="page-title">
              <p>Utility Pages</p>
            </div>

            <div className="page-title-text">
              <p>Start Here</p>
              <p>Styleguide</p>
              <p>Password Protected</p>
              <p>404 Not Found</p>
              <p>Licenses</p>
              <p>Changelog</p>
              <p>Viem More</p>
            </div>
          </div>
        </div>

        <div className="column-3">
          <p className="page-title">Follow Us On Instagram</p>

          <div className="right-image-insta">
            <img className="rightfood-img" src="./image/food 1.svg" alt="image" />
            <img className="rightfood-img" src="./image/food 2.svg" alt="image" />
          </div>

          <div className="right-image-insta-2">
            <img className="imfood" src="./image/food-image-3.jpg" alt="image" />
            <img className="imfood" src="./image/food-image-4.png" alt="image" />
          </div>
        </div>
      </div>

      <div className="copy-write">
        <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>
      <a href="#" className="to-top" >
        <i className="fas fa-chevron-up"></i>
      </a>
    </footer>

  )
}

export default footer