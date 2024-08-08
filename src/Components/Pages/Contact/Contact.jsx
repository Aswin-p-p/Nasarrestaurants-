import React from 'react'
import Navbar from '../../ReusableComponent/Header/Navbar'
import Footer from '../../ReusableComponent/Footer/Footer'
import ContactBanner from '../../ReusableComponent/ContactComponents/ContactBanner/ContactBanner'
import ContactContact from '../../ReusableComponent/ContactComponents/ContactContact/ContactContact'
import ContactLocation from '../../ReusableComponent/ContactComponents/ContactLocation/ContactLocation'

function Contact() {
  return (
   <>
   <Navbar/>
   <ContactBanner/>
   <ContactContact/>
   <ContactLocation/>
   <Footer/>
   </>
  )
}

export default Contact