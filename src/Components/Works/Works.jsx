import React from "react";
import "./Works.css";
import Java from "../../img/java.png";
import Springboot from "../../img/spring-boot.png";
import Robot from "../../img/robot.png";
import Ai from "../../img/ai.png";
import MySQL from "../../img/mysql.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      {/*Left Side*/}
      <div className="expect">
        <span style={{ color: darkMode ? "white" : "" }}>
          What I expect <br />
        </span>
        <span>
          for my future <br />
        </span>
        <span className="expectDescription">
          🧠 I want to keep improving in Java, Springboot and MySQL — also
          backend knowledge in general
          <br />
          🤖 I'd love to study and work in robotics and artificial intelligence
          and/or cybersecurity!
          <br />
          ✈️ I plan to move to another country as soon as my seniority allows me
          to do so.
        </span>
      </div>

      {/*Right Side*/}
      <div className="w-right">
        {/*Brand circles*/}
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Java} height="120px" alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Springboot} height="100px" alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Robot} height="150px" alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Ai} height="120px" alt="" />
          </div>

          <div className="w-secCircle">
            <img src={MySQL} height="120px" alt="" />
          </div>
        </motion.div>

        {/* BG Circles */}

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
