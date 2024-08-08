import React from 'react'
import './HomeLocation.css'

function HomeLocation() {
  return (
    <>
    <div className="row3">
<div className="location"> <img src="assets/images/banner2.jpg" alt=""/></div>

<div className="locate_opening">
    <div className="LO_details opening">
      <img src="assets/images/clock.png" alt="" width="60px"/>
      <div className="OP_details">
        <h5>Opening hours</h5>
        <p>MON - FRI: 7AM - 11PM <br/>
          SAT: 10AM - 9PM <br/>
          SUN: 10AM - 9PM</p>
      </div>
    </div>

    <div className="line"></div>

    <div className=" LO_details">
      <img src="assets/images/locate.png" alt="" width="60px"/>
      <div className="OP_details">
        <h5>Location</h5>
        <p>Old Airport Road </p>
        <p>Shaikh Rashid Bin Saeed Al Maktoum Street, Al Karamah St Near Sheikh Khalifa Medical City - Abu Dhabi , United Arab Emirates</p>
      </div>
    </div>

</div>
</div>
    </>
  )
}

export default HomeLocation