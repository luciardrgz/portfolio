import React from "react";
import { HiHome, HiLightBulb, HiBriefcase } from "react-icons/hi";
import { GoTelescope } from "react-icons/go";
import { SiGooglemessages } from "react-icons/si";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidde z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active-link"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <HiHome />
          </Link>
          <Link
            to="present"
            activeClass="active-link"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <HiLightBulb />
          </Link>
          <Link
            to="future"
            activeClass="active-link"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <GoTelescope />
          </Link>
          <Link
            to="work"
            activeClass="active-link"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <HiBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active-link"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <SiGooglemessages />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
