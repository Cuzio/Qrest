import React from "react";
import "../css/heroDigital.css";
import { Link } from "react-router-dom";

const HeroDigital = () => {
  return (
    <div className="heroDigital">
      <div className="conte">
        <h1>SERVICES</h1>
        <div className="productzz">
          <Link to="/services" className="brand2" href="#">
            Branding
          </Link>{" "}
          <Link to="/software-development" className="software2" href="#">
            Software development
          </Link>{" "}
          <Link to="/digital-marketing" className="digital2" href="#">
            Digital marketing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroDigital;
