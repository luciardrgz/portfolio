import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import fotoCV from "../../img/fotoCV.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am</span>
          <span>Lucia Rodriguez</span>
          <span>Trainee Backend Developer with knowledge in C, Java</span>
        </div>

        <button className="button i-button">Let's talk</button>

        <div className="i-icons">
          <a href="https://github.com/luciardrgz">
            <img src={Github} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/luciardrgz/">
            <img src={LinkedIn} alt="" />
          </a>

          <a href="https://www.instagram.com/instagram/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={fotoCV} alt="" />
        <img src={glassesimoji} alt="" />

        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Backend" txt2="Developer" />
        </div>

        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Tengo" txt2="pasta dental" />
        </div>

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
