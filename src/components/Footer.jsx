import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import "../css/footer.css";

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
          <button className="btnz">Book a Consultation</button>
        </div>
      </div>
      <div className="foot py-5">
        <div className="copy">
          <p>Copyright © 2023 Qrest.ng | Powered by</p>
        </div>
        <div className="socialz">
          <div className="socials d-flex">
            <BsInstagram className="social" />
            <FaFacebookSquare className="social" />
            <BsTwitter className="social" />
            <FaLinkedinIn className="social" />
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
