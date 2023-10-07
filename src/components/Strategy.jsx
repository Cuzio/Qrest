import React from "react";
import strategy from "../images/strategy.png";
import strategy1 from "../images/strategy1.png";
import "../css/innovation.css";

const Strategy = () => {
  return (
    <div>
      <div className="innovation-grouping">
        <div className="innovation">
          <img src={strategy} alt="" className="innovation-image" />
          <h1>Strategy</h1>
          <p>Are you ready for the new generation of marketing?</p>
        </div>
        <div className="innovation1">
          <img src={strategy1} alt="" className="innovation1-image" />
        </div>
      </div>
    </div>
  );
};

export default Strategy;
