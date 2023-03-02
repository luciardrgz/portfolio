import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import useMediaQuery from "../useMediaQuery.js";

const Future = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  var classNameOnDevice;
  isMobile
    ? (classNameOnDevice =
        "flex-1 bg-futureMobile bg-contain bg-center bg-no-repeat h-full -mb-20 lg:mb-0")
    : (classNameOnDevice =
        "flex-1 bg-future bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top");

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
            className={classNameOnDevice}
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-shadow-lg title-style text-shadow-lg">
              My future
            </h2>
            <h3 className="h3 -mb-1 lg:mb-1 text-[#72ff56]">🧠 Android</h3>
            <p className="mb-6 text-justify leading-6 lg:mb-12">
              I'm going to become an Android Developer. <br /> Java is an
              option, but I think I'm sticking to Kotlin. Who knows?
            </p>
            <h3 className="h3 mb-1 text-[#72ff56] leading-tight">
              🤖 AI / Robotics / Cybersecurity
            </h3>
            <p className="mb-6 text-justify leading-6 lg:mb-12">
              I'd love to study and work in any of these fields!
            </p>
            <h3 className="h3 -mb-1 lg:mb-1 text-[#72ff56]">✈️ Emigrate</h3>
            <p className="mb-6 text-justify leading-6 lg:mb-12">
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
