import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const present = [
  {
    name: "Studying",
    description:
      " I've just finished my University Programming Degree at UTN Mar del Plata with an 8.73 grade, but I keep on learning, as most of IT gang does.",
    link: "See more",
  },
  {
    name: "Designing",
    description:
      "I'm learning React for the Frontend and I do enjoy using Corel Draw, Adobe software as Illustrator, Premiere, Lightroom & Photoshop, and unleash my creativity to help others!",
    link: "See more",
  },
  {
    name: "Photographing + Filmmaking",
    description:
      "Photographing or filming for any occasion are things I used to do as a hobby, now I do it for money but I hope to take it up again as 'just-a hobby' soon :)",
    link: "See more",
  },
];

const Present = () => {
  return (
    <section className="section" id="present">
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
            <h2 className="h2 text-accent mb-6">My present</h2>
            <h3 className="h3 max-w-[455px] mb-10 leading-tight">
              This is what <br /> I'm currently doing!
            </h3>
            <button className="btn btn-sm">See my code</button>
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
              const { name, description, link } = item;
              return (
                <div
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {link}
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
