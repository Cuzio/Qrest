import React, { useState, useEffect } from "react";
import "../css/hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const words = ["style", "Innovations", "strategy"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <h1>Where creativity meets {words[currentIndex]}</h1>
      <button className="btns">
        <Link to="/work" className="btns">
          Explore our creativity
        </Link>
      </button>
    </div>
  );
};

export default Hero;
