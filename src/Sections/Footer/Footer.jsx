import styles from "./footerstyles.module.css";
import linkedinlight from "../../assets/linkedin-light.svg";
import linkedindark from "../../assets/linkedin-dark.svg";
import githublight from "../../assets/github-light.svg";
import githubdark from "../../assets/github-dark.svg";
import instagramlight from "../../assets/instagram.svg";
import instagramdark from "../../assets/instagram-dark.svg";
import { useTheme } from "../../common/Themecontext";
function Footer() {
  const { theme, toggleTheme } = useTheme();
  const linkedinIcon = theme === "light" ? linkedinlight : linkedindark;
  const GithubIcon = theme === "light" ? githublight : githubdark;
  const InstagramIcon = theme === "light" ? instagramlight : instagramdark;
  return (
    <section id="Footer" className={styles.container}>
      <span>
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
      <p>
        &copy; Nicholas Yonath Boentoro. <br />
        All Rights Reserved.
      </p>
    </section>
  );
}

export default Footer;
