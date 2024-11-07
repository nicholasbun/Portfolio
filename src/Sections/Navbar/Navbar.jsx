import burgerdark from "../../assets/burger-light.png";
import burgerlight from "../../assets/burger-dark.png";
import logo from "../../assets/logo.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../../common/Themecontext";
function Navbar() {
  const root = document.documentElement;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const iconTheme = theme === "light" ? sun : moon;
  const barburger = theme === "light" ? burgerlight : burgerdark;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (theme == "light") {
      root.style.setProperty("--navbar-bg-light", "#fffffffff");
    } else {
      root.style.setProperty("--navbar-bg-dark", "#333333");
    }
  }, [theme]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setIsScrolled(true);
      setIsHidden(false);
    } else {
      setIsScrolled(false);
      setIsHidden(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroElement = document.getElementById("Hero");
    heroElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    projectsElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    const skillsElement = document.getElementById("skills");
    skillsElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    contactElement.scrollToView({ behavior: "smooth" });
  };
  return (
    <div className={style.containernav}>
      <nav
        id="navbar"
        className={`
        ${style.navbardeskop} 
        ${isScrolled ? style.scrolled : ""}
        ${isHidden ? style.hidden : ""}
        `}
      >
        <div className={style.logoContainer}>
          <img
            src={logo}
            alt="MyLogo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        <div className={style.component}>
          <ul className={style.linkList}>
            <li>
              <Link to={"#Hero"} onClick={scrollToHero}>
                Profile
              </Link>
            </li>
            <li>
              <Link to={"#about"} onClick={scrollToAbout}>
                About
              </Link>
            </li>
            <li>
              <Link to={"#projects"} onClick={scrollToProjects}>
                Projects
              </Link>
            </li>
            <li>
              <Link to={"#skills"} onClick={scrollToSkills}>
                Skills
              </Link>
            </li>
          </ul>
        </div>

        <div className={style.buttonContainer}>
          <button className={style.contactbtn}>
            <Link to={"#contact"} onClick={scrollToContact}>
              Contact
            </Link>
          </button>
        </div>

        <div className={style.icon}>
          <img
            className={style.themeMode}
            src={iconTheme}
            alt="Change Theme Icon"
            onClick={toggleTheme}
          />
        </div>
      </nav>

      {/* MOBILE NAV */}
      <nav className={style.mobilenav}>
        <div className={style.logoContainer}>
          <img src={logo} alt="MyLogo" />
        </div>

        <div className={style.hamburger} onClick={toggleMenu}>
          <img src={barburger} alt="Menu" />
        </div>

        <div
          className={`${style.mobileMenu} ${isMenuOpen ? style.active : ""}`}
        >
          <ul className={`${style.linkList} ${isMenuOpen ? style.active : ""}`}>
            <li>
              <Link to={"#Hero"} onClick={() => scrollToHero("Hero")}>
                Profile
              </Link>
            </li>
            <li>
              <Link to={"#about"} onClick={() => scrollToAbout("about")}>
                About
              </Link>
            </li>
            <li>
              <Link
                to={"#projects"}
                onClick={() => scrollToProjects("projects")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to={"#skills"} onClick={() => scrollToSkills("skills")}>
                Skills
              </Link>
            </li>
            <li>
              <Link to={"#contact"} onClick={() => scrollToContact("contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={style.icon}>
          <img
            className={style.themeMode}
            src={iconTheme}
            alt="Change Theme Icon"
            onClick={toggleTheme}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
