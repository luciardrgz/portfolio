import React from "react";
import Toggle from "../Toggle/Toggle";
import ".//Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Lucia</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li> Home</li>
            </Link>

            <Link spy={true} to="Present" smooth={true}>
              <li>Present</li>
            </Link>

            <Link spy={true} to="Circles" smooth={true}>
              <li>Future</li>
            </Link>

            <Link spy={true} to="Projects" smooth={true}>
              <li>Projects</li>
            </Link>

            {/*
            <Link spy={true} to="Testimonials" smooth={true}>
              <li>Testimonials</li>
            </Link> --- Section that could be useful someday :)*/}

            <Link spy={true} to="Contact" smooth={true}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
