import React from 'react'
import projects from '../data/projects.js'
import { useParams } from "react-router-dom";
import styles from './ProjectDescription.module.css'
import Navbar from '../home/navbar/Navbar.jsx'
import Footer from '../home/footer/Footer.jsx';
import { useNavigate } from 'react-router-dom';


function ProjectDescription() {

    const navigate = useNavigate();

    const { id } = useParams();

    const project = projects.find(
      (item) => item.id === Number(id)
    );

    if (!project) {
      return <h2>Project Not Found</h2>;
    }

  return (
    <div className={styles.description}>
      <Navbar />

      <div className={styles.container}>

        <div className={styles.buttons} onClick={() => navigate("/project")}>
          <button>← Back</button>
        </div>

        <div className={styles.projectSection}>

          <div className={styles.left}>
            <img src={project.image} alt={project.title} />
          </div>

          <div className={styles.right}>
            <h1>{project.title}</h1>

            <h3>{project.category}</h3>

            <p>{project.description}</p>

            <h2>Tech Stack</h2>

            <img
              className={styles.tech}
              src={project.technologies}
              alt=""
            />

            <div className={styles.actions}>
              <button>Demo</button>
              <button>GitHub</button>
            </div>
          </div>

        </div>

        <div className={styles.features}>
          <h2>Main Features</h2>

          <p>{project.overview}</p>
        </div>
        <Footer />
      </div>

    </div>
  )
}

export default ProjectDescription
