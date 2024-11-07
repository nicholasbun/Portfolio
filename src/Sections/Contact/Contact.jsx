import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contactstyle.module.css";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gsvrtjl", "template_ynkc6c9", form.current, {
        publicKey: "l9ypusYgGDb5kRPfr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <motion.section
      id="contact"
      className={styles.container}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <h1 className="title">Contact</h1>
      <form ref={form} onSubmit={sendEmail} action="">
        <motion.div className="Groupform">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="name"
            placeholder="Name"
            required
          />
        </motion.div>

        <motion.div className="Groupform">
          <label htmlFor="email" hidden>
            email
          </label>
          <input
            type="text"
            name="from_email"
            id="email"
            placeholder="Email"
            required
          />
        </motion.div>

        <motion.div className="Groupform">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea name="message" id="message" placeholder="Message" required>
            {" "}
          </textarea>
        </motion.div>

        <input className="hover" type="submit" value="Send" />
      </form>
    </motion.section>
  );
}

export default Contact;
