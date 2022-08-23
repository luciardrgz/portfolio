import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div className="works">
      {/*Left Side*/}
      <div className="awesome">
        <span>Worked for All</span>
        <span>of these Brands</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          suscipit debitis tempore<br></br>
          nobis atque, unde minus quisquam aspernatur aperiam ex corrupti eius
          qui odit excepturi voluptatibus nihil quas blanditiissunt.
        </span>

        <button className="button s-button">Contact me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*Right Side*/}
      <div className="w-right">
        {/*Brand circles*/}
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>

        {/* BG Circles */}

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
