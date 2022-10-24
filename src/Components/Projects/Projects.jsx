import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Projects">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "" }}></span>
      <span>My Projects 🏗️</span> <br />
      Soon you'll see them below, for now
      <a href="https://github.com/luciardrgz" target="_BLANK" rel="noreferrer">
        you can find them clicking here
      </a>
      {/*Slider*/}
      <Swiper
        spaceBetween={1}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
