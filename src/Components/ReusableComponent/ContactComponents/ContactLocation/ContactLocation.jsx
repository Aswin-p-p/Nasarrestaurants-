import React from 'react'
import './ContactLocation.css'

function ContactLocation() {
  return (
    <>
      <div className="CT_location">
        <h2>NASSER RESTAURANT</h2>
        <p>Old Airport Road <br/>
          Shaikh Rashid Bin Saeed Al Maktoum Street <br/>
          - Al Karamah St - near Sheikh Khalifa Medical City <br/>
          Abu Dhabi - United Arab Emirates</p>
          <p>Phone:&nbsp; <span className="connect"><a href=""> +971 2 622 8788</a></span> &nbsp;  Email:&nbsp; <span className="connect"><a href=""> info@yourdomain.com</a></span></p>
    </div>

    <div className="location-map"><img src="assets/contactimg/map.png" alt=""/></div>

    </>
  )
}

export default ContactLocation