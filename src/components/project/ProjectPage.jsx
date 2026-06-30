import React from 'react'
import styles from './ProjectPage.module.css'
import Navbar from '../home/navbar/Navbar'
import ProjectCard from '../home/projects/ProjectCard';
import Footer from '../home/footer/Footer'
import projects from '../data/projects.js'

function ProjectPage() {
  return (
    <div className={styles.project}>
      <Navbar />
      <div className={styles.title}>
          <h1>Projects</h1>
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
      <Footer />
    </div>
  )
}

export default ProjectPage
