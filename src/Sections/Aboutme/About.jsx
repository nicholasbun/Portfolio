import styles from "./aboutus.module.css";
import { motion } from "framer-motion";
import nicbunImage from "../../assets/nicbun.png";
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
          <img src={nicbunImage} alt="Profile me" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0, y: -200 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <p>
            As a dedicated Bachelor's student in Information Systems at the
            esteemed Bina Nusantara University, I am passionate about expanding
            my knowledge and honing my skills beyond the classroom.
            <br />
            <br />I consistently seek out internships, engage in impactful
            projects, participate in insightful seminars, and actively
            contribute to student organizations. My proactive learning approach
            and collaborative spirit empower me to thrive in team environments,
            driving innovation and delivering results in every endeavor.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
