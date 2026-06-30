import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h1>About</h1>
        <p>
          Hi there! I'm Rahul, a third-year Computer Science student at SRM Institute with a passion for crafting user-centric experiences. I specialize in UI/UX design, front-end development, and graphic design, with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, QML, and C++. I thrive on collaboration and bring experience in agile scrum methodologies. Beyond coding, I enjoy photography, graphic design, and exploring music. Let's connect and bring your digital visions to life
        </p>
      </div>

      <div className={styles.buttons}>
        <button className={styles.moreButtons}>More....</button>
      </div>
    </div>
  )
}

export default About
