import React from "react";
import catapult1 from "../images/catapult-blue.png";
import catapult2 from "../images/catapult-white.png";
import cata from "../images/cata.png";
import cata1 from "../images/cata1.png";
import cata2 from "../images/cata-swag.png";
import "../css/catapultBody.css";

const CatapultBody = () => {
  return (
    <div>
      <div>
        <img src={catapult1} alt="" className="cataput" />
        <div className="gray">
          <div className="cata-direction">
            <h4>A move in the right direction</h4>
            <p>
              Established transport solutions provider wanted a name and logo to
              strengthen their position within the competitive world of
              transportation brands. The brand name “Catalpult” stands for more
              than just a transportation. moving goods and people from one
              location to the other.{" "}
            </p>
          </div>
          <div>
            <div>
              <h6>Services</h6>
              <p>
                Brand Identity <br />
                Brand naming <br />
                Logo design
              </p>
            </div>
            <div>
              <h6>Sector</h6>
              <p>Transportation</p>
            </div>
          </div>
        </div>
        <div className="cata-position">
          <img src={catapult2} alt="" className="cataput2" />
          <h4>
            “Catapult” reflects their confident position within the transport
            world.{" "}
          </h4>
        </div>
        <div className="cata">
          <img src={cata} alt="" className="cata1" />
          <img src={cata1} alt="" className="cata1" />
        </div>
        <h3 className="cata2-text">
          By understanding the goals and aims of the brand, we were able to name
          and design a logo that best represent the brand.
        </h3>
        <div>
          <img src={cata2} alt="" className="cata2" />
        </div>
        <div className="blue"></div>
      </div>
    </div>
  );
};

export default CatapultBody;
