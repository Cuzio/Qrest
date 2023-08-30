import React from "react";
import phones from "../images/phones.png";
import "../css/work.css";

const Work = () => {
  return (
    <div className="work">
      <p>See our creativity</p>
      <h2>Our work</h2>
      <img src={phones} alt="" />
    </div>
  );
};

export default Work;
