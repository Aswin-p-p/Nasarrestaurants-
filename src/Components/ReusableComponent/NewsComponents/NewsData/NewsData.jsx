import React from 'react'
import './NewsData.css'

function NewsData() {
  return (
    <>
    
<div className="news-container">
  <div className="NW_details">
    <img src="assets/newsimg/speaker.png" alt=""/>
      <div className="NW-row">
        <h1>news @ Nasar</h1>
        <p>Your Source for the Latest Headlines</p>
      </div>
  </div>

  <div className="news-row">

    <div className="nw-Row1">
      <div className="img1"><img src="assets/newsimg/1.jpg" alt=""/></div>
      <div className="nwContent">
        <h3>Discover Culinary Excellence in the Heart of Abu Dhabi/Sample news </h3>
        <p className="date">July 12, Dubai,  2024</p>
        <p style={{opacity:'0.7'}}>At Nasar Restaurant our mission is to create unforgettable dining experiences by offering exceptional cuisine, warm hospitality, and a welcoming atmosphere. We are dedicated to sourcing the finest ingredients, supporting local farmers, and crafting dishes that reflect our passion for culinary excellence. Our commitment to quality and service ensures that every guest leaves with a smile, satisfied and inspired to return. Whether it's a casual meal or a special celebration, we strive to make every visit a cherished memory    
        </p>
        <button className="readmore">Read more</button>
      </div>
    </div>

    <div className="nw-Row1">
      <div className="img1"><img src="assets/newsimg/2.jpg" alt=""/></div>
      <div className="nwContent">
        <h3>Discover Culinary Excellence in the Heart of Abu Dhabi/Sample news </h3>
        <p className="date" >July 12, Dubai,  2024</p>
        <p style={{opacity:'0.7'}}>At Nasar Restaurant our mission is to create unforgettable dining experiences by offering exceptional cuisine, warm hospitality, and a welcoming atmosphere. We are dedicated to sourcing the finest ingredients, supporting local farmers, and crafting dishes that reflect our passion for culinary excellence. Our commitment to quality and service ensures that every guest leaves with a smile, satisfied and inspired to return. Whether it's a casual meal or a special celebration, we strive to make every visit a cherished memory    
        </p>
        <button className="readmore">Read more</button>
      </div>
    </div>

    <div className="nw-Row1">
      <div className="img1"><img src="assets/newsimg/3.jpg" alt=""/></div>
      <div className="nwContent">
        <h3>Discover Culinary Excellence in the Heart of Abu Dhabi/Sample news </h3>
        <p className="date">July 12, Dubai,  2024</p>
        <p style={{opacity:'0.7'}}>At Nasar Restaurant our mission is to create unforgettable dining experiences by offering exceptional cuisine, warm hospitality, and a welcoming atmosphere. We are dedicated to sourcing the finest ingredients, supporting local farmers, and crafting dishes that reflect our passion for culinary excellence. Our commitment to quality and service ensures that every guest leaves with a smile, satisfied and inspired to return. Whether it's a casual meal or a special celebration, we strive to make every visit a cherished memory    
        </p>
        <button className="readmore">Read more</button>
      </div>
    </div>
    
  </div>

</div>
    </>
  )
}

export default NewsData