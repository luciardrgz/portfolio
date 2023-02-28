import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              LUCÍA <span>RODRIGUEZ</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
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
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
            </motion.div>

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
                  {inView ? <CountUp start={0} end={21} duration={1} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years <br /> old
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={1} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years <br /> coding
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={1} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Languages used <br /> in personal projects
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Let's connect!</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaDribbble />
              </a>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
