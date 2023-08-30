import React from "react";
import { Link } from "react-router-dom";
import qrest from "../images/qrest.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top" style={{ backgroundColor: "black" }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            <img src={qrest} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu className="text-light" />
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
          <div
            className="offcanvas offcanvas-end"
            style={{ backgroundColor: "#000", color: "#fff" }}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Qrest
              </h5>
              <div
                style={{ cursor: "pointer" }}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/work" className="nav-link text-light" href="#">
                    WORK
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link text-light" href="#">
                    SERVICES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link text-light" href="#">
                    BLOG
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-light" href="#">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link text-light" href="#">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid d-flex">
          <Link to="/" className="navbar-brand" href="#">
            <img src={qrest} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/work" className="nav-link" href="#">
                  WORK
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link" href="#">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link" href="#">
                  BLOG
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" href="#">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" href="#">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
