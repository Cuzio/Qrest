import React from "react";
import style from "../images/style.png";
import style1 from "../images/style1.png";
import "../css/innovation.css";

const Style = () => {
  return (
    <div>
      <div className="innovation-grouping">
        <div className="innovation">
          <img src={style} alt="" className="innovation-image" />
          <h1>Style</h1>
          <p>Are you ready for the new generation of marketing?</p>
        </div>
        <div className="innovation1">
          <img src={style1} alt="" className="innovation1-image" />
        </div>
      </div>
    </div>
  );
};

export default Style;
