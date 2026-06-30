import React from 'react'
import styles from './Main.module.css'
import portfolioImg from '../../../assets/portfilioImg.png'

function Main() {
  return (
    <div className={styles.main}>

      <h1 className={styles.bgText}>DEVELOPER UI <br /> FRONTEND DEVELOPER</h1>
      <p>Hey There I'm</p>
      <h2>Rahul</h2>
      <p>Currently Studying computer science</p>
      <p>and Engigneering</p>
      <div className={styles.icons}>
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-github"></i>
      </div>
      
    </div>

  )
}

export default Main
