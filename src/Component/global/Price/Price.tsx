import React from 'react'
import styles from './_price.module.scss'
import Image from 'next/image'
import PriceIc from '../../../Icons/price.svg'

interface IPrice {
    value : string
}

function Price( {value} : IPrice) {
  return (
    <section className={styles.price}>
        <Image src={PriceIc} alt='logo price' className={styles.image}/>
        <p>{value} £</p>
    </section>
  )
}

export default Price