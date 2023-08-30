import React from "react";
import innovation from "../images/innovation.png";
import innovation1 from "../images/innovation1.png";
import "../css/innovation.css";

const Innovation = () => {
  return (
    <div>
      <div className="innovation-grouping">
        <div className="innovation">
          <img src={innovation} alt="" className="innovation-image" />
          <h1>Innovations</h1>
          <p>Are you ready for the new generation of marketing?</p>
        </div>
        <div className="innovation1">
          <img src={innovation1} alt="" className="innovation1-image" />
        </div>
      </div>
    </div>
  );
};

export default Innovation;
