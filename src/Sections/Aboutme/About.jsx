import styles from "./aboutus.module.css";
import { motion } from "framer-motion";
// import { profileme } from "../../assets/nicbun.jpg";
function About() {
  return (
    <section id="about" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: -200 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <h1>About Me</h1>
      </motion.div>

      <motion.div className={styles.image}>
        <motion.div
          initial={{ opacity: 0, scale: 0, y: -200 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <img src="/src/assets/logo.png" alt="Profile me" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0, y: -200 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <p>
            I am a student who is currently pursuing a Bachelor's degree in
            Information Systems at Bina Nusantara University. <br />
            <br />
            In addition to my studies, I actively seek opportunities to enhance
            my knowledge and skills through internships, projects, seminars, and
            organizational activities. I am a proactive learner and team player,
            always eager to collaborate and contribute to innovative solutions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
