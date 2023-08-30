import React from "react";
import "../css/serviceBody.css";
import { BsCheckSquare } from "react-icons/bs";

const SoftwareBody = () => {
  return (
    <div className="serviceBody">
      <div className="contents container">
        <div className="num">
          <h1>02</h1>
        </div>
        <div className="stages">
          <div className="stage">
            <div className="d-flex align-items-center">
              <h3>Software Development</h3>
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
              <h4>Web Application</h4>
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
              <h4>Mobile Application</h4>
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
              <h4>UI/UX Design</h4>
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
              <h4>E-Commerce</h4>
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
              <h4>Maintenance</h4>
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

export default SoftwareBody;
