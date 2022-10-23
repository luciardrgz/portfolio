import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { textAlign } from "@mui/system";

const Services = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/*Left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>This is what</span>
        <span>I'm currently doing!</span>
        <span className="currentlyDoing">
          🤓 Study backend programming at University and play a bit with
          frontend on my own <br />
          💸 Earning money with design, photography & filmmaking <br />
          👩🏻‍💻 Aiming to get my first job as a developer as soon as I finish
          college this year.
        </span>

        <a
          href="https://drive.google.com/drive/folders/1t16MIT-lSRWpcpvIx13h9DijOSkazQND?usp=sharing"
          target="_BLANK"
        >
          <button className="button s-button">See my CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*Right side*/}
      {/* CARDS */}
      <div className="cards">
        {/* 1st Card*/}
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Studying"}
            detail={
              "I love learning about everything, but above all I like technology and challenges, that's why I'm studying my last year of the University Programming Degree at UTN Mar del Plata."
            }
            btnLink={
              "https://mdp.utn.edu.ar/tecnicatura/tecnico_universitario_en_programacion/"
            }
          />
        </motion.div>

        {/*2nd Card*/}
        <motion.div
          initial={{ left: "-9rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Designing"}
            detail={
              "I'm not really into Frontend or UX/UI right now, but I enjoy using Corel Draw, Adobe software like Illustrator & Photoshop, and unleash my creativity to help others!"
            }
            btnLink={"https://www.instagram.com/driftdisenos/"}
          />
        </motion.div>

        {/*3rd Card*/}
        <motion.div
          initial={{ top: "21rem", left: "20rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Taking pictures or videos"}
            detail={
              "Photographing or filming for any occasion are things I used to do as a hobby, now I do it for money but I hope to take it up again as 'just-a hobby' soon :)"
            }
            btnLink={"https://www.instagram.com/_fotosporquesi/"}
          />
        </motion.div>

        {/*Background blur*/}
        <div
          className="blur s-blur2"
          style={{ background: "var(--white)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
