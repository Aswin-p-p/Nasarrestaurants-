import React from 'react'
import './ContactContact.css'

function ContactContact() {
  return (
    <>
    <div className="contactUs">
  <div className="CT_details">
    <img src="assets/contactimg/bird.png" alt=""/>
      <div className="CT-row">
        <h1>Contact</h1>
        <p>We're Just a Message Away</p>
      </div>
  </div>

  <div className="CT-message">
      <h3>Get in Touch with Us</h3>
      <p>We’re here to help and answer any question you might have. We look forward to hearing from you. Please fill out the form below and our team will get back to you as soon as possible.</p>
  
      <div className="CTform-container">
        <div className="CT-form">
            <div className="form-row">
                <input type="text" placeholder="Your Name"/>
            </div>
            <div className="form-row">
                <input type="text" placeholder="Location"/>
            </div>
            <div className="form-row">
                <input type="email" placeholder="Your Email"/>
            </div>
        </div>

          <div className="CT-form"> 
            <div className="form-row">
                <input type="text" placeholder="Your Phone Number"/>
            </div>
            <div className="form-row">
                <textarea placeholder="Your Feedback"></textarea>
            </div>
          </div>
            
        </div>
    </div>

    <div className="msg-btn"><button>Send my message</button></div>

    </div>
    </>
  )
}

export default ContactContact