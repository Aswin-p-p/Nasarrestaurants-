import React, { useState } from "react";
import "./Restaurant.css"; // Add CSS styles for the flipping effect.

const Restaurant = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const images = [
    "assets/restaurant/Nasser-Restaurant_page-0001.jpg",
    "assets/restaurant/Nasser-Restaurant_page-0002.jpg",
    "assets/restaurant/Nasser-Restaurant_page-0003_11zon.jpg",
    "assets/restaurant/Nasser-Restaurant_page-0004_11zon.jpg",
    "assets/restaurant/Nasser-Restaurant_page-0005_11zon.jpg",
    "assets/restaurant/Nasser-Restaurant_page-0006_11zon.jpg",
    "assets/restaurant/Nasser-Restaurant_page-0007_11zon.jpg",
    "assets/restaurant/Nasser-Restaurant_page-0008_11zon.jpg",
  ];

  const handleNext = () => {
    if (currentPage < images.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleDoubleClick = () => {
    setIsZoomed((prev) => !prev); // Toggle zoom state on double click
  };

   return (
    <div className="flipper-container">
      <div
        className={`flipper ${isZoomed ? "zoomed" : ""}`}
        onDoubleClick={handleDoubleClick}
      >
        <img src={images[currentPage]} alt={`Page ${currentPage + 1}`} />
      </div>


      <div className="controlsRest left">
        <button onClick={handlePrev} disabled={currentPage === 0}>
        &lt;
        </button>
      </div>
      <div className="controlsRest right">
        <button onClick={handleNext} disabled={currentPage === images.length - 1}>
        &gt; 
        </button>
      </div>

      {/* <div className="controls">
        <button onClick={handlePrev} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentPage === images.length - 1}>
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Restaurant;
