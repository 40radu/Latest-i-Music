import React from 'react'
import styles from './_hero.module.scss'

function Hero() {
  return (
    <section className={styles.hero_contact}>
      <h2>
        Do you need help <span className={styles.lowercase}>or</span> have more <span>questions</span> ?
      </h2>

      <p className={styles.descri}>
        You can send your question or suggestion here.
        We'll get back to you as soon ass possible.
      </p>

    </section>
  )
}

export default Hero