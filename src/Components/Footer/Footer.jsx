import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>If you made it this far down, thank you for doing so 💛</span>

        <div className="f-icons">
          <a
            href="https://www.linkedin.com/in/luciardrgz/"
            target="_BLANK"
            rel="noreferrer"
          >
            <Linkedin color="white" size="3em" />
          </a>

          <a
            href="https://github.com/luciardrgz"
            target="_BLANK"
            rel="noreferrer"
          >
            <Github color="white" size="3em" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
