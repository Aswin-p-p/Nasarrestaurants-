import React, { useState } from "react";
import "./ToggleBar.css";
import Cafeteria from "../Cafeteria/Cafateria";
import Restaurant from "../Restaurant/Restaurant";



const ToggleBar = () => {
  const [selected, setSelected] = useState("Cafeteria");

  const handleToggle = (option) => {
    setSelected(option);
  };

  return (
    <div className="toggle-menu">
      <div className="toggle-switch">
        <button
          className={`toggle-option ${selected === "Cafeteria" ? "active" : ""}`}
          onClick={() => handleToggle("Cafeteria")}
        >
          Cafeteria
        </button>
        <button
          className={`toggle-option ${selected === "Restaurant" ? "active" : ""}`}
          onClick={() => handleToggle("Restaurant")}
        >
          Restaurant
        </button>
      </div>
      <div className="component-display">
        {selected === "Cafeteria" && <Cafeteria />}
        {selected === "Restaurant" && <Restaurant />}
      </div>
    </div>
  );
};

export default ToggleBar;

