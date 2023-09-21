import React from "react";
import quote from "../images/vector.png";
import "../css/client.css";

const Client = () => {
  return (
    <div className="client">
      <div className="pick row">
        <div className="col-sm-3"></div>
        <div className="intro col-sm-8">
          <h3>Our Clients</h3>
        </div>
      </div>
      <div className="pick ">
        <div className="quote">
          <img src={quote} alt="" className="quote-image" />
        </div>
        <div className="testimory">
          <h4>
            The best design agency. Giving top notch services. Thanks to Qrest
            and it’s creative team for an outstanding job on Qwikserve delivery
            app. Branding, Designing and development, each phase was
            collaborative and i loved the end result.
          </h4>
          <p>~ CEO at Qwikserve </p>
        </div>
      </div>
    </div>
  );
};

export default Client;
