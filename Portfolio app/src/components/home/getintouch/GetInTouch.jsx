import React from 'react'
import styles from './GetInTouch.module.css'


function GetInTouch() {
  return (
    <div className={styles.container}>

        <div className={styles.left}>
            <h1>Get in Touch</h1>

            <p>
            If you are interested in my work or want
            <br />
            to provide feedback about this website, I
            <br />
            am open to exchanging ideas.
            </p>
        </div>

        <div className={styles.right}>
            <div className={styles.social}>
                <h4>Follow me on</h4>

                <div className={styles.icons}>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-behance"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-github"></i>
                </div>
        
            </div>

            <button className={styles.contactBtn}>
                Contact Me
                <i className="bi bi-send"></i>
            </button>
            
        </div>
      
    </div>
  )
}

export default GetInTouch
