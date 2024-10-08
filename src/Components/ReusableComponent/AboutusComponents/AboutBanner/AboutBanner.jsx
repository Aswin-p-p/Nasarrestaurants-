import React, { useEffect, useState } from 'react'
import './AboutBanner.css'

function AboutBanner() {
  const [animate , setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true);
  }, [])
  return (
   <>
   <section className="About_home">
  <div className="AB_banner">
    {/* <div className="LN1"></div> */}
    <div className="AB_content">
    <h1 className={` ${animate ? 'animate__animated animate__flipInX' : ''}`}>Deliciously <br/>
      Authentic</h1>
      <p>Your Culinary Adventure Starts Here</p>
    </div>
    {/* <div className="LN1"></div> */}
  </div>
</section>
   </>
  )
}

export default AboutBanner