import React from "react";
import "./Card.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Card = ({ emoji, heading, detail, btnLink }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span style={{ color: darkMode ? "white" : "" }}>{heading}</span>
      <span style={{ color: darkMode ? "white" : "" }}>{detail}</span>

      <a href={btnLink} className="c-button">
        Take a look
      </a>
    </div>
  );
};

export default Card;
