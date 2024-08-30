import React from 'react'
import styles from './_opinion.module.scss'
import CardOpinion from '../../CardOpinion/CardOpinion'

function Opinion() {
  return (
    <section className={styles.opinion}>
        <CardOpinion name='Simon dupont' value='Delivery is always reliable and quality is always top-notch. I highly recommend it if you are looking to buy a new guitar.'/>
        <CardOpinion name='Gabrielle Thomas' value='I don&apos;t know anything about buying a guitar, but everyone tells me my guitar is perfect. If you&apos;re here, you&apos;ve come to the right place'/>
    </section>
  )
}

export default Opinion