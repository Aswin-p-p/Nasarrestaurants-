import React, { useState } from "react";
import "./Cafeteria.css"; // Add CSS styles for the flipping effect.

const Cafeteria = () => {
  const [currentPageCafeteria, setCurrentPageCafeteria] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const images = [
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0001_9_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0002_10_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0003_11_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0004_12_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0005_13_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0006_14_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0007_15_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0008_16_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0009_17_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0010_18_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0011_19_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0012_20_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0013_21_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0014_22_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0015_23_11zon.jpg",
    "assets/cafeteria/Nasar-Cafeteria-Menu-2_page-0016_24_11zon.jpg",
   

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
