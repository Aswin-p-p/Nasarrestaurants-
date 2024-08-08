import React from 'react'
import './HomeBanner.css'

function HomerBanner() {
  return (
    <>
    <section className="home">
  <div className="banner">
    <div className="content">
    <h1>Deliciously <br/>
      Authentic</h1>
      <p>Your Culinary Adventure Starts Here</p>
    </div>
  </div>
</section>

<div className="booking">
  <h3>Discover Culinary Excellence in the Heart of Abu Dhabi</h3>
  <p className="B_content">Welcome to Nasar Restaurant, an exquisite dining destination in the heart of Abu Dhabi, where culinary artistry meets cultural richness. Nestled amidst the vibrant cityscape, our restaurant offers a unique blend of traditional Emirati flavors and contemporary international cuisine, crafted to perfection by our master chefs.</p>
  <button className="book-btn">book your table</button>
</div>

    </>
  )
}

export default HomerBanner