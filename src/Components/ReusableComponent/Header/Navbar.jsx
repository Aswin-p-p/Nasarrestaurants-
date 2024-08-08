import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };
  return (
    <>
    <div className="topHeader">
<nav className="navBar">
  <div className="contact">
      <li><img src="assets/images/call.png" alt="" width="15px"/>+97126228788</li>
      <div className="socialMedia">
        <li><a href=""><img src="assets/images/twitter_icon.png"  alt="" width="15px"/></a></li>
        <li><a href=""><img src="assets/images/facebook.png" alt="" width="10px"/></a></li>
        <li><a href=""><img src="assets/images/instagram.png" alt="" width="15px"/></a></li>
        <li><a href=""><img src="assets/images/telegram.png" alt="" width="15px"/></a></li>
      </div>
  </div>
  <div ><img src="assets/images/logo.png" alt="" className="logo"/></div>
  <div className="delivery">
    <h6>Fastest <br/>
      Delivery</h6>
      <div><img src="assets/images/bike_icon.png" alt="" width="50px"/></div>
      <div><p className="delivery-para">Nasser Restaurant  take pride in delivering the freshest catch straight to your doorstep with lightning speed.</p></div>
  </div> 
  <div className="bars " onClick={toggleNav}><i className="fa-solid fa-bars"></i></div>
</nav>
<div className="bottom-bar"></div>
<div className="menuBar">
  <ul className={`nav justify-content-center ${isActive ? 'active' : ''}`}>
    <div className="btn-close1" onClick={toggleNav} ><i className="fa-solid fa-xmark"></i></div>
    <li className="nav-item">
      <a className="nav-link" href="/"><span id="plus1">+</span>home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/aboutus"><span id="plus1">+</span> about us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/menu"><span id="plus1">+</span>menu</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/news"><span id="plus1">+</span>news</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/gallery"><span id="plus1">+</span>gallery</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/contact"><span id="plus1">+</span>contact</a>
    </li>
 
  </ul>
</div>

</div>
    </>
  )
}

export default Navbar