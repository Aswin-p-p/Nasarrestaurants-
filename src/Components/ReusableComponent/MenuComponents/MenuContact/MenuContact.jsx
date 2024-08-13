import React from 'react'
import './MenuContact.css'

function MenuContact() {
  return (
   <>
   <div class="menuContainer">
  <div class="ME_details">
      <div class="ME-row">
        <h1>Menu</h1>
        <p>Passion for Flavor, Commitment <br/>
          to Quality</p>
      </div>
      <img src="assets/menuimg/fishImg.png" alt=""/>
  </div>
  </div>


  <div class="menu-container">
    <div class="sidebar">
        <h1>STARTERS</h1>
            <div class="image-container">
            <img src="assets/menuimg/ME-item1.png" alt="" class="item1"/>
        </div>
    </div>
    
    
        <div class="me-items">
            <div class="me-itemList">
                <p>Hello bonda <br/><span>Sub details line goes here</span></p>
                  <div className='lineme'></div>
                <p class="price">AED 11.00</p>
            </div>
            
            <div class="me-itemList">
                <p>Vegetable spring rolls <br/><span>Sub details line goes here</span></p>
                <div className='lineme'></div>
                <p class="price">AED 07.00</p>
            </div>
            
            <div class="me-itemList">
                <p>Paneer Pakora <br/><span>Sub details line goes here</span></p>
                <div className='lineme'></div>
                <p class="price">AED 11.00</p>
            </div>
            
            <div class="me-itemList">
                <p>Microwave paneer tikka <br/><span>Sub details line goes here</span></p>
                <div className='lineme'></div>
                <p class="price">AED 07.00</p>
            </div>
            
        </div>
 
</div>

<div class="menu-container secondList">
      <div class="me-items row2">
          <div class="me-itemList">
              <p>Prickly Pear Tonic <br/><span>Sub details line goes here</span></p>
                <div className='lineme'></div>
              <p class="price">AED 11.00</p>
          </div>
          
          <div class="me-itemList">
              <p>Chicha Morada<br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p class="price">AED 07.00</p>
          </div>
          
          <div class="me-itemList">
              <p>Better Boy	 <br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p class="price">AED 11.00</p>
          </div>
          
          <div class="me-itemList">
              <p>Tommy's Margarita <br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p class="price">AED 07.00</p>
          </div>       
      </div>

      <div class="sidebar itemImg">
        
            <div class="image-container">
            <img src="assets/menuimg/ME-item2.png" alt="" class="item2"/>
        </div>
        <h1>Beverages</h1>
    </div>

</div>

<div class="menu-container">
  <div class="sidebar">
      <h1>Main <br/>
        Courses</h1>
          <div class="image-container">
          <img src="assets/menuimg/ME-item3.png" alt="" class="item1"/>
      </div>
  </div>
  
  
      <div class="me-items">
          <div class="me-itemList">
              <p>Hello bonda <br/><span>Sub details line goes here</span></p>
                <div className='lineme'></div>
              <p class="price">AED 11.00</p>
          </div>
          
          <div class="me-itemList">
              <p>Vegetable spring rolls <br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p class="price">AED 07.00</p>
          </div>
          
          <div class="me-itemList">
              <p>Paneer Pakora <br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p class="price">AED 11.00</p>
          </div>
          
          <div class="me-itemList">
              <p>Microwave paneer tikka <br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p class="price">AED 07.00</p>
          </div>
          
      </div>

</div>
   </>
  )
}

export default MenuContact