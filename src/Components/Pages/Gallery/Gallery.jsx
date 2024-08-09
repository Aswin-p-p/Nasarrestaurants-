import React from 'react'
import Navbar from '../../ReusableComponent/Header/Navbar'
import Footer from '../../ReusableComponent/Footer/Footer'
import Testimonial from '../../ReusableComponent/Testimonial/Testimonial'
import GalleryBanner from '../../ReusableComponent/GalleryComponents/GalleryBanner/GalleryBanner'
import GalleryImg from '../../ReusableComponent/GalleryComponents/GalleryImg/GalleryImg'

function Gallery() {
  return (
    <>
    <Navbar/>
    <GalleryBanner/>
    <GalleryImg/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Gallery