import React, { useEffect, useState } from 'react'
import './NewsBanner.css'

function NewsBanner() {
  const [animate , setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true);
  }, [])
  return (
   <>
   <section className="news_home">
  <div className="NW_banner">
    {/* <div className="NW_LN1"></div> */}
    <div className="NW_content">
    <h1 className={` ${animate ? 'animate__animated animate__flipInX' : ''}`}>Deliciously <br/>
      Authentic</h1>
      <p>Your Culinary Adventure Starts Here</p>
    </div>
    {/* <div className="NW_LN1"></div> */}
  </div>
</section>
   </>
  )
}

export default NewsBanner