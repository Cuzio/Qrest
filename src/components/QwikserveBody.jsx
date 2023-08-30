import React from "react";
import qwik from "../images/qwik.png";
import phones from "../images/phones.png";
import qwik1 from "../images/qwik-white.png";
import cata1 from "../images/cata1.png";
import qwikservce from "../images/qwikservce.png";
import "../css/catapultBody.css";

const QwikserveBody = () => {
  return (
    <div>
      <div>
        <img src={phones} alt="" className="cataput" />
        <div className="gray">
          <div className="cata-direction">
            <h4>Local restaurants at your door</h4>
            <p>
              “Qwikserve logistics company” stand as an intermediary between the
              people and local restaurants/vendors. “Qwikserve” needed an app to
              enable an easy process to ordering of meal, laundry, gas,
              customized delivery. A brand efficient in delivering to your door
              Qwikly.{" "}
            </p>
          </div>
          <div>
            <div>
              <h6>Services</h6>
              <p>
                UI/UX design <br />
                Mobile Application <br />
                Web Application
              </p>
            </div>
            <div>
              <h6>Sector</h6>
              <p>Tech</p>
            </div>
          </div>
        </div>
        <div className="cata-position">
          <h4>
            “Qwikserve” reflects their confident position and specialize in
            delivery of goods to the consumer.{" "}
          </h4>
          <img src={qwik} alt="" className="cataput2" />
        </div>
        <div className="cata">
          <img src={qwik1} alt="" className="cata1" />
          {/* <img src={cata1} alt="" className="cata1" /> */}
        </div>
        <h3 className="cata2-text">
          By understanding the goals and aims of the brand, we were able to
          ideate, design and develop an app that helps the brand serve the
          people efficiently.
        </h3>
        <div>
          <img src={qwikservce} alt="" className="cata2" />
        </div>
        <div className="blue"></div>
      </div>
    </div>
  );
};

export default QwikserveBody;
