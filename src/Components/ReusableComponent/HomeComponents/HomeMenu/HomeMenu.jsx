import React from 'react'
import './HomeMenu.css'

function HomeMenu() {
  return (
    <>
    <div className="menus">
  <div className="M1">
    <p>Our Menu</p>
    <h2>DIscover  our Menu</h2>
  </div>

  <div className="MenuItem">
      <div className="item">
        <img src="assets/images/menuItem1.png" alt="" width="250px"/>
        <ul className="MenuList">
            <li><span id="plus">+</span> classNameic Tomato Basil Soup</li>
            <li><span id="plus">+</span> Creamy Mushroom Soup</li>
            <li><span id="plus">+</span> Chicken Tortilla Soup</li>
            <li><span id="plus">+</span> French Onion Soup</li>
            <li><span id="plus">+</span> Lentil and Vegetable Soup</li>
        </ul>
      </div>

      <div className="cl2">
        <h2>Passion on <br/>  
          Every Plate</h2>
      </div>
  </div>

    <button className="explore-btn">explore more</button>
</div>
    </>
  )
}

export default HomeMenu