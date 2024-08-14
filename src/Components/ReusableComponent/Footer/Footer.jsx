import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
     <footer className="footerSection">
    <div className="footer-row">
      <div className="footer-logo"><img src="assets/images/logo.png" alt=""/></div>
      <p>Old Airport Road <br/>Shaikh Rashid Bin Saeed Al Maktoum Street, Al Karamah St<br/>Near Sheikh Khalifa Medical City - Abu Dhabi , United Arab Emirates</p>
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About us</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="copyright">&copy;2024 | Nasser Restaurant All Rights Reserved</div>

        <div className="socialMedia">
          <li><a href=""><img src="assets/images/twitter_icon.png" alt="" width="15px"/></a></li>
          <li><a href=""><img src="assets/images/facebook.png" alt="" width="10px"/></a></li>
          <li><a href=""><img src="assets/images/instagram.png" alt="" width="15px"/></a></li>
          <li><a href=""><img src="assets/images/telegram.png" alt="" width="15px"/></a></li>
        </div>
    </div>
  </footer>
    </>
  )
}

export default Footer