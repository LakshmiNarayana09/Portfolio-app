import React from 'react'
import styles from './ProjectsContainer.module.css'
import portfolioImg from '../../../assets/portfilioImg.png'
import weatherImg from '../../../assets/weatherImg.png'
import credImg from '../../../assets/credImg.png'
import ProjectCard from './ProjectCard'
import logos from '../../../assets/logos.png'

const projects = [
  {
    id: 1,
    title: "Portfolio",
    category: "Frontend",
    description:
      "Developed to showcase my skills in web development using React, CSS, and Figma.",
    image: portfolioImg,
    technologies: logos,
  },
  {
    id: 2,
    title: "Weather App",
    category: "Full Stack",
    description:
      "Weather application with real-time API integration and responsive UI.",
    image: weatherImg,
    technologies: logos,
  },
  {
    id: 3,
    title: "Cred Clone",
    category: "Frontend",
    description:
      "A responsive clone of the CRED landing page built with React.",
    image: credImg,
    technologies: logos,
  },
];


function ProjectsContainer() {
  return (
    <div className={styles.container}>

        <div className={styles.recentHeader}>
          <h2>Recent Projects</h2>

          <a href="/" className={styles.seeAll}>
            See all <span>→</span>
          </a>
        </div>

        <div className={styles.projectCards}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
            />
          ))}

        </div>
      
    </div>
  )
}

export default ProjectsContainer
