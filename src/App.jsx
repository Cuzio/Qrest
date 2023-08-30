import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import Qwikserve from "./pages/Qwikserve";
import Catapult from "./pages/Catapult";
import Brand from "./pages/Brand";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/catapult" element={<Catapult />} />
          <Route path="/qwikserve" element={<Qwikserve />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
