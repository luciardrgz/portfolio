import React from "react";
import "./Future.css";
import Java from "../../img/java.png";
import Android from "../../img/android.png";
import Robot from "../../img/robot.png";
import Ai from "../../img/ai.png";
import CyberSec from "../../img/cybersecurity.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Future = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="Future">
      {/*Left Side*/}
      <div className="expect">
        <span style={{ color: darkMode ? "white" : "" }}>What I hope</span>
        <span>for my future</span>
        <div className="expectDescription">
          🧠 I'm going to become an Android Developer.
          <br />
          🤖 I'd love to study and work in robotics and artificial intelligence
          and/or cybersecurity!
          <br />
          ✈️ I plan to move to another country as soon as my seniority allows me
          to do so.
        </div>
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
            <img src={Java} height="150em" alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Android} height="150em" alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Robot} height="170em" alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Ai} height="150em" alt="" />
          </div>

          <div className="w-secCircle">
            <img src={CyberSec} height="190em" alt="" />
          </div>
        </motion.div>

        {/* BG Circles */}

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Future;
