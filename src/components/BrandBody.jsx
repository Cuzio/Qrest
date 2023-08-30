import React from "react";
import { BiArrowBack } from "react-icons/bi";
import brand from "../images/brand-big.png";
import jot from "../images/jot.png";
import iphone from "../images/iphone.png";
import "../css/brandbody.css";
import { Link } from "react-router-dom";

const BrandBody = () => {
  return (
    <div className="brandbody">
      <div className="container">
        <Link to="/blog" href="#">
          <BiArrowBack className="arrow-back" />
        </Link>
        <div className="question">
          <h1>What is branding?</h1>
          <p>12th May 2022</p>
          <img src={brand} alt="" />
        </div>
        <div className="answer">
          <p>Hello,</p>
          <p>
            Branding is about putting yourself out there in the most stylish,
            strategic, unique, and appealing way.
          </p>
          <p>
            Branding is about creating and maintaining a unique identity for a
            company, product, or service. It is the process of creating a name,
            symbol, or design that identifies and differentiates a product or
            service from others.
          </p>
          <p>
            The overall goal of branding is to create a strong and recognizable
            brand that resonates, creates a positive image in the minds of
            customers, and drives sales. So now I’m sure you’re getting a hang
            of what branding is, it’s not rocket science after all right?
          </p>
        </div>
        <div className="branding">
          <h3>Components of branding:</h3>
          <h5>Brand Name</h5>
          <p>The name of the company, product, or service</p>
          <img src={jot} alt="" />
          <p>
            The name of the brand is one of the most important elements of
            branding. It should be unique, memorable, and easy to pronounce.
          </p>
        </div>
        <div className="brand-logo">
          <h3>Brand Logo</h3>
          <p>
            A logo is a symbol or design that represents the brand. It should be
            simple, easy to recognize, and consistent with the brand's overall
            values.
          </p>
          <img src={iphone} alt="" />
        </div>
        <div className="brand-identity">
          <h3>Brand Identity</h3>
          <p>
            A brand's identity includes all the visual and verbal elements used
            to communicate the brand, such as the colour scheme, typography, and
            tone of voice.
          </p>
          <p>
            <span> Brand values:</span> The values and beliefs that the brand
            represents.
          </p>
          <p>
            <span>Brand personality:</span> The personality traits that are
            associated with the brand, such as being friendly, reliable, or
            adventurous.
          </p>
          <p>
            <span>Brand messaging:</span> Brand messaging is the language and
            messaging used to communicate the brand's value proposition and core
            values.
          </p>
          <p>
            <span>Brand reputation:</span> A brand's reputation is the overall
            perception of the brand in the market, it is built by consistent
            delivery of quality products and services, customer satisfaction,
            and positive interactions with customers.
          </p>
          <p>
            <span>Brand loyalty:</span> Brand loyalty refers to the tendency of
            customers to continue to purchase a product or service from the same
            brand over time.
          </p>
          <video src=""></video>
        </div>
        <div className="conclusion">
          <h2>Conclusion:</h2>
          <p>Now you understand fully what branding is all about right?</p>
          <p>
            Here's one more important takeaway; creating a successful brand
            requires a well-planned and executed branding strategy.
          </p>
          <p>
            This includes researching the market and competition, defining the
            target audience, developing a unique value proposition, creating a
            consistent brand identity, and consistently communicating the brand
            message through various marketing channels such as advertising,
            public relations, and social media.
          </p>
          <p>
            No doubt, branding is a process that takes time and effort, but with
            an effective branding approach and brand strategy, one can establish
            a strong emotional connection with customers, increase brand
            awareness, and ultimately drive sales and business growth.
          </p>
          <p>
            Do you want that unique brand for your business? Qrest Design Agency
            can help you achieve your business goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandBody;
