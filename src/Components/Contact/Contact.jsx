import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const [done, setDone] = useState(false);

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="letsConnect">
          <span style={{ color: darkMode ? "white" : "" }}>Let's connect</span>
          <span>I don't byte!</span>

          <div className="badum">
            <label>*Ba dum tss* 🥁</label>
          </div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder=" Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder=" Your Email"
            required
          />

          <textarea
            name="message"
            className="user"
            placeholder=" What'd you like to tell me? :)"
            required
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="button send-button"
            type="submit"
            value="Send"
          >
            Send
          </motion.button>

          {/*If done is true*/}
          <span>{done && "Thanks for contacting me!"}</span>

          <div
            className="blur c-blur1"
            style={{ background: "var(--gr)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
