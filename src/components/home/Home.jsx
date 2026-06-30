import React from 'react'
import styles from './Home.module.css'
import Navbar from './navbar/Navbar'
import Main from './main/Main'
import About from './about/About'
import ProjectsContainer from './projects/ProjectsContainer'
import GetInTouch from './getintouch/GetInTouch'
import Footer from './footer/Footer'

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Main />
      <About />
      <ProjectsContainer />
      <GetInTouch />
      <Footer />
      
    </div>
  )
}

export default Home