import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div className="-mb-20 lg:-mb-7">
              <h2 className="h2 title-style text-shadow-lg">
                My latest <br />
                work & projects
              </h2>
              <p className="max-w-sm mb-6 text-justify lg:text-start">
                If any of them is published, you can click its name and see the
                live demo. Check their source code clicking the button above!
              </p>
              <button className="btn btn-sm float-right lg:float-none">
                View all
              </button>
            </div>

            {/* 2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-[70px]">
              {/* overlay */}
              <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>

              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />

              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  Java Swing + SQL for Desktop (IN PROCESS)
                </span>
              </div>

              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  Inventory Management System
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* 1 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>

              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />

              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Traditional Web + CMS</span>
              </div>

              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  className="text-3xl text-white"
                  href="https://full-tecno-luciardrgz.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Full Tecno
                </a>
              </div>
            </div>

            {/* 3 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:mt-4">
              {/* overlay */}
              <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>

              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />

              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Android (PROTOTYPED)</span>
              </div>

              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Tiki Tiki</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
