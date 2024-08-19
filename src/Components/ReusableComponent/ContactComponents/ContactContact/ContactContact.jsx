import React from 'react'
import './ContactContact.css'
import useForm from '../../Forms/ReusableForm/UseForms';

function ContactContact() {
  const { formData, formErrors, loading, handleInputChange,handleBlur, handleSubmit } = useForm();

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
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
             
            </div>
            {formErrors.name && <small className="errorer">{formErrors.name}</small>}
            <div className="form-row">
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
           
            </div>
            {formErrors.location && <small className="errorer">{formErrors.location}</small>}
            <div className="form-row">
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              
            </div>
            {formErrors.email && <small className="errorer">{formErrors.email}</small>}
        </div>

          <div className="CT-form"> 
            <div className="form-row">
            <input
                type="text"
                name="phoneNumber"
                placeholder="Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
             
            </div>
            {formErrors.phoneNumber && <small className="errorer">{formErrors.phoneNumber}</small>}
            <div className="form-row">
            <textarea
                name="feedback"
                placeholder="Your Feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
             
            </div>
            {formErrors.feedback && <small className="errorer">{formErrors.feedback}</small>}
          </div>
            
        </div>
    </div>

    <div className="msg-btn"><button onClick={handleSubmit}>Send my message</button></div>

    </div>
    </>
  )
}

export default ContactContact