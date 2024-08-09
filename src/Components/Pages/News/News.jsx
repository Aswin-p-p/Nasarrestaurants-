import React from 'react'
import Navbar from '../../ReusableComponent/Header/Navbar'
import Footer from '../../ReusableComponent/Footer/Footer'
import Testimonial from '../../ReusableComponent/Testimonial/Testimonial'
import NewsBanner from '../../ReusableComponent/NewsComponents/NewsBanner/NewsBanner'
import NewsData from '../../ReusableComponent/NewsComponents/NewsData/NewsData'

function News() {
  return (
    <>
    <Navbar/>
    <NewsBanner/>
           <NewsData/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default News