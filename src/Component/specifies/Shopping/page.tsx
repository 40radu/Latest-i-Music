'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import shoppingIC from '../../../Icons/shopping.svg'
import styles from './_shopping.module.scss'
import Button from '@/Component/global/Button/page'
import BodyBasket from './BodyBasket/BodyBasket'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'
// import { Basket } from '@/Service/HandleBasket/handleBasket'




function Shopping() {

  const storeBasket = useStoreBasket()

  const numberArticles = storeBasket.getNumberProduct()

  // const basket = new Basket()
  const [showBasket, setShowBasket] = useState(false)
  // const [numberArticles, setNumberArticles] = useState(0)
  // const firstLocal = localStorage.getItem('basket')



  function handleClick() {
  //   const body = document.querySelector('body')
  //   const mask_body = document.querySelector('#mask_body_nav') as HTMLDivElement

  // if (body && mask_body) {
  //   if (showBasket === false) {
  //     body.style.overflow = 'hidden'
  //     mask_body.style.display = 'flex'
  //   } else {
  //     body.style.overflow = 'auto'
  //     mask_body.style.display = 'none'
  //   }
  // }

    setShowBasket(!showBasket)
  }

  useEffect(() => {
    storeBasket.loadData()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.nav_zone} onClick={handleClick}>
        <Image src={shoppingIC} alt='shopping icon' />
        <p className={styles.number}>{numberArticles}</p>
      </div>

      {showBasket && <BodyBasket closeBasket={handleClick}/>}

    </div>
  )
}

export default Shopping