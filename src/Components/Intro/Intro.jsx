import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import fotoCV from "../../img/fotoCV.png";
import SmileEmoji from "../../img/smile.png";
import Rushpin from "../../img/rushpin.png";
import CV from "../../img/cv.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="Home">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I am</span>
          <span>Lucia Rodriguez</span>
          <span style={{ color: darkMode ? "darkGray" : "" }}>
            Backend Developer with knowledge in Java + SpringBoot and Relational
            Databases
          </span>
        </div>

        <div className="i-icons">
          <a href="https://github.com/luciardrgz">
            <img src={Github} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/luciardrgz/">
            <img src={LinkedIn} alt="" />
          </a>

          <a href="https://drive.google.com/drive/folders/1t16MIT-lSRWpcpvIx13h9DijOSkazQND?usp=sharing">
            <img src={CV} alt="" />
          </a>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="button i-button"
        >
          Let's talk!
        </motion.button>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={fotoCV} id="fotoCV" alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Rushpin} txt1="Mar del Plata," txt2="Argentina" />
        </motion.div>

        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv
            image={SmileEmoji}
            txt1="Also managed C,"
            txt2="PHP and JavaScript"
          />
        </motion.div>

        {/*Blurs*/}
        <div className="blur" style={{ background: "rgb (238 210 255)" }}></div>

        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "14rem",
            left: "-3rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
