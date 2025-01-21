import React from 'react'
import Navbar from '../../ReusableComponent/Header/Navbar'
import Footer from '../../ReusableComponent/Footer/Footer'
import Menubanner from '../../ReusableComponent/MenuComponents/MenuBanner/Menubanner'
import MenuContact from '../../ReusableComponent/MenuComponents/MenuContact/MenuContact'
import ToggleBar from '../../ReusableComponent/MenuComponents/MenuTogglebar/ToggleBar'
function Menu() {
  return (
    <>
    <Navbar/>
      <Menubanner/>
      <ToggleBar/>
      {/* <MenuContact/> */}
    <Footer/>
    </>
  )
}

export default Menu