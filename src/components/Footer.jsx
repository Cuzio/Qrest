import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import "../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="book text-center">
          <h1>Book a consultation with us today</h1>
          <p>
            At Qrest, we believe that creativity and strategy go hand in hand.
            Our team of designers, developers, and marketing experts work
            collaboratively to deliver unique products
          </p>
          <p>Umuahia, Abia State, Nigeria</p>
          <button className="btnz">
            <Link to="/contact" className="btnz">
              Book a Consultation
            </Link>{" "}
          </button>
        </div>
      </div>
      <div className="foot py-5">
        <div className="copy">
          <p>Copyright © 2023 Qrest.ng | Powered by</p>
        </div>
        <div className="socialz">
          <div className="socials d-flex">
            <Link
              to="https://instagram.com/qrest_design_agency?igshid=MzNlNGNkZWQ4Mg==
"
              className="social"
            >
              <BsInstagram className="social" />
            </Link>
            <Link to="" className="social">
              {" "}
              <FaFacebookSquare className="social" />
            </Link>
            <Link
              to="https://twitter.com/qrest_d_agency?t=zWIz2HECIfWa-pikpFv0lw&s=09
"
              className="social"
            >
              {" "}
              <BsTwitter className="social" />
            </Link>
            <Link to="" className="social">
              <FaLinkedinIn className="social" />
            </Link>
          </div>
        </div>
        <div className="copy">
          <p>martins@qrest.ng</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
