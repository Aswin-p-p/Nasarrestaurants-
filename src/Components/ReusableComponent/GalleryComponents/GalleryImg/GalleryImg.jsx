import React from 'react'
import './GalleryImg.css'

function GalleryImg() {
  return (
    <>
    <div className="galleryContainer">
  <div className="GA_details">
    <img src="assets/galleryimg/GA-img.png" alt=""/>
      <div className="GA-row">
        <h1>Gallery</h1>
        <p>Every Picture Tells a Story</p>
      </div>
  </div>
  </div>

<div className="image-gallery">
  <img src="assets/galleryimg/G-img1.jpg" alt=""/>
  <img src="assets/galleryimg/G-img2.jpg" alt=""/>
  <img src="assets/galleryimg/G-img3.jpg" alt=""/>
  <img src="assets/galleryimg/G-img4.jpg" alt=""/>
  <img src="assets/galleryimg/G-img5.jpg" alt=""/>
  <img src="assets/galleryimg/G-img6.jpg" alt=""/>
  <img src="assets/galleryimg/G-img7.jpg" alt=""/>
  <img src="assets/galleryimg/G-img8.jpg" alt=""/>
  <img src="assets/galleryimg/G-img9.jpg" alt=""/>
</div>
    </>
  )
}

export default GalleryImg