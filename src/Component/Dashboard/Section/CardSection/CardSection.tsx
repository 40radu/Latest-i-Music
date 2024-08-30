import React from 'react'
import CardDash from '../../Card/CardDash'
import styles from './_cardSection.module.scss'

function CardSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.cardSection}>
        <CardDash descri='Whether with 4 cords or more, you will find here' type='bass guitar' title='bass guitar' />
        <CardDash descri='All types of guitars are available here. No need to go anywhere else.' type='guitar' title='acoustic / electric ' />
        <CardDash descri='This type of instrument is starting to become popular. Here, it exists.' type='ukulele' title='ukulele' />
      </div>
    </section>
  )
}

export default CardSection