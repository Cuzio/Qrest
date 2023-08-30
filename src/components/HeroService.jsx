import React from "react";
import "../css/heroServices.css";
import { Link } from "react-router-dom";

const HeroService = () => {
  return (
    <div className="heroService">
      <div className="content">
        <h1>SERVICES</h1>
        <div className="products">
          <Link to="/services" className="brand" href="#">
            Branding
          </Link>{" "}
          <Link to="/software-development" className="software" href="#">
            Software development
          </Link>{" "}
          <Link to="/digital-marketing" className="digital" href="#">
            Digital marketing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroService;
