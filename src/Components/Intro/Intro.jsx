import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import WinkEmoji from "../../img/wink.gif";
import Earth from "../../img/earth.gif";
import CV from "../../img/cv.png";
import HappyEmoji from "../../img/happy.gif";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="Home">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi there! I'm</span>
          <span>Lucia Rodriguez</span>
          <span style={{ color: darkMode ? "darkGray" : "" }}>
            Java <b>+</b> SpringBoot Backend Developer
          </span>
        </div>

        <div className="i-icons">
          <a
            href="https://github.com/luciardrgz"
            target="_BLANK"
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>

          <a
            href="https://www.linkedin.com/in/luciardrgz/"
            target="_BLANK"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>

          <a
            href="https://drive.google.com/drive/folders/1t16MIT-lSRWpcpvIx13h9DijOSkazQND?usp=sharing"
            target="_BLANK"
            rel="noreferrer"
          >
            <img src={CV} alt="" />
          </a>
        </div>

        <Link spy={true} to="Contact" smooth={true}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="button i-button"
          >
            Let's connect!
          </motion.button>
        </Link>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-17%" }}
          transition={transition}
          src={HappyEmoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
        >
          <a
            href="https://goo.gl/maps/tL8q6JMy55MJKYX68"
            target="_BLANK"
            rel="noreferrer"
          >
            <FloatingDiv image={Earth} txt1="Mar del Plata," txt2="Argentina" />
          </a>
        </motion.div>

        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv
            image={WinkEmoji}
            txt1="I used C, PHP,"
            txt2="MySQL & JS also!"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
