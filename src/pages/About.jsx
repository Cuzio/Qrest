import React from "react";
import HeroAbout from "../components/HeroAbout";
import AboutUs from "../components/AboutUs";
import AboutUsBody from "../components/AboutUsBody";
import Vision from "../components/Vision";
import Team from "../components/Team";

const About = () => {
  return (
    <div>
      <HeroAbout />
      <AboutUs />
      <Team />
      <AboutUsBody />
      {/* <Vision /> */}
    </div>
  );
};

export default About;
