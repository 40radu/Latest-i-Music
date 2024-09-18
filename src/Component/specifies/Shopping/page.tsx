'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import shoppingIC from '../../../Icons/shopping.svg'
import styles from './_shopping.module.scss'
import Button from '@/Component/global/Button/page'
import BodyBasket from './BodyBasket/BodyBasket'




function Shopping() {

  const [showBasket, setShowBasket] = useState(false)

  function handleClick() {
        setShowBasket(!showBasket)
  }

  return (
    <div className={styles.container}>
      <div className={styles.nav_zone} onClick={handleClick}>
        <Image src={shoppingIC} alt='shopping icon' />
        <p className={styles.number}>0</p>
      </div>

      {showBasket && <BodyBasket />}

    </div>
  )
}

export default Shopping