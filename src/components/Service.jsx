import React, { useEffect } from "react";
import "../css/service.css";
import AOS from "aos";
import "aos/dist/aos.js";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div className="offer">
      <p>See services we offer</p>
      <h1>What we do</h1>
      <div className="push">
        <div className="services row">
          <div className="explain col-sm-6" data-aos="flip-left">
            <h4>Branding and Design</h4>
            <p>
              Position your brand to reflect your values and create designs that
              connects.
            </p>
            <hr />
            <p>
              Brand Strategy & Positioning <br />
              Collateral & Packaging <br />
              Retail Branding <br />
              Identity Design <br />
              Motion Graphics & Animation
            </p>
          </div>
          <div className="number col-sm-6" data-aos="flip-right">
            <h1>01</h1>
          </div>
        </div>
        <div className="services row">
          <div className="number numbers col-sm-6" data-aos="zoom-in">
            <h1>02</h1>
          </div>
          <div className="explain col-sm-6" data-aos="zoom-in">
            <h4>Software Development</h4>
            <p>
              Turn your ideas into viable solutions through scalable
              user-centric products.
            </p>
            <hr />
            <p>
              Web Application <br />
              Mobile Applications <br />
              UI/UX Design <br />
              E-Commerce <br />
              Maintenance
            </p>
          </div>
        </div>
        <div className="services row">
          <div
            className="explain col-sm-6"
            data-aos="fade-right"
            data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
          >
            <h4>Digital Marketing</h4>
            <p>
              Optimize conversions through marketing strategies tailored for
              your brand’s visibility.
            </p>
            <hr />
            <p>
              Content creation <br />
              Marketing campaigns <br />
              Social media <br />
              Copywriting <br />
              SEO
            </p>
          </div>
          <div
            className="number col-sm-6"
            data-aos="fade-left"
            data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
          >
            <h1>03</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
