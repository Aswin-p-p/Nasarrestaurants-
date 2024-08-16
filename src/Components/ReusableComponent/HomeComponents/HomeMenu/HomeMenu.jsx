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
        <ul class="MenuList">
            <li><div id="plus">+</div><div> Classic Tomato Basil Soup</div></li>
            <li><div id="plus">+</div><div> Creamy Mushroom Soup</div></li>
            <li><div id="plus">+</div><div> Chicken Tortilla Soup</div></li>
            <li><div id="plus">+</div><div> French Onion Soup</div></li>
            <li><div id="plus">+</div><div> Lentil and Vegetable Soup</div></li>
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