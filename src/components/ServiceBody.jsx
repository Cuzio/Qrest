import React from "react";
import "../css/serviceBody.css";
import { BsCheckSquare } from "react-icons/bs";

const ServiceBody = () => {
  return (
    <div className="serviceBody">
      <div className="contents container">
        <div className="num">
          <h1>01</h1>
        </div>
        <div className="stages">
          <div className="stage">
            <div className="d-flex align-items-center">
              <h3>Brand & Design</h3>
              <hr />
            </div>
            <p className="design-content">
              We leverage cutting-edge strategies supported by solid data from
              critical sources, to create integrated marketing plans that
              feature easy-to-measure results.
            </p>
          </div>
          <div className="stage">
            <div className="check d-flex align-items-center">
              <BsCheckSquare className="mb-2" />
              <h4>Brand Strategy & Positioning</h4>
            </div>
            <p>
              We leverage cutting-edge strategies supported by solid data from
              critical sources, to create integrated marketing plans that
              feature easy-to-measure results.
            </p>
          </div>
          <div className="stage">
            <div className="check d-flex align-items-center">
              <BsCheckSquare className="mb-2" />
              <h4>Collateral & Packaging</h4>
            </div>
            <p>
              We leverage cutting-edge strategies supported by solid data from
              critical sources, to create integrated marketing plans that
              feature easy-to-measure results.
            </p>
          </div>
          <div className="stage">
            <div className="check d-flex align-items-center">
              <BsCheckSquare className="mb-2" />
              <h4>Retail Branding</h4>
            </div>
            <p>
              We leverage cutting-edge strategies supported by solid data from
              critical sources, to create integrated marketing plans that
              feature easy-to-measure results.
            </p>
          </div>
          <div className="stage">
            <div className="check d-flex align-items-center">
              <BsCheckSquare className="mb-2" />
              <h4>Identity Design</h4>
            </div>
            <p>
              We leverage cutting-edge strategies supported by solid data from
              critical sources, to create integrated marketing plans that
              feature easy-to-measure results.
            </p>
          </div>
          <div className="stage">
            <div className="check d-flex align-items-center">
              <BsCheckSquare className="mb-2" />
              <h4>Motion Graphics & Animation</h4>
            </div>
            <p>
              We leverage cutting-edge strategies supported by solid data from
              critical sources, to create integrated marketing plans that
              feature easy-to-measure results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBody;
