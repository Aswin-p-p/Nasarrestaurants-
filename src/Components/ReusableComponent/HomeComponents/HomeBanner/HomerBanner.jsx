import React, { useState, useEffect } from 'react';
import './HomeBanner.css';

function HomeBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const banners = document.querySelectorAll('.hm-banner-container > div');
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % banners.length;
        return nextIndex;
      });
    }, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const banners = document.querySelectorAll('.hm-banner-container > div');
    banners.forEach((banner, index) => {
      if (index === currentIndex) {
        banner.classList.add('active');
      } else {
        banner.classList.remove('active');
      }
    });
  }, [currentIndex]);

  return (
    <>
      <div className="hm-banner-container">
        <div className={`hm-banner1 ${currentIndex === 0 ? 'active' : ''}`}>
          <img src="assets/images/hm-banner1.jpg" alt="" className="homeBanner" />
          <div className="content">
            <h1>Deliciously <br /> Authentic</h1>
            <p>Your Culinary Adventure Starts Here</p>
          </div>
        </div>

        <div className={`hm-banner2 ${currentIndex === 1 ? 'active' : ''}`}>
          <img src="assets/images/hm-banner2.jpg" alt="" className="homeBanner" />
          <div className="content">
            <h1>Authentic Arabian Flavors, <br /> Crafted with Tradition</h1>
          </div>
        </div>

        <div className={`hm-banner3 ${currentIndex === 2 ? 'active' : ''}`}>
          <img src="assets/images/hm-banner3.jpg" alt="" className="homeBanner" />
          <div className="content">
            <h1>Where Abu Dhabi <br /> Meets Flavor</h1>
          </div>
        </div>

        <div className={`hm-banner4 ${currentIndex === 3 ? 'active' : ''}`}>
          <img src="assets/images/hm-banner4.jpg" alt="" className="homeBanner" />
          <div className="content">
            <h1>Where Every Meal <br /> Tells a Story</h1>
          </div>
        </div>
      </div>

      <div className="booking">
        <h3>Discover Culinary Excellence in the Heart of Abu Dhabi</h3>
        <p className="B_content">
          Welcome to Nasar Restaurant, an exquisite dining destination in the heart of Abu Dhabi, where culinary artistry meets cultural richness. Nestled amidst the vibrant cityscape, our restaurant offers a unique blend of traditional Emirati flavors and contemporary international cuisine, crafted to perfection by our master chefs.
        </p>
        <button className="book-btn">Book Your Table</button>
      </div>
    </>
  );
}

export default HomeBanner;
