import React from "react";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Service from "../components/Service";
import Client from "../components/Client";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Work />
      <Service />
      <Client />
    </div>
  );
};

export default Homepage;
