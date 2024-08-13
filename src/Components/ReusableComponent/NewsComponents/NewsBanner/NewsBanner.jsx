import React, { useEffect, useState } from 'react'
import './NewsBanner.css'

function NewsBanner() {
  const [animate , setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true);
  }, [])
  return (
   <>
   <section class="news_home">
  <div class="NW_banner">
    {/* <div class="NW_LN1"></div> */}
    <div class="NW_content">
    <h1 className={` ${animate ? 'animate__animated animate__flipInX' : ''}`}>Deliciously <br/>
      Authentic</h1>
      <p>Your Culinary Adventure Starts Here</p>
    </div>
    {/* <div class="NW_LN1"></div> */}
  </div>
</section>
   </>
  )
}

export default NewsBanner