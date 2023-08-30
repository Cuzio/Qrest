import React from "react";
import "../css/heroSoftware.css";
import { Link } from "react-router-dom";

const HeroSoftware = () => {
  return (
    <div className="heroSoftware">
      <div className="content">
        <h1>SERVICES</h1>
        <div className="products">
          <Link to="/services" className="brand1" href="#">
            Branding
          </Link>{" "}
          <Link to="/software-development" className="software1" href="#">
            Software development
          </Link>{" "}
          <Link to="/digital-marketing" className="digital1" href="#">
            Digital marketing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSoftware;
