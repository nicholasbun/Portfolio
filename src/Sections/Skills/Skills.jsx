import styles from "./Skillstyle.module.css";
import { motion } from "framer-motion";
function Skills() {
  const skillCategories = {
    development: [
      {
        name: "React",
        src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      },
      {
        name: "Node.js",
        src: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
      },
      {
        name: "JavaScript",
        src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      },
      {
        name: "Java",
        src: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
      },
      {
        name: "JavaFX",
        src: "https://img.shields.io/badge/javafx-%23FF0000.svg?style=for-the-badge&amp;logo=javafx&amp;logoColor=white",
      },
      {
        name: "SSMS",
        src: "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white",
      },
      {
        name: "Github",
        src: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
      },
    ],
    frontend: [
      {
        name: "HTML",
        src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      },
      {
        name: "CSS",
        src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
      },
      {
        name: "jQuery",
        src: "https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white",
      },
      {
        name: "Vite",
        src: "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
      },
    ],
    design: [
      {
        name: "Figma",
        src: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
      },
      {
        name: "Adobe PS",
        src: "https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white",
      },
      {
        name: "Canva",
        src: "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white",
      },
    ],
    Other: [
      {
        name : "Vercel",
        src: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
      },
      {
          name: "Adobe Acrobat Reader",
          src: "https://img.shields.io/badge/Adobe%20Acrobat%20Reader-EC1C24.svg?style=for-the-badge&logo=Adobe%20Acrobat%20Reader&logoColor=white",
      },
      {
        name : "Notion",
        src: "https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white",
      },
    ],
  };
  return (
    <section id="skills" className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>
      <div className={styles.skillsGrid}>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <motion.div
            key={category}
            className={styles.categoryContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.skillsList}>
              {skills.map((skill) => (
                <img
                  key={skill.name}
                  src={skill.src}
                  alt={skill.name}
                  className={styles.skillBadge}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
