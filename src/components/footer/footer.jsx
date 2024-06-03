import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer class="container">
      <div class="grid-footer">
        <div class="column-1">
          <div class="white-logo">
            <img src="./image/white-logo.svg" />
            <h3>Bristo Bliss</h3>
          </div>

          <div class="white-logo-text">
            <p>
              In the new era of technology we look a in the future with
              certainty and pride to for our company.
            </p>
          </div>

          <div class="social-image-icon">
            <i class="media fa-brands fa-twitter"></i>
            <i class="media fa-brands fa-facebook"></i>
            <i class="media fa-brands fa-instagram"></i>
            <i class="media fa-brands fa-github"></i>
          </div>
        </div>
        <div class="column-2">
          <div>
            <div class="page-title">
              <p>Pages</p>
            </div>

            <div class="page-title-text">
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
            <div class="page-title">
              <p>Utility Pages</p>
            </div>

            <div class="page-title-text">
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

        <div class="column-3">
          <p class="page-title">Follow Us On Instagram</p>

          <div class="right-image-insta">
            <img class="rightfood-img" src="./image/food 1.svg" alt="image" />
            <img class="rightfood-img" src="./image/food 2.svg" alt="image" />
          </div>

          <div class="right-image-insta-2">
            <img class="imfood" src="./image/food-image-3.jpg" alt="image" />
            <img class="imfood" src="./image/food-image-4.png" alt="image" />
          </div>
        </div>
      </div>

      <div class="copy-write">
        <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>
      <a href="#" class="to-top" >
        <i class="fas fa-chevron-up"></i>
      </a>
    </footer>

  )
}

export default footer