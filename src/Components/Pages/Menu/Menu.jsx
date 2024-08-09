import React from 'react'
import Navbar from '../../ReusableComponent/Header/Navbar'
import Footer from '../../ReusableComponent/Footer/Footer'
function Menu() {
  return (
    <>
    <Navbar/>
      <div  onClick={alert('page undermaintance')}/>
    <Footer/>
    </>
  )
}

export default Menu