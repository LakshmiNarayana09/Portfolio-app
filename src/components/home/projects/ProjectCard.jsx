import React from 'react'
import styles from './ProjectCard.module.css'
import { useNavigate } from 'react-router-dom';

function ProjectCard({
  id,
  title,
  category,
  description,
  image,
  technologies,
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/project/${id}`)}>
      <img src={image} alt={title} className={styles.projectImage} />

      <div className={styles.cardContent}>
        <h3>{title}</h3>

        <span className={styles.category}>{category}</span>

        <p>{description}</p>

        <img
          src={technologies}
          alt="Technologies"
          className={styles.techImage}
        />
        
      </div>
    </div>
  );
}

export default ProjectCard;