import React from 'react'
import styles from './About.module.css'
import Navbar from '../home/navbar/Navbar'
import Footer from '../home/footer/Footer'
import profile from '../../assets/profile.png'
import html from '../../assets/html.png'
import node from "../../assets/nodejs.jpg";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.png";
import pr from "../../assets/pr.png";
import react from "../../assets/react.png";
import figma from "../../assets/figma.png";
import cpp from '../../assets/cpp.png'



function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.header}>
            <h1>ABOUT</h1>
        </div>

        <div className={styles.body}>
          <div className={styles.profile}>
              <img src={profile} alt="" />
          </div>
          <div className={styles.content}>
            <p>
              I'm a Computer Science student at <span>SRM Institute of Science and Technology</span>. My
              passion lies in building user-friendly solutions that enhance overall user
              experiences. I am currently focused on <span>React Native</span>, <span>Expo</span>,
              <span>Firebase</span>, and <span>React</span>, leveraging these technologies
              to create responsive and functional applications. One of my ongoing projects
              is Rescue Paws, a mobile app designed to facilitate the rescue and adoption of
              stray and pet dogs. The app will soon be published on the <span>Play Store</span> and
              <span> App Store</span>, and it incorporates AI-driven features to guide users
              through the adoption process. In addition to app development, I've led the
              design and development of platforms like the <span>GitHub Community SRM</span>
              website, which serves as an all-in-one platform for the community. I've also
              organized and managed events such as hackathons and workshops, mentoring
              others in <span>UI/UX</span> and <span>graphic design</span>. I thrive in
              <span> Agile Scrum environments</span> and believe collaboration and teamwork
              are essential to delivering successful projects. I'm always eager to work on
              impactful projects that challenge me to grow while also contributing to
              meaningful outcomes. So, whether you're <span>looking for a dedicated developer</span>,
              <span> a creative designer</span>, or a <span>collaborative team member</span>,
              I'm here to help bring ideas to life. Let's connect and create innovative
              solutions together!
            </p>

            <button className={styles.resumeBtn}>
              <i className="bi bi-filetype-pdf"></i>
              Download Resume
            </button>
          </div>
        </div>

        <div className={styles.foot}>

          <div className={styles.skills}>

            <h2>Skills</h2>
              
              <div className={styles.images}>
                
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={cpp} alt="" />
                <img src={react} alt="" />
                <img src={node} alt="" />
                <img src={figma} alt="" />
                <img src={tailwind} alt="" />
                <img src={pr} alt="" />
                
              </div>
          </div>
          <div className={styles.icons}>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-behance"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-github"></i>
          </div> 

        </div>

        <Footer />
      </div>
    </div>
  )
}

export default About
