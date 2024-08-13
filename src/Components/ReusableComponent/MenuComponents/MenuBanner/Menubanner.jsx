import React, { useEffect, useState } from 'react'
import './MenuBanner.css'

function Menubanner() {
  const [animate , setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true);
  }, [])
  return (
    <>
    <section class="menu_home">
  <div class="ME_banner">
    <div class="ME_content">
    <h1 className={` ${animate ? 'animate__animated animate__flipInX' : ''}`}>Deliciously <br/>
      Authentic</h1>
      <p>Your Culinary Adventure Starts Here</p>
    </div>
  </div>
</section>


    </>
  )
}

export default Menubanner