import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const present = [
  {
    title: "Studying",
    description:
      " I've just finished my University Programming Degree at UTN Mar del Plata with an 8.73 grade, but I keep on learning, as most of IT gang does.",
    link: "https://mdp.utn.edu.ar/tecnicatura/tecnico_universitario_en_programacion/",
  },
  {
    title: "Designing",
    description:
      "I'm learning React for the Frontend and I do enjoy using Corel Draw, Adobe software as Illustrator, Premiere, Lightroom & Photoshop!",
    link: "https://www.instagram.com/driftdisenos/",
  },
  {
    title: "Photographing + Filmmaking",
    description:
      "Photographing or filming for any occasion are things I used to do as a hobby, now I do it for money but I hope to take it up again as 'just-a hobby' soon :)",
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

                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href={link}
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <BsArrowUpRight />
                    </a>
                  </div>
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
