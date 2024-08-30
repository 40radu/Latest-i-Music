import React from 'react'
import styles from './_price.module.scss'
import Image from 'next/image'
import PriceIc from '../../../Icons/price.svg'

interface IPrice {
    value : string
}

function Price( {value} : IPrice) {
  return (
    <div className={styles.price}>
        <Image src={PriceIc} alt='logo price'/>
        <p>{value} £</p>
    </div>
  )
}

export default Price