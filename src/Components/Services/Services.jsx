import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const Services = () => {
  return (
    <div className="services">
      {/*Left side*/}
      <div className="awesome">
        <span>My awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          suscipit debitis tempore nobis atque, unde minus quisquam aspernatur
          aperiam ex corrupti eius qui odit excepturi voluptatibus nihil quas
          blanditiis sunt.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*Right side*/}
      <div className="cards">I am the right side</div>
    </div>
  );
};

export default Services;
