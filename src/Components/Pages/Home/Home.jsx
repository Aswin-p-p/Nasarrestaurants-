import React from 'react'
import Navbar from '../../ReusableComponent/Header/Navbar'
import Footer from '../../ReusableComponent/Footer/Footer'
import HomerBanner from '../../ReusableComponent/HomeComponents/HomeBanner/HomerBanner'
import HomeLocation from '../../ReusableComponent/HomeComponents/HomeLocation/HomeLocation'
import HomeMenu from '../../ReusableComponent/HomeComponents/HomeMenu/HomeMenu'
import HomeSpecials from '../../ReusableComponent/HomeComponents/HomeSpecials/HomeSpecials'
import HomeTestimonial from '../../ReusableComponent/HomeComponents/HomeTestimonial/HomeTestimonial'

function Home() {
  return (
    <>
    <Navbar/>
     <HomerBanner/>
     <HomeLocation/>
    <HomeMenu/>
    <HomeSpecials/>
    <HomeTestimonial/>
    <Footer/>
    </>
  )
}

export default Home