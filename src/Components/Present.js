import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const present = [
  {
    title: "Working",
    description:
      "I'm a backend dev at Baufest, a software company that provides solutions for different industries. I'm working with an awesome team in fintech with Java and Spring Boot!",
    link: "https://mdp.utn.edu.ar/tecnicatura/tecnico_universitario_en_programacion/",
  },
  {
    title: "Studying",
    description:
      " I've graduated from a University Programming Degree at UTN Mar del Plata with an 8.7 grade, but I keep on learning, as most of IT gang does.",
    link: "https://mdp.utn.edu.ar/tecnicatura/tecnico_universitario_en_programacion/",
  },
  {
    title: "Leaving my PC",
    description:
      "To go to the gym, drinking mate at the coast, taking pictures of cars, learning car mechanics and watching series.",
    link: "https://www.instagram.com/_fotosporquesi/",
  },
];

const Present = () => {
  return (
    <section className="section -mb-20 lg:mb-0" id="present">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-present lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 mb-6 title-style text-shadow-lg">My present</h2>
            <h3 className="h3 max-w-[455px] -mb-5 lg:mb-10 leading-tight">
              This is what <br /> I'm currently doing!
            </h3>
          </motion.div>

          {/* Present */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Present list */}
            {present.map((item, index) => {
              const { title, description, link } = item;
              return (
                <div
                  className="border-b border-white/20 h-full mb-[38px] flex lg:h-[150px] lg:mb-[18px]"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[#72ff56] text-[20px] tracking-wider font-primary font-semibold mb-2 text-shadow-lg">
                      {title}
                    </h4>

                    <p className="font-secondary leading-6 text-justify mb-5">
                      {description}
                    </p>
                  </div>

                  <motion.div
                    className="flex flex-col flex-1 items-end"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href={link}
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <BsArrowUpRight />
                    </a>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Present;
