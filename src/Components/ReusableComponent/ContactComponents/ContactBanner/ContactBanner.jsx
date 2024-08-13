import React, { useEffect, useState } from 'react'
import './ContactBanner.css'

function ContactBanner() {
  const [animate , setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true);
  }, [])
  return (
   <>
   <section className="contact_home">
  <div className="CT_banner">
    {/* <div className="CT_LN1"></div> */}
    <div className="CT_content">
    <h1 className={` ${animate ? 'animate__animated animate__flipInX' : ''}`}>Deliciously <br/>
      Authentic</h1>
      <p>Your Culinary Adventure Starts Here</p>
    </div>
    {/* <div className="CT_LN1"></div> */}
  </div>
</section>
   </>
  )
}

export default ContactBanner