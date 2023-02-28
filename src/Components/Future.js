import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Future = () => {
  return (
    <section className="section" id="future">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-future bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">My future</h2>
            <h3 className="h3 mb-1">🧠 Android</h3>
            <p className="mb-6 text-xl">
              I'm going to become an Android Developer. Java is an option, but I
              think I'm sticking to Kotlin. Who knows?
            </p>
            <h3 className="h3 mb-1">🤖 AI / Robotics / Cybersecurity</h3>
            <p className="mb-6 text-xl">
              I'd love to study and work in any of these fields!
            </p>
            <h3 className="h3 mb-1">✈️ Emigrate</h3>
            <p className="mb-6 text-xl">
              I plan to move to another country as soon as my seniority allows
              me to do so.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Future;
