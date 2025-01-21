import React from 'react'
import './MenuContact.css'

function MenuContact() {
  return (
   <>
   <div className="menuContainer">
  <div className="ME_details">
      <div className="ME-row">
        <h1>Menu</h1>
        <p>Passion for Flavor, Commitment <br/>
          to Quality</p>
      </div>
      <img src="assets/menuimg/fishImg.png" alt=""/>
  </div>
  </div>


  <div className="menu-container">
    <div className="sidebar">
        <h1>STARTERS</h1>
            <div className="image-container">
            <img src="assets/menuimg/ME-item1.png" alt="" className="item1"/>
        </div>
    </div>
    
    
        <div className="me-items">
            <div className="me-itemList">
                <p>Hello bonda <br/><span>Sub details line goes here</span></p>
                  <div className='lineme'></div>
                <p className="price">AED 11.00</p>
            </div>
            
            <div className="me-itemList">
                <p>Vegetable spring rolls <br/><span>Sub details line goes here</span></p>
                <div className='lineme'></div>
                <p className="price">AED 07.00</p>
            </div>
            
            <div className="me-itemList">
                <p>Paneer Pakora <br/><span>Sub details line goes here</span></p>
                <div className='lineme'></div>
                <p className="price">AED 11.00</p>
            </div>
            
            <div className="me-itemList">
                <p>Microwave paneer tikka <br/><span>Sub details line goes here</span></p>
                <div className='lineme'></div>
                <p className="price">AED 07.00</p>
            </div>
            
        </div>
 
</div>

<div className="menu-container secondList">
      <div className="me-items row2">
          <div className="me-itemList">
              <p>Prickly Pear Tonic <br/><span>Sub details line goes here</span></p>
                <div className='lineme'></div>
              <p className="price">AED 11.00</p>
          </div>
          
          <div className="me-itemList">
              <p>Chicha Morada<br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p className="price">AED 07.00</p>
          </div>
          
          <div className="me-itemList">
              <p>Better Boy	 <br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p className="price">AED 11.00</p>
          </div>
          
          <div className="me-itemList">
              <p>Tommy's Margarita <br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p className="price">AED 07.00</p>
          </div>       
      </div>

      <div className="sidebar itemImg">
        
            <div className="image-container">
            <img src="assets/menuimg/ME-item2.png" alt="" className="item2"/>
        </div>
        <h1>Beverages</h1>
    </div>

</div>

<div className="menu-container">
  <div className="sidebar">
      <h1>Main <br/>
        Courses</h1>
          <div className="image-container">
          <img src="assets/menuimg/ME-item3.png" alt="" className="item1"/>
      </div>
  </div>
  
  
      <div className="me-items">
          <div className="me-itemList">
              <p>Hello bonda <br/><span>Sub details line goes here</span></p>
                <div className='lineme'></div>
              <p className="price">AED 11.00</p>
          </div>
          
          <div className="me-itemList">
              <p>Vegetable spring rolls <br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p className="price">AED 07.00</p>
          </div>
          
          <div className="me-itemList">
              <p>Paneer Pakora <br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p className="price">AED 11.00</p>
          </div>
          
          <div className="me-itemList">
              <p>Microwave paneer tikka <br/><span>Sub details line goes here</span></p>
              <div className='lineme'></div>
              <p className="price">AED 07.00</p>
          </div>
          
      </div>

</div>
   </>
  )
}

export default MenuContact