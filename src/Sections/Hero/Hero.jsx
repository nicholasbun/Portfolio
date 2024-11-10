import styles from "./HeroStyles.module.css";
import imgHero from "../../assets/Profile picture.png";
import linkedinlight from "../../assets/linkedin-light.svg";
import linkedindark from "../../assets/linkedin-dark.svg";
import githublight from "../../assets/github-light.svg";
import githubdark from "../../assets/github-dark.svg";
import instagramlight from "../../assets/instagram.svg";
import instagramdark from "../../assets/instagram-dark.svg";
import CV from "../../assets/CV.pdf";
import Resume from "../../assets/RESUME.pdf";
import { useTheme } from "../../common/Themecontext";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

function Hero() {
  const { theme } = useTheme();
  const linkedinIcon = theme === "light" ? linkedinlight : linkedindark;
  const GithubIcon = theme === "light" ? githublight : githubdark;
  const InstagramIcon = theme === "light" ? instagramlight : instagramdark;
  const [text] = useTypewriter({
    words: ["Web Developer", "UI/UX Designer"],
    loop: {},
  });
  function openCV() {
    window.open(CV, "_blank");
  }
  function openResume() {
    window.open(Resume, "_blank");
  }

  return (
    <section id="Hero" className={styles.container}>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: "0.1" }}
        className={styles.colorModeContainer}
      >
        <img
          className={styles.Hero}
          src={imgHero}
          alt="My Profile Picture here!"
        />
      </motion.div>

      <motion.div
        className={styles.info}
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: "0.1" }}
      >
        <h2 className={styles.name}>Hi, I'm</h2>
        <h1>Nicholas Yonath Boentoro</h1>
        <h2>I'm a {text}</h2>

        <span>
          <a href="import Typewriter from 'typewriter-effect'"></a>
          <a href="https://linkedin.com/in/nicholas-boentoro" target="_blank">
            <img src={linkedinIcon} alt="LinkedinIcon" />
          </a>
          <a href="https://github.com/nicholasbun" target="_blank">
            <img src={GithubIcon} alt="GithubIcon" />
          </a>
          <a
            href="https://www.instagram.com/boentoro1/?igsh=bTBhemVyNmQ3eWJt"
            target="_blank"
          >
            <img src={InstagramIcon} alt="InstagramIcon" />
          </a>
        </span>

        <p className={styles.me}>
          I am an information systems student who has a passion for designing
          and studying web and mobile applications.
        </p>

        <div className="hero-btn">
          <button className="btnCV" onClick={openCV}>
            CV{" "}
          </button>
          <button className="btnResume" onClick={openResume}>
            Resume{" "}
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
