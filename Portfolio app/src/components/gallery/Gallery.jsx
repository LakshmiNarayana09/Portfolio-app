import React from 'react'
import styles from './Gallery.module.css'
import { gallery } from './GalleryData.js'
import Navbar from '../home/navbar/Navbar'
import Footer from '../home/footer/Footer'

function Gallery() {
  return (
    <section className={styles.gallerySection}>

      <Navbar />
      <h1 className={styles.heading}>Gallery</h1>

      <div className={styles.gallery}>
        {gallery.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>

      <Footer />

    </section>
  )
}

export default Gallery
