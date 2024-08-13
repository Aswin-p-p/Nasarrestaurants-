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

    <div className="location-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13277.28776866749!2d54.34965898715822!3d24.47176899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e663d886f1ff7%3A0xf41104a886bb4d95!2sNASSER%20RESTAURANT!5e1!3m2!1sen!2sin!4v1723197950109!5m2!1sen!2sin"
     height="500" style={{border:'0; ', width:'100%',}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>

    </>
  )
}

export default ContactLocation