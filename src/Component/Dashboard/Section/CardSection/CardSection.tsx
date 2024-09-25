import React from 'react'
import CardDash from '../../Card/CardDash'
import styles from './_cardSection.module.scss'
import Link from 'next/link'

function CardSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.cardSection}>
        <Link href='/articles/bass'><CardDash descri='Whether with 4 cords or more, you will find here' type='bass guitar' title='bass guitar' /></Link>
        <Link href='/articles'><CardDash descri='All types of guitars are available here. No need to go anywhere else.' type='guitar' title='acoustic / electric ' /></Link>
        <Link href='/articles/ukulele'><CardDash descri='This type of instrument is starting to become popular. Here, it exists.' type='ukulele' title='ukulele' /></Link>
      </div>
    </section>
  )
}

export default CardSection