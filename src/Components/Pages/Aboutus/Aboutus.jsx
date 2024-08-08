import React from 'react'
import Navbar from '../../ReusableComponent/Header/Navbar'
import Footer from '../../ReusableComponent/Footer/Footer'
import Aboutusabout from '../../ReusableComponent/AboutusComponents/AboutUsAbout/Aboutusabout'
import AboutBanner from '../../ReusableComponent/AboutusComponents/AboutBanner/AboutBanner'
import Testimonial from '../../ReusableComponent/Testimonial/Testimonial'


function Aboutus() {
  return (
  <>
  <Navbar/>
  <AboutBanner/>
  <Testimonial/>

  <Aboutusabout/> 
  <Footer/>
  </>
  )
}

export default Aboutus