import React from "react";
import Toggle from "../Toggle/Toggle";
import { themeContext } from "../../Context";
import { useContext } from "react";
import ".//Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="n-wrapper"
      style={{ background: darkMode ? "#000209e5" : "#e9e9e9ea" }}
    >
      <div className="n-left">
        <div className="n-name">Lucia</div>
        <Toggle />
      </div>

      <div className="n-right">
        <ul>
          <Link spy={true} to="Home" smooth={true} activeClass="activeClass">
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
  );
};

export default Navbar;
