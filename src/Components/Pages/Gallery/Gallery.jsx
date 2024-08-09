import React from 'react'
import Navbar from '../../ReusableComponent/Header/Navbar'
import Footer from '../../ReusableComponent/Footer/Footer'

function Gallery() {
  return (
    <>
    <Navbar/>
    <div  onClick={alert('page undermaintance')}/>
    <Footer/>
    </>
  )
}

export default Gallery