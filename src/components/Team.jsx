import React from "react";
import "../css/team.css";
import martins from "../images/martins.png";
import stanley from "../images/stanley.png";
import ruth from "../images/ruth.png";
import sunday from "../images/sunday.png";
import aronu from "../images/aronu.png";
import maryam from "../images/maryam.png";
import colman from "../images/colman.png";
import max from "../images/max.jpg";
import chijioke from "../images/chijioke.png";

const Team = () => {
  return (
    <div className="team">
      <div className="our-team">
        <h2>Meet our team</h2>
        {/* <p>
          At Qrest, we believe that creativity and strategy go hand in hand. Our
          team of designers, developers, and marketing experts work
          collaboratively to deliver unique, compelling experiences that help
          your brand stand out in a crowded marketplace.
        </p> */}
      </div>
      <div class="containers">
        <div>
          <div class="image-detail">
            <h2>Okechukwu Martins</h2>
            <span>Product Designer</span>
          </div>
        </div>
        <div>
          <div class="image-detail">
            <h2>Chukwuma Stanley</h2>
            <span>Product Designer</span>
          </div>
        </div>
        <div>
          <div class="image-detail">
            <h2>Onokala Ruth</h2>
            <span>Content Writer|Copywriter</span>
          </div>
        </div>
        <div>
          <div class="image-detail">
            <h2>Obi Sunday</h2>
            <span>Graphic Designer</span>
          </div>
        </div>
        <div>
          <div class="image-detail">
            <h2>Chukwuezugo Aronu</h2>
            <span>Digital Marketer</span>
          </div>
        </div>
        <div>
          <div class="image-detail">
            <h2>Akudo Maryam</h2>
            <span>Product Designer</span>
          </div>
        </div>
        <div>
          <div class="image-detail">
            <h2>Colman Terseer</h2>
            <span>Mobile App Developer</span>
          </div>
        </div>
        <div>
          <div class="image-detail">
            <h2>Maxwell Okoye</h2>
            <span>Front-End Developer</span>
          </div>
        </div>
        <div>
          <div class="image-detail">
            <h2>Joshua Chijioke</h2>
            <span>Social Media Marketer</span>
          </div>
        </div>
        <div>
          <div class="image-detail">
            <h2>Onyebuchi Chima</h2>
            <span>Graphic Designer</span>
          </div>
        </div>
      </div>
      <div className="hidden">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={martins} class="d-block w-100 caro-image" alt="..." />
              <h2>Okechukwu Martins</h2>
              <p>Product Designer</p>
            </div>
            <div class="carousel-item">
              <img src={stanley} class="d-block w-100 caro-image" alt="..." />
              <h2>Chukwuma Stanley</h2>
              <p>Product Designer</p>
            </div>
            <div class="carousel-item">
              <img src={ruth} class="d-block w-100 caro-image" alt="..." />
              <h2>Onokala Ruth</h2>
              <p>Content Writer|Copywriter</p>
            </div>
            <div class="carousel-item">
              <img src={sunday} class="d-block w-100 caro-image" alt="..." />
              <h2>Obi Sunday</h2>
              <p>Graphic Designer</p>
            </div>
            <div class="carousel-item">
              <img src={aronu} class="d-block w-100 caro-image" alt="..." />
              <h2>Chukwuezugo Aronu</h2>
              <p>Digital Marketer</p>
            </div>
            <div class="carousel-item">
              <img src={maryam} class="d-block w-100 caro-image" alt="..." />
              <h2>Akudo Maryam</h2>
              <p>Product Designer</p>
            </div>
            <div class="carousel-item">
              <img src={colman} class="d-block w-100 caro-image" alt="..." />
              <h2>Colman Terseer</h2>
              <p>Mobile App Developer</p>
            </div>
            <div class="carousel-item">
              <img src={max} class="d-block w-100 caro-image" alt="..." />
              <h2>Maxwell Okoye</h2>
              <p>Front-End Developer</p>
            </div>
            <div class="carousel-item">
              <img src={chijioke} class="d-block w-100 caro-image" alt="..." />
              <h2>Joshua Chijioke</h2>
              <p>Social Media Marketer</p>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
