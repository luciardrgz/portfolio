import React from "react";
import "./Present.css";
import Studying from "../../img/studying.png";
import GraphicD from "../../img/design.webp";
import Camera from "../../img/camera.png";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Present = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Present">
      {/*Left side*/}
      <div className="doing">
        <span style={{ color: darkMode ? "white" : "" }}>This is what</span>
        <span>I'm currently doing!</span>
        <div className="currentlyDoing">
          🤓 Study backend programming at University and play a bit with
          frontend on my own <br />
          💸 Earning money with design, photography & filmmaking <br />
          👩🏻‍💻 Aiming to get my first job as a developer as soon as I finish
          college this year.
        </div>

        <a
          href="https://drive.google.com/drive/folders/1t16MIT-lSRWpcpvIx13h9DijOSkazQND?usp=sharing"
          target="_BLANK"
          rel="noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="button s-button"
          >
            See my CV
          </motion.button>
        </a>
      </div>

      {/*Right side*/}
      {/* CARDS */}
      <div className="cards">
        {/* 1st Card*/}
        <motion.div
          initial={{ top: "2rem", left: "16rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={Studying}
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
          initial={{ left: "-5rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={GraphicD}
            heading={"Designing"}
            detail={
              "I'm not really into Frontend or UX/UI right now, but I do enjoy using Corel Draw, Adobe software as Illustrator, Premiere, Lightroom & Photoshop, and unleash my creativity to help others!"
            }
            btnLink={"https://www.instagram.com/driftdisenos/"}
          />
        </motion.div>

        {/*3rd Card*/}
        <motion.div
          initial={{ top: "24rem", left: "16rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={Camera}
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

export default Present;
