import React from 'react'
import styles from './Footer.module.css'
import finalLogo from '../../../assets/finalLogo.png'


function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.logo}>
            <img src={finalLogo} alt="Logo" />
        </div>

        <div className={styles.content}>
            <h2>
                Designing the <span className={styles.highlight}>extraordinary</span>
                <br />
                one <span className={styles.highlight}>pixel</span> at a time.
            </h2>

            <p>Portfolio v2.3 © 2024 Rahul</p>
        </div>
    </div>
  )
}

export default Footer

