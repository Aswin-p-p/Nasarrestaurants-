import React from 'react'
import Navbar from '../../ReusableComponent/Header/Navbar'
import Footer from '../../ReusableComponent/Footer/Footer'
import Menubanner from '../../ReusableComponent/MenuComponents/MenuBanner/Menubanner'
import MenuContact from '../../ReusableComponent/MenuComponents/MenuContact/MenuContact'
function Menu() {
  return (
    <>
    <Navbar/>
      <Menubanner/>
      <MenuContact/>
    <Footer/>
    </>
  )
}

export default Menu