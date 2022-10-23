import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useContext } from "react";

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
          <span style={{ color: darkMode ? "white" : "" }}>
            Let's connect <br />
          </span>
          <span>I don't byte! 🦖</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />

          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>

          <input type="submit" value="Send" className="button" />

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
