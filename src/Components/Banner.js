import React from "react";
import Image from "../assets/perfil.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import useMediaQuery from "../useMediaQuery.js";
import { Link } from "react-scroll";
import { fadeIn } from "../variants.js";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const isMobile = useMediaQuery("(max-width: 767px)");
  var repeat;
  isMobile ? (repeat = 2) : (repeat = Infinity);

  return (
    <section
      className="flex h-screen items-center max-sm:mt-[50%]"
      id="home"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row items-center lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[70px]"
            >
              LUCÍA RODRIGUEZ
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I'm a</span>
              <TypeAnimation
                sequence={[
                  "Backend developer",
                  2000,
                  "Graphic designer",
                  2000,
                  "Photographer & filmmaker",
                  2000,
                ]}
                speed={50}
                className="text-[#72ff56] text-shadow-lg"
                wrapper="span"
                repeat={repeat}
              ></TypeAnimation>
            </motion.div>

            <div className="flex justify-center lg:flex-none lg:justify-start mt-[50px]">
              {/* stats */}
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-x-6 lg:gap-x-10 mb-12"
              >
                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? (
                      <CountUp start={0} end={23} duration={1} />
                    ) : null}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    years <br /> existing
                  </div>
                </div>

                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? <CountUp start={0} end={5} duration={1} /> : null}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    languages used <br /> in personal projects
                  </div>
                </div>

                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? <CountUp start={0} end={3} duration={1} /> : null}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    years <br /> coding
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <motion.button
                className="btn btn-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="https://www.linkedin.com/in/luciardrgz/">
                  Let's connect!
                </a>
              </motion.button>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-gradient btn-link hover:cursor-pointer"
              >
                Latest work
              </Link>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <motion.a
                href="https://www.linkedin.com/in/luciardrgz/"
                title="My LinkedIn profile"
                target={"_blank"}
                rel="noreferrer"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.3 }}
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://github.com/luciardrgz"
                title="My GitHub profile"
                target={"_blank"}
                rel="noreferrer"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.3 }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://drive.google.com/drive/u/0/folders/1t16MIT-lSRWpcpvIx13h9DijOSkazQND"
                target={"_blank"}
                rel="noreferrer"
                title="Download CV"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.3 }}
              >
                <FaFileDownload />
              </motion.a>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="lg:flex flex-1 max-w-[30rem] mb-10 shadow-lg"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
