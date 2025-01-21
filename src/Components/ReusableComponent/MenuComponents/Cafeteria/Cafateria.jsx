import React, { useState } from "react";
import "./Cafeteria.css"; // Add CSS styles for the flipping effect.

const Cafeteria = () => {
  const [currentPageCafeteria, setCurrentPageCafeteria] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const images = [
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0001.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0002.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0003.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0004.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0005.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0006.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0007.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0008.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0009.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0010.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0011.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0012.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0013.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0014.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0015.jpg",
    "assets/cafteria/Nasar Cafeteria Menu-2_page-0016.jpg",
   

  ];

  const handleNext = () => {
    if (currentPageCafeteria < images.length - 1) {
      setCurrentPageCafeteria((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPageCafeteria > 0) {
      setCurrentPageCafeteria((prev) => prev - 1);
    }
  };

  const handleDoubleClick = () => {
    setIsZoomed((prev) => !prev); // Toggle zoom state on double click
  };

  return (
    <div className="flipper-containerCafeteria">
      <div
        className={`flipperCafeteria ${isZoomed ? "zoomed" : ""}`}
        onDoubleClick={handleDoubleClick}
      >
        <img src={images[currentPageCafeteria]} alt={`Page ${currentPageCafeteria + 1}`} />
      </div>
      <div className="controlsCafeteria left">
        <button onClick={handlePrev} disabled={currentPageCafeteria === 0}>
        &lt;
        </button>
      </div>
      <div className="controlsCafeteria right">
        <button onClick={handleNext} disabled={currentPageCafeteria === images.length - 1}>
        &gt; 
        </button>
      </div>
    </div>
  );
};

export default Cafeteria;
