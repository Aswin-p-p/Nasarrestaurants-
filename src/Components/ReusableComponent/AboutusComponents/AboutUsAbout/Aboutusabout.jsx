import React from 'react'
import './Aboutusabout.css'

function Aboutusabout() {
  return (
   <>
   <div className="aboutUS">
  <div className="AB_details">
    <h1>About Us</h1>
    <h3>Culinary Excellence <br/>
      in the Heaart of Abu Dhabi</h3>
    </div>
      <div className="AB_text">
        <div className="textDetails">
      <h2>Discover Culinary Excellence <br/>
        in the Heart of Abu Dhabi</h2>
        <p>At Nasar Restaurant our mission is to create unforgettable dining experiences by offering exceptional cuisine, warm hospitality, 
          and a welcoming atmosphere. We are dedicated to sourcing the finest ingredients, supporting local farmers, and crafting dishes that 
          reflect our passion for culinary excellence. Our commitment to quality and service ensures that every guest leaves with a smile, satisfied 
          and inspired to return. Whether it's a casual meal or a special celebration, we strive to make every visit a cherished memory</p>
        </div>
        </div>
        <div className="chef_img">
          <img src="assets/aboutimg/chef.png" alt=""/>
        </div>
</div>

<div className="AB_row">
    <div className="AB_cl1">
      <p>At Nasar Restaurant, we understand that dining out is more than just a meal; it's an experience. From the moment you step through our doors, you'll be greeted with friendly smiles and attentive service. Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, we strive to make each visit unique and enjoyable.</p>

        <p>Our beautifully designed space provides the perfect backdrop for any occasion. With a comfortable ambiance and carefully curated décor, we aim to create a setting where you can relax, unwind, and savor every moment.</p>
        
        <p>Thank you for choosing Nasar Restaurant. We look forward to welcoming you and sharing our passion for great food and exceptional service.</p>
    </div>
    <div className="lineab"></div>
    <div className="cap_img"><img src="assets/aboutimg/chefCap.png" alt=""/></div>
</div>

   </>
  )
}

export default Aboutusabout