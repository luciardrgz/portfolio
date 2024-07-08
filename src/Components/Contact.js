import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l4uccg7",
        "template_xgzytoi",
        form.current,
        "6pf-8URel7n4_0M_R"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset(); // Clear form here
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [done, setDone] = useState(false);

  return (
    <section id="contact" className="py-11 lg:pt-48 lg:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h2 className="text-[#72ff56] text-[35px] lg:text-[45px] leading-none mb-2 text-shadow-lg">
                Let's connect <br /> I don't byte!
              </h2>
              <h4 className=" text-xl font-medium mb-2 tracking-wide">
                *Ba dum tss* 🥁
              </h4>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 mt-6 mb-20 items-center"
          >
            <input
              name="user_name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#72ff56] transition-all"
              type="text"
              placeholder="Your name"
              required
            />
            <input
              name="user_email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#72ff56] transition-all"
              type="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-[#72ff56] transition-all resize-none mb-12"
              placeholder="Your message"
              required
            ></textarea>
            <motion.button
              type="submit"
              className="btn btn-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send message
            </motion.button>
            <span className={`opacity-0 duration-300 ${done && "opacity-100"}`}>
              I'll be contacting you soon, thank you! :)
            </span>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
