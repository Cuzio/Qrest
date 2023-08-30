import React from "react";
import { Link } from "react-router-dom";
import brand from "../images/brand.png";
import vr from "../images/vr.png";
import laptop from "../images/laptop.png";
import headset from "../images/headset.png";
import figma from "../images/figma.png";
import "../css/blogBody.css";

const BlogBody = () => {
  return (
    <div>
      <div className="blog">
        <div className="blog-service">
          <div className="blog-type">
            <div className="card">
              <img src={brand} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title brand-h">What is branding?</h5>
                <p className="card-text">
                  Branding is about putting yourself out there in the most
                  stylish, strategic, unique, and appealing way. Branding is
                  about creating and maintaining a unique identity for a
                  company, product, or service. It is the process of creating...
                </p>
                <Link to="/brand" href="#" className="btn btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <div className="blog-type">
            <div class="card vr-type">
              <img src={vr} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title vr-h">Blog post 2</h5>
                <p class="card-text">
                  At Crest, we believe that creativity and strategy go hand in
                  hand. Our team of designers, developers, and marketing experts
                  work collaboratively to deliver unique, compelling experiences
                  that help your brand stand out in a crowded marketplace...
                </p>
                <Link to="/" href="#" class="btn btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-service-single">
          <div className="blog-type">
            <div class="card">
              <img src={laptop} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title brand-h">Blog post 3</h5>
                <p class="card-text">
                  At Crest, we believe that creativity and strategy go hand in
                  hand. Our team of designers, developers, and marketing experts
                  work collaboratively to deliver unique, compelling experiences
                  that help your brand stand out in a crowded marketplace...
                </p>
                <Link to="/" href="#" class="btn btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-service">
          <div className="blog-type">
            <div class="card">
              <img src={headset} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title vr-h">Blog post 2</h5>
                <p class="card-text">
                  At Crest, we believe that creativity and strategy go hand in
                  hand. Our team of designers, developers, and marketing experts
                  work collaboratively to deliver unique, compelling experiences
                  that help your brand stand out in a crowded marketplace...
                </p>
                <Link to="/" href="#" class="btn btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-type">
            <div class="card">
              <img src={figma} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title vr-h">Blog post 2</h5>
                <p class="card-text">
                  At Crest, we believe that creativity and strategy go hand in
                  hand. Our team of designers, developers, and marketing experts
                  work collaboratively to deliver unique, compelling experiences
                  that help your brand stand out in a crowded marketplace...
                </p>
                <Link to="/" href="#" class="btn btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
