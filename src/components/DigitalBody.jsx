import React from "react";
import "../css/serviceBody.css";
import { BsCheckSquare } from "react-icons/bs";

const DigitalBody = () => {
  return (
    <div className="serviceBody">
      <div className="contents container">
        <div className="num">
          <h1>03</h1>
        </div>
        <div className="stages">
          <div className="stage">
            <div className="d-flex align-items-center">
              <h3>Digital Marketing</h3>
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
              <h4>Content Creation</h4>
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
              <h4>Marketing Campaigns</h4>
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
              <h4>Social Media</h4>
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
              <h4>Copywriting</h4>
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
              <h4>SEO</h4>
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

export default DigitalBody;
