import React from 'react'
import styles from './Contactus.module.css'
import Navbar from '../home/navbar/Navbar'
import Footer from '../home/footer/Footer'
import GetInTouch from '../home/getintouch/GetInTouch'

function Contactus() {
  return (
    <section className={styles.contact} id="contact">
      <Navbar />
      <div className={styles.heading}>
        <h1>CONTACT</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Get in Touch</h2>

          <p>
            If you are interested in my work or want
            <br />
            to provide feedback about this website,
            <br />
            I am open to exchanging ideas.
          </p>
        </div>

        <div className={styles.right}>
          <form>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input type="text" />
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" />
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea rows="7"></textarea>
            </div>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contactus
