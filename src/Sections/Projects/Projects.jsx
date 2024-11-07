// import React from "react";
import styles from "./Projectstyle.module.css";
import WheelHub from "../../assets/WheelHub.jpg";
import Clminton from "../../assets/Clminton.png";
import Hoodo from "../../assets/Hodoo.png";
import EOK from "../../assets/EOK.png";
import Skintastic from "../../assets/skintastic.png";
import tomodime from "../../assets/tomodime.png";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "WheelHub",
      description: "A Retail Car Web",
      image: WheelHub,
      link: "https://github.com/nicholasbun/WheelHub",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Climton",
      description: "A Program to manage inventory for Badminton Store",
      image: Clminton,
      link: "https://github.com/nicholasbun/CLminton",
      tags: ["Java", "JavaFX", "MySQL"],
    },
    {
      id: 3,
      title: "EOK",
      description: "Help people in finding event organizers",
      image: EOK,
      link: "https://www.figma.com/proto/6RbhGQOJkNhFqWkuO0w2xT/EOK",
      tags: ["Figma", "UI/UX", "Prototype"],
    },
    {
      id: 4,
      title: "HooDo",
      description: "A platform to create custom gifts",
      image: Hoodo,
      link: "https://www.figma.com/proto/B9BKNQJKhWTAUQI2zVSYQD/HOOdOO",
      tags: ["Figma", "UI/UX", "Design"],
    },
    {
      id: 5,
      title: "Skintastic",
      description:
        "Facial skincare products that can be purchased and refilled",
      image: Skintastic,
      link: "https://www.figma.com/proto/OlKucZBQIYSUCQ8lS39vgQ/AOL-UI-UX-LAB",
      tags: ["Figma", "UI/UX", "E-commerce"],
    },
    {
      id: 6,
      title: "Tomodime",
      description: "Streaming and various content for anime",
      image: tomodime,
      link: "https://www.figma.com/proto/ykfCZdi5bwW3CfV2SrqQbe/BH11-TM07-10",
      tags: ["Figma", "UI/UX", "Streaming"],
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <motion.div
        className={styles.headerContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.subtitle}>Here are some of my Project</p>
      </motion.div>

      <motion.div
        className={styles.projectGrid}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} />
              <div className={styles.overlay}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                >
                  View Project
                </a>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
