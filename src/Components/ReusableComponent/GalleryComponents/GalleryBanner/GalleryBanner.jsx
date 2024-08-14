import React, { useEffect, useState } from 'react'
import './GalleryBanner.css'

function GalleryBanner() {
  const [animate , setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true);
  }, [])

  
  return (
    <>
    <section className="gallery_home">
  <div className="GA_banner">
    
    <div className="GA_content">
    <h1 className={` ${animate ? 'animate__animated animate__flipInX' : ''}`}>Deliciously <br/>
      Authentic</h1>
      <p>Your Culinary Adventure Starts Here</p>
    </div>
    
  </div>
</section>
    </>
  )
}

export default GalleryBanner