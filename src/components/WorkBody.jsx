import React from "react";
import catapult1 from "../images/catapult-blue.png";
import catapult2 from "../images/catapult-white.png";
import phones from "../images/phones.png";
import { Link } from "react-router-dom";
import "../css/workBody.css";

const WorkBody = () => {
  return (
    <div>
      <div className="workProducts">
        <div className="">
          <Link to="/catapult" className="catapult1" href="#">
            <img src={catapult1} alt="" className="catapult" />
            <h1>Catapult</h1>
          </Link>{" "}
          <p>A move in the right direction</p>
        </div>
        <div className="">
          <Link to="/catapult" className="catapult1" href="#">
            <img src={catapult2} alt="" className="catapult" />
            <h1>Catapult</h1>
          </Link>{" "}
          <p>A move in the right direction</p>
        </div>
      </div>
      <Link to="/qwikserve" className="qwikserve1" href="#">
        <img src={phones} alt="" className="qwikserve" />
        <h1>Qwikserve</h1>
      </Link>
      <p className="qwikserve-p">Full potential from every store</p>
    </div>
  );
};

export default WorkBody;
