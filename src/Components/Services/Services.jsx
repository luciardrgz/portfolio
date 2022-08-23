import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import CVLuciaRodriguez_EN from "../../Components/CVLuciaRodriguez_EN.pdf";

const Services = () => {
  return (
    <div className="services">
      {/*Left side*/}
      <div className="awesome">
        <span>This is</span>
        <span>an example</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          suscipit debitis tempore nobis atque, unde minus quisquam aspernatur
          aperiam ex corrupti eius qui odit excepturi voluptatibus nihil quas
          blanditiis sunt.
        </span>

        <a href={CVLuciaRodriguez_EN} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*Right side*/}
      {/* CARDS */}
      <div className="cards">
        {/* 1st Card*/}
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop"}
          />
        </div>

        {/*2nd Card*/}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, Css, Javascript"}
          />
        </div>

        {/*3rd Card*/}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ipsum dummy text are usually used in sections where I don't know what to write"
            }
          />
        </div>

        {/*Background blur*/}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
